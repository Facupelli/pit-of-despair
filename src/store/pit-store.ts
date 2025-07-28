import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { pitReducer } from "./pit-reducer";
import { selectMonochrome } from "./selectors";
import type { PitEvent, PitState } from "./types";

export const usePitStore = create<PitState>()(
	persist(
		subscribeWithSelector(
			immer((set) => ({
				applications: [],
				isLoading: false,
				error: null,

				send: (event: PitEvent) => {
					try {
						set((state) => {
							const nextState = pitReducer(state, event);
							Object.assign(state, nextState);
						});
					} catch (error) {
						set((state) => {
							state.error =
								error instanceof Error ? error.message : "Unknown error";
							state.isLoading = false;
						});
					}
				},
			})),
		),
		{
			name: "job-applications-v2",
			partialize: (state) => ({
				applications: state.applications,
			}),
			version: 1,
		},
	),
);

export const useApplications = () => usePitStore((state) => state.applications);

export const useLastApplication = () =>
	usePitStore((state) => state.applications.at(-1));
export const useMonochromeActive = () =>
	usePitStore((state) => selectMonochrome(state.applications));

export const usePitSend = () => usePitStore((state) => state.send);

export const useIsLoading = () => usePitStore((state) => state.isLoading);
export const useError = () => usePitStore((state) => state.error);
