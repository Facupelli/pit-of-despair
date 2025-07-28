import { LEVEL_SEEDS } from "./data/level-seeds";
import { usePitStore } from "./store/pit-store";

export function bootstrapMock() {
	const url = new URL(window.location.href);
	const level = url.searchParams.get("level");

	if (!level || !LEVEL_SEEDS[level]) {
		return;
	}

	usePitStore.setState(() => ({ applications: [] }));
	localStorage.removeItem("job-applications-v2");
	usePitStore.getState().send(LEVEL_SEEDS[level]());
}
