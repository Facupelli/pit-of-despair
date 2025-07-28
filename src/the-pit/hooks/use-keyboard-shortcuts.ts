import { useEffect } from "react";
import type { FilterType } from "../types";

export function useKeyboardShortcuts(
	onFilterChange: (filter: FilterType) => void,
	onSearchFocus: () => void,
) {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const target = e.target as HTMLElement;
			const isTypingInInput = target.tagName === "INPUT";

			if (e.key === "/" && !isTypingInInput) {
				e.preventDefault();
				onSearchFocus();
				return;
			}

			if (!isTypingInInput) {
				const filterMap: Record<string, FilterType> = {
					r: "rejected",
					g: "ghosted",
					i: "interview",
					p: "pending",
					a: "all",
				};

				const filter = filterMap[e.key.toLowerCase()];
				if (filter) {
					onFilterChange(filter);
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [onFilterChange, onSearchFocus]);
}
