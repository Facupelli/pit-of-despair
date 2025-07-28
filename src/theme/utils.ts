import { THEMES } from "./config";
import type { ExperienceLevel, Theme } from "./types";

export function getLevelColor(levelIndex: number, isVoid: boolean): string {
	if (isVoid) {
		return THEMES[6].levelGradient;
	}

	const level = (levelIndex + 1) as ExperienceLevel;
	return THEMES[level]?.levelGradient || THEMES[1].levelGradient;
}

export function getThemeByLevel(level: ExperienceLevel): Theme {
	return THEMES[level];
}
