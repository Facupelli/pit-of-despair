import { LEVELS } from "@/data/levels";

export function getCurrentLevelInfo(currentLevel: (typeof LEVELS)[0]) {
	const levelIndex = LEVELS.findIndex((l) => l.limit === currentLevel.limit);
	const previousLimit = levelIndex > 0 ? LEVELS[levelIndex - 1].limit : 0;

	return {
		current: currentLevel,
		index: levelIndex,
		previousLimit,
	};
}

export function getProgressInLevel(
	anguishIndex: number,
	previousLimit: number,
	currentLimit: number,
) {
	if (currentLimit === Number.POSITIVE_INFINITY) {
		return 100;
	} // VP of Void is always full

	const progress =
		((anguishIndex - previousLimit) / (currentLimit - previousLimit)) * 100;
	return Math.min(Math.max(progress, 0), 100);
}

export function getLevelColor(levelIndex: number, isVoid: boolean) {
	if (isVoid) return "from-red-500 via-red-400 to-red-600"; // vp of void

	const colors = [
		"from-green-400 via-green-300 to-green-500", // intern of sorrow
		"from-blue-400 via-blue-300 to-blue-500", // middle manager of misery
		"from-yellow-400 via-yellow-300 to-yellow-500", // senior suffering engineer
		"from-orange-400 via-orange-300 to-orange-500", // lead loser
		"from-red-400 via-red-300 to-red-500", // Principal pain0haver
	];

	return colors[levelIndex] || colors[0];
}
