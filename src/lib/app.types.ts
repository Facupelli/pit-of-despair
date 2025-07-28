import type { STATUS } from "@/lib/app.constants";
import type { ExperienceLevel } from "@/theme/types";

export type Status = (typeof STATUS)[keyof typeof STATUS];

export interface HistoryEntry {
	status: Status;
	date: string; // ISO
}

export interface Application {
	id: string;
	company: string;
	role: string;
	status: Status;
	email?: string;
	history: HistoryEntry[];
	createdAt: string;
	updatedAt: string;
	notes: string;
}

export interface Level {
	limit: number;
	name: string;
	number: ExperienceLevel;
}
