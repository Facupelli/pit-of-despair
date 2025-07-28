import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useApplications, useMonochromeActive } from "@/store/pit-store";
import { selectLevel } from "@/store/selectors";
import { MONO_THEME, THEMES } from "./config";
import type { ExperienceLevel, Theme } from "./types";
import { ThemeContext } from "./use-theme";

interface ThemeProviderProps {
	children: React.ReactNode;
	initialLevel?: ExperienceLevel;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const mono = useMonochromeActive();
	const hasGlitchRef = useRef(false);
	const applications = useApplications();
	const currentLevel = useMemo(() => selectLevel(applications), [applications]);

	const [theme, setTheme] = useState<Theme>(THEMES[currentLevel.number]);

	const applyTheme = (newTheme: Theme) => {
		const root = document.documentElement;

		// Apply all CSS custom properties to match your existing structure
		root.style.setProperty("--background", newTheme.background);
		root.style.setProperty("--foreground", newTheme.foreground);

		root.style.setProperty("--card", newTheme.card);
		root.style.setProperty("--card-foreground", newTheme.cardForeground);

		root.style.setProperty("--popover", newTheme.popover);
		root.style.setProperty("--popover-foreground", newTheme.popoverForeground);

		root.style.setProperty("--primary", newTheme.primary);
		root.style.setProperty("--primary-foreground", newTheme.primaryForeground);

		root.style.setProperty("--secondary", newTheme.secondary);
		root.style.setProperty(
			"--secondary-foreground",
			newTheme.secondaryForeground,
		);

		root.style.setProperty("--muted", newTheme.muted);
		root.style.setProperty("--muted-foreground", newTheme.mutedForeground);

		root.style.setProperty("--accent", newTheme.accent);
		root.style.setProperty("--accent-foreground", newTheme.accentForeground);

		root.style.setProperty("--destructive", newTheme.destructive);
		root.style.setProperty(
			"--destructive-foreground",
			newTheme.destructiveForeground,
		);

		root.style.setProperty("--border", newTheme.border);
		root.style.setProperty("--input", newTheme.input);
		root.style.setProperty("--ring", newTheme.ring);

		// Scrollbar theming
		root.style.setProperty("--scrollbar-bg", newTheme.scrollbarBg);
		root.style.setProperty("--scrollbar-border", newTheme.scrollbarBorder);
		root.style.setProperty("--scrollbar-track", newTheme.scrollbarTrack);
		root.style.setProperty("--scrollbar-thumb", newTheme.scrollbarThumb);
		root.style.setProperty(
			"--scrollbar-thumb-hover",
			newTheme.scrollbarThumbHover,
		);
		root.style.setProperty(
			"--scrollbar-thumb-active",
			newTheme.scrollbarThumbActive,
		);

		// Level-specific custom properties for additional theming
		root.style.setProperty("--level-gradient", newTheme.levelGradient);
		root.style.setProperty("--glow-color", newTheme.glowColor);

		// Add level-specific class for additional styling hooks
		root.className = root.className.replace(/level-\d+|level-void/g, "");
		root.classList.add(`level-${currentLevel.number}`);
		if (currentLevel.number === 6) {
			root.classList.add("level-void");
		}

		// Add color name class for easy targeting
		root.classList.remove(
			"theme-green",
			"theme-blue",
			"theme-yellow",
			"theme-orange",
			"theme-cyan",
			"theme-red",
		);
		root.classList.add(`theme-${newTheme.name}`);
	};

	// biome-ignore lint:reason
	useEffect(() => {
		applyTheme(theme);
	}, [theme, currentLevel.number]);

	useEffect(() => {
		if (mono) {
			return;
		}

		setTheme(THEMES[currentLevel.number]);
	}, [currentLevel.number, mono]);

	// biome-ignore lint:reason
	useEffect(() => {
		if (mono && theme.name !== MONO_THEME.name) {
			setTheme(MONO_THEME);
		}

		if (mono && !hasGlitchRef.current) {
			document.documentElement.classList.add("glitch-once");
			hasGlitchRef.current = true;

			const t = setTimeout(() => {
				document.documentElement.classList.remove("glitch-once");
				hasGlitchRef.current = false;
			}, 1000);

			return () => clearTimeout(t);
		}
	}, [mono]);

	const isVoid = currentLevel.number === 6;

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				applyTheme,
				isVoid,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
