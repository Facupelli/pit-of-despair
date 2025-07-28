import type { ExperienceLevel, Theme } from "./types";

export const THEMES: Record<ExperienceLevel, Theme> = {
	// Level 1: Intern of Sorrow - Green Matrix vibes
	1: {
		name: "green",
		title: "Intern of Sorrow",

		// Core - Dark background with green accent
		background: "oklch(0.03 0.02 150)",
		foreground: "oklch(0.71 0.17 150)",

		card: "oklch(0.06 0.03 150)",
		cardForeground: "oklch(0.69 0.15 150)",

		popover: "oklch(0.04 0.02 150)",
		popoverForeground: "oklch(0.71 0.17 150)",

		primary: "oklch(0.8 0.28 150)", // Electric green
		primaryForeground: "oklch(0.03 0.02 150)",

		secondary: "oklch(0.7 0.22 165)", // Slightly different green
		secondaryForeground: "oklch(0.03 0.02 150)",

		muted: "oklch(0.12 0.04 150)",
		mutedForeground: "oklch(0.6 0.1 150)",

		accent: "oklch(0.75 0.32 320)", // Keep magenta for contrast
		accentForeground: "oklch(0.95 0.02 0)",

		destructive: "oklch(0.7 0.28 25)",
		destructiveForeground: "oklch(0.95 0.02 0)",

		border: "oklch(0.3 0.1 150)",
		input: "oklch(0.2 0.08 150)",
		ring: "oklch(0.8 0.28 150)",

		// Scrollbar
		scrollbarBg: "oklch(0.02 0.02 150)",
		scrollbarBorder: "oklch(0.8 0.28 150)",
		scrollbarTrack: "oklch(0.06 0.03 150)",
		scrollbarThumb: "oklch(0.8 0.28 150)",
		scrollbarThumbHover: "oklch(0.85 0.3 150)",
		scrollbarThumbActive: "oklch(0.9 0.32 150)",

		levelGradient: "from-green-400 via-green-300 to-green-500",
		glowColor: "oklch(0.8 0.28 150)",
	},

	// Level 2: Middle Manager of Misery - Cool Blue
	2: {
		name: "blue",
		title: "Middle Manager of Misery",

		background: "oklch(0.03 0.02 220)",
		foreground: "oklch(0.71 0.17 220)",

		card: "oklch(0.06 0.03 220)",
		cardForeground: "oklch(0.69 0.15 220)",

		popover: "oklch(0.04 0.02 220)",
		popoverForeground: "oklch(0.71 0.17 220)",

		primary: "oklch(0.8 0.28 220)", // Electric blue
		primaryForeground: "oklch(0.03 0.02 220)",

		secondary: "oklch(0.7 0.22 235)",
		secondaryForeground: "oklch(0.03 0.02 220)",

		muted: "oklch(0.12 0.04 220)",
		mutedForeground: "oklch(0.6 0.1 220)",

		accent: "oklch(0.75 0.32 320)",
		accentForeground: "oklch(0.95 0.02 0)",

		destructive: "oklch(0.7 0.28 25)",
		destructiveForeground: "oklch(0.95 0.02 0)",

		border: "oklch(0.3 0.1 220)",
		input: "oklch(0.2 0.08 220)",
		ring: "oklch(0.8 0.28 220)",

		scrollbarBg: "oklch(0.02 0.02 220)",
		scrollbarBorder: "oklch(0.8 0.28 220)",
		scrollbarTrack: "oklch(0.06 0.03 220)",
		scrollbarThumb: "oklch(0.8 0.28 220)",
		scrollbarThumbHover: "oklch(0.85 0.3 220)",
		scrollbarThumbActive: "oklch(0.9 0.32 220)",

		levelGradient: "from-blue-400 via-blue-300 to-blue-500",
		glowColor: "oklch(0.8 0.28 220)",
	},

	// Level 3: Senior Suffering Engineer - Warning Yellow
	3: {
		name: "yellow",
		title: "Senior Suffering Engineer",

		background: "oklch(0.03 0.02 80)",
		foreground: "oklch(0.71 0.17 80)",

		card: "oklch(0.06 0.03 80)",
		cardForeground: "oklch(0.69 0.15 80)",

		popover: "oklch(0.04 0.02 80)",
		popoverForeground: "oklch(0.71 0.17 80)",

		primary: "oklch(0.8 0.28 80)", // Electric yellow
		primaryForeground: "oklch(0.03 0.02 80)",

		secondary: "oklch(0.7 0.22 95)",
		secondaryForeground: "oklch(0.03 0.02 80)",

		muted: "oklch(0.12 0.04 80)",
		mutedForeground: "oklch(0.6 0.1 80)",

		accent: "oklch(0.75 0.32 320)",
		accentForeground: "oklch(0.95 0.02 0)",

		destructive: "oklch(0.7 0.28 25)",
		destructiveForeground: "oklch(0.95 0.02 0)",

		border: "oklch(0.3 0.1 80)",
		input: "oklch(0.2 0.08 80)",
		ring: "oklch(0.8 0.28 80)",

		scrollbarBg: "oklch(0.02 0.02 80)",
		scrollbarBorder: "oklch(0.8 0.28 80)",
		scrollbarTrack: "oklch(0.06 0.03 80)",
		scrollbarThumb: "oklch(0.8 0.28 80)",
		scrollbarThumbHover: "oklch(0.85 0.3 80)",
		scrollbarThumbActive: "oklch(0.9 0.32 80)",

		levelGradient: "from-yellow-400 via-yellow-300 to-yellow-500",
		glowColor: "oklch(0.8 0.28 80)",
	},

	// Level 4: Lead Loser - Intense Orange
	4: {
		name: "orange",
		title: "Lead Loser",

		background: "oklch(0.03 0.02 45)",
		foreground: "oklch(0.71 0.17 45)",

		card: "oklch(0.06 0.03 45)",
		cardForeground: "oklch(0.69 0.15 45)",

		popover: "oklch(0.04 0.02 45)",
		popoverForeground: "oklch(0.71 0.17 45)",

		primary: "oklch(0.8 0.28 45)", // Electric orange
		primaryForeground: "oklch(0.03 0.02 45)",

		secondary: "oklch(0.7 0.22 60)",
		secondaryForeground: "oklch(0.03 0.02 45)",

		muted: "oklch(0.12 0.04 45)",
		mutedForeground: "oklch(0.6 0.1 45)",

		accent: "oklch(0.75 0.32 320)",
		accentForeground: "oklch(0.95 0.02 0)",

		destructive: "oklch(0.7 0.28 25)",
		destructiveForeground: "oklch(0.95 0.02 0)",

		border: "oklch(0.3 0.1 45)",
		input: "oklch(0.2 0.08 45)",
		ring: "oklch(0.8 0.28 45)",

		scrollbarBg: "oklch(0.02 0.02 45)",
		scrollbarBorder: "oklch(0.8 0.28 45)",
		scrollbarTrack: "oklch(0.06 0.03 45)",
		scrollbarThumb: "oklch(0.8 0.28 45)",
		scrollbarThumbHover: "oklch(0.85 0.3 45)",
		scrollbarThumbActive: "oklch(0.9 0.32 45)",

		levelGradient: "from-orange-400 via-orange-300 to-orange-500",
		glowColor: "oklch(0.8 0.28 45)",
	},

	// Level 5: Principal Pain-haver - Classic Cyan (your current theme)
	5: {
		name: "cyan",
		title: "Principal Pain-haver",

		background: "oklch(0.03 0.02 195)",
		foreground: "oklch(0.71 0.17 195)",

		card: "oklch(0.06 0.03 195)",
		cardForeground: "oklch(0.69 0.15 195)",

		popover: "oklch(0.04 0.02 195)",
		popoverForeground: "oklch(0.71 0.17 195)",

		primary: "oklch(0.8 0.28 195)", // Electric terminal cyan
		primaryForeground: "oklch(0.03 0.02 195)",

		secondary: "oklch(0.7 0.22 210)",
		secondaryForeground: "oklch(0.03 0.02 195)",

		muted: "oklch(0.12 0.04 195)",
		mutedForeground: "oklch(0.6 0.1 195)",

		accent: "oklch(0.75 0.32 320)",
		accentForeground: "oklch(0.95 0.02 0)",

		destructive: "oklch(0.7 0.28 25)",
		destructiveForeground: "oklch(0.95 0.02 0)",

		border: "oklch(0.3 0.1 195)",
		input: "oklch(0.2 0.08 195)",
		ring: "oklch(0.8 0.28 195)",

		scrollbarBg: "oklch(0.02 0.02 195)",
		scrollbarBorder: "oklch(0.8 0.28 195)",
		scrollbarTrack: "oklch(0.06 0.03 195)",
		scrollbarThumb: "oklch(0.8 0.28 195)",
		scrollbarThumbHover: "oklch(0.85 0.3 195)",
		scrollbarThumbActive: "oklch(0.9 0.32 195)",

		levelGradient: "from-cyan-400 via-cyan-300 to-cyan-500",
		glowColor: "oklch(0.8 0.28 195)",
	},

	// Level 6: VP of Void - Ominous Red
	6: {
		name: "red",
		title: "VP of Void",

		background: "oklch(0.03 0.02 25)",
		foreground: "oklch(0.71 0.17 25)",

		card: "oklch(0.06 0.03 25)",
		cardForeground: "oklch(0.69 0.15 25)",

		popover: "oklch(0.04 0.02 25)",
		popoverForeground: "oklch(0.71 0.17 25)",

		primary: "oklch(0.8 0.28 25)", // Menacing red
		primaryForeground: "oklch(0.95 0.02 0)",

		secondary: "oklch(0.7 0.22 15)", // Darker red
		secondaryForeground: "oklch(0.95 0.02 0)",

		muted: "oklch(0.12 0.04 25)",
		mutedForeground: "oklch(0.6 0.1 25)",

		accent: "oklch(0.75 0.32 320)", // Keep magenta accent
		accentForeground: "oklch(0.95 0.02 0)",

		destructive: "oklch(0.7 0.28 25)", // Same as primary for void theme
		destructiveForeground: "oklch(0.95 0.02 0)",

		border: "oklch(0.3 0.1 25)",
		input: "oklch(0.2 0.08 25)",
		ring: "oklch(0.8 0.28 25)",

		scrollbarBg: "oklch(0.02 0.02 25)",
		scrollbarBorder: "oklch(0.8 0.28 25)",
		scrollbarTrack: "oklch(0.06 0.03 25)",
		scrollbarThumb: "oklch(0.8 0.28 25)",
		scrollbarThumbHover: "oklch(0.85 0.3 25)",
		scrollbarThumbActive: "oklch(0.9 0.32 25)",

		levelGradient: "from-red-500 via-red-400 to-red-600",
		glowColor: "oklch(0.8 0.28 25)",
	},
};

export const MONO_THEME: Theme = {
	name: "mono",
	title: "Monochromatic",

	background: "oklch(0.08 0 0)",
	foreground: "oklch(0.9 0 0)",

	card: "oklch(0.06 0.03 25)",
	cardForeground: "oklch(0.69 0.15 25)",

	popover: "oklch(0.04 0.02 25)",
	popoverForeground: "oklch(0.71 0.17 25)",

	primary: "oklch(0.5 0 0)",
	primaryForeground: "oklch(0.95 0 0)",

	secondary: "oklch(0.4 0 0)",
	secondaryForeground: "oklch(0.95 0.02 0)",

	muted: "oklch(0.12 0.04 25)",
	mutedForeground: "oklch(0.6 0.1 25)",

	accent: "oklch(0.75 0.32 320)", // Keep magenta accent
	accentForeground: "oklch(0.95 0.02 0)",

	destructive: "oklch(0.3 0 0)",
	destructiveForeground: "oklch(0.95 0.02 0)",

	border: "oklch(0.3 0.1 25)",
	input: "oklch(0.2 0.08 25)",
	ring: "oklch(0.8 0.28 25)",

	scrollbarBg: "oklch(0.02 0.02 25)",
	scrollbarBorder: "oklch(0.8 0.28 25)",
	scrollbarTrack: "oklch(0.06 0.03 25)",
	scrollbarThumb: "oklch(0.8 0.28 25)",
	scrollbarThumbHover: "oklch(0.85 0.3 25)",
	scrollbarThumbActive: "oklch(0.9 0.32 25)",

	levelGradient: "from-red-500 via-red-400 to-red-600",
	glowColor: "oklch(0.8 0.28 25)",
};
