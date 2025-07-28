import type { Application, Status } from "@/lib/app.types";

export const generateId = (): string => crypto.randomUUID();

export const getCurrentTimestamp = (): string => new Date().toISOString();

export function createNewApplication(
	payload: Omit<Application, "id" | "createdAt" | "updatedAt" | "history">,
): Application {
	const now = getCurrentTimestamp();
	return {
		...payload,
		id: generateId(),
		createdAt: now,
		updatedAt: now,
		history: [{ status: payload.status, date: now }],
	};
}

export function updateApplicationStatus(
	app: Application,
	newStatus: Status,
): Application {
	const now = getCurrentTimestamp();
	return {
		...app,
		status: newStatus,
		updatedAt: now,
		history: [...app.history, { status: newStatus, date: now }],
	};
}
