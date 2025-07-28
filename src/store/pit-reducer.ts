import type { PitEvent, PitState } from "./types";
import {
	createNewApplication,
	getCurrentTimestamp,
	updateApplicationStatus,
} from "./utils";

export function pitReducer(state: PitState, event: PitEvent): PitState {
	switch (event.type) {
		case "ApplicationAdded":
			return {
				...state,
				applications: [
					...state.applications,
					createNewApplication(event.payload),
				],
				error: null,
			};

		case "StatusChanged": {
			const applications = state.applications.map((app) =>
				app.id === event.id
					? updateApplicationStatus(app, event.newStatus)
					: app,
			);

			return { ...state, applications, error: null };
		}

		case "ApplicationUpdated": {
			const applications = state.applications.map((app) =>
				app.id === event.id
					? { ...app, ...event.updates, updatedAt: getCurrentTimestamp() }
					: app,
			);

			return { ...state, applications, error: null };
		}

		case "ApplicationDeleted": {
			const applications = state.applications.filter(
				(app) => app.id !== event.id,
			);
			return { ...state, applications, error: null };
		}

		case "Ghosted":
			return pitReducer(state, {
				type: "StatusChanged",
				id: event.id,
				newStatus: "ghosted",
			});

		case "BulkStatusChange": {
			const applications = state.applications.map((app) =>
				event.ids.includes(app.id)
					? updateApplicationStatus(app, event.newStatus)
					: app,
			);

			return { ...state, applications, error: null };
		}

		case "ApplicationsCleared":
			return { ...state, applications: [], error: null };

		default:
			return state;
	}
}
