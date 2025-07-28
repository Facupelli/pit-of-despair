import { useEffect } from "react";
import { getLevelGradient } from "../level-styles";

export function useLevelTheme(levelIndex: number, isVoid: boolean) {
	const gradient = getLevelGradient(levelIndex, isVoid);

	useEffect(() => {
		const el = document.documentElement;
		el.setAttribute("data-level-gradient", gradient);
	}, [gradient]);
}
