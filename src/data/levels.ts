import { LEVELS_NAMES } from "@/lib/app.constants";
import type { Application, Level } from "@/lib/app.types";

export const LEVELS: Level[] = [
	{ limit: 1, name: LEVELS_NAMES[1], number: 1 },
	{ limit: 25, name: LEVELS_NAMES[2], number: 2 },
	{ limit: 50, name: LEVELS_NAMES[3], number: 3 },
	{ limit: 75, name: LEVELS_NAMES[4], number: 4 },
	{ limit: 100, name: LEVELS_NAMES[5], number: 5 },
	{ limit: Infinity, name: LEVELS_NAMES[6], number: 6 },
] as const;

export function calcAnguish(app: Application): number {
	const ghosted = app.status === "ghosted" ? 2 : 0;
	const rejected = app.status === "rejected" ? 1 : 0;

	const interviewRounds = app.history.filter((h) =>
		h.status.startsWith("Interview"),
	).length;

	return ghosted + rejected + interviewRounds * 0.5;
}
