export const LEVEL_STYLES = [
	"from-green-400 via-green-300 to-green-500", // 0 — Intern
	"from-blue-400 via-blue-300 to-blue-500", // 1 — Middle Manager
	"from-yellow-400 via-yellow-300 to-yellow-500", // 2 — Senior
	"from-orange-400 via-orange-300 to-orange-500", // 3 — Lead
	"from-red-400 via-red-300 to-red-500", // 4 — Principal
	"from-red-500 via-red-400 to-red-600", // 5 — VP of Void
] as const;

export const getLevelGradient = (levelIndex: number, isVoid: boolean) =>
	isVoid ? LEVEL_STYLES[5] : (LEVEL_STYLES[levelIndex] ?? LEVEL_STYLES[0]);
