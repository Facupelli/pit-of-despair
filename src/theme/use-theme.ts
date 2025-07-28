import { createContext, useContext } from "react";
import type { Theme } from "./types";

interface ThemeContextType {
	setTheme: (theme: Theme) => void;
	theme: Theme;
	applyTheme: (theme: Theme) => void;
	isVoid: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
