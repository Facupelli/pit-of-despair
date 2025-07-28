export interface Theme {
	name: string;
	title: string;

	background: string;
	foreground: string;

	card: string;
	cardForeground: string;

	popover: string;
	popoverForeground: string;

	primary: string;
	primaryForeground: string;

	secondary: string;
	secondaryForeground: string;

	muted: string;
	mutedForeground: string;

	accent: string;
	accentForeground: string;

	destructive: string;
	destructiveForeground: string;

	border: string;
	input: string;
	ring: string;

	scrollbarBg: string;
	scrollbarBorder: string;
	scrollbarTrack: string;
	scrollbarThumb: string;
	scrollbarThumbHover: string;
	scrollbarThumbActive: string;

	levelGradient: string;
	glowColor: string;
}

export type ExperienceLevel = 1 | 2 | 3 | 4 | 5 | 6;
