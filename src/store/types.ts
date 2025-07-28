import type { Application, Status } from "@/lib/app.types";

export type PitEvent =
	| {
			type: "ApplicationAdded";
			payload: Omit<Application, "id" | "createdAt" | "updatedAt" | "history">;
	  }
	| { type: "StatusChanged"; id: string; newStatus: Status }
	| { type: "ApplicationUpdated"; id: string; updates: Partial<Application> }
	| { type: "ApplicationDeleted"; id: string }
	| { type: "Ghosted"; id: string }
	| { type: "BulkStatusChange"; ids: string[]; newStatus: Status }
	| { type: "ApplicationsCleared" };

export interface PitState {
	applications: Application[];

	isLoading: boolean;
	error: string | null;

	send: (event: PitEvent) => void;
}
