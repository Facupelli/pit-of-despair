import { STATUS } from "@/lib/app.constants";
import type { Application } from "@/lib/app.types";
import dayjs from "@/lib/dayjs";

export interface Achievement {
	id: string;
	title: string;
	description: string;
	condition: (apps: Application[]) => boolean;
	confetti?: true;
}

export const ACHIEVEMENTS: ReadonlyArray<Achievement> = [
	// ── ultra-rare combos ──────────────────────────────
	{
		id: "five-consecutive-rejections",
		title: "🏆 XP Farming",
		description: "+5 consecutive rejections? That’s just XP farming",
		condition: (apps) => {
			const recent = apps.slice(-5).map((a) => a.status);
			return recent.length === 5 && recent.every((s) => s === STATUS.REJECTED);
		},
	},

	{
		id: "application-archivist",
		title: "🏆 Application Archivist",
		description: "100+ apps. You’re curating a museum of despair.",
		condition: (apps) => apps.length >= 100,
	},

	{
		id: "application-avalanche",
		title: "🏆 Application Avalanche",
		description: "40+ apps in 30 days. You’re burying HR in résumés.",
		condition: (apps) =>
			apps.filter((a) =>
				dayjs(a.updatedAt).isAfter(dayjs().subtract(30, "day")),
			).length >= 40,
	},

	{
		id: "ghosted-god",
		title: "🏆 Ghosted God",
		description: "20+ ghosted apps. You’re the deity of digital silence.",
		condition: (apps) =>
			apps.filter((a) => a.status === STATUS.GHOSTED).length >= 20,
	},

	{
		id: "rejection-relic",
		title: "🏆 Rejection Relic",
		description: "30+ rejections. You’re a fossil in the Pit of Despair.",
		condition: (apps) =>
			apps.filter((a) => a.status === STATUS.REJECTED).length >= 30,
	},

	{
		id: "eternal-effort",
		title: "🏆 Eternal Effort",
		description:
			"Applied to the same company 3+ times. Glutton for punishment.",
		condition: (apps) => {
			const counts: Record<string, number> = {};
			apps.forEach((a) => {
				counts[a.company] = (counts[a.company] || 0) + 1;
			});
			return Object.values(counts).some((c) => c >= 3);
		},
	},

	// ── high-volume milestones ─────────────────────────
	{
		id: "application-apocalypse",
		title: "🏆 Application Apocalypse",
		description: "50+ apps. You’re curating a museum of despair.",
		condition: (apps) => apps.length >= 50,
	},

	{
		id: "digital-drifter",
		title: "🏆 Digital Drifter",
		description: "20+ apps submitted. Nomad in the Pit of Despair.",
		condition: (apps) => apps.length >= 20,
	},

	{
		id: "ghosted-guru",
		title: "🏆 Ghosted Guru",
		description: "5+ ghosted apps. Mastered the art of being ignored.",
		condition: (apps) =>
			apps.filter((a) => a.status === STATUS.GHOSTED).length >= 5,
	},

	{
		id: "spam-folder-star",
		title: "🏆 Spam Folder Star",
		description: "10+ rejections. Your résumé’s VIP in the trash bin.",
		condition: (apps) =>
			apps.filter((a) => a.status === STATUS.REJECTED).length >= 10,
	},

	// ── mid-volume / situational ───────────────────────
	{
		id: "pending-purgatory",
		title: "🏆 Pending Purgatory",
		description: "10+ pending apps. Stuck in HR limbo.",
		condition: (apps) =>
			apps.filter((a) => a.status === STATUS.PENDING).length >= 10,
	},

	{
		id: "ghosted-forever",
		title: "🏆 Ghosted Forever",
		description: "30+ days of silence. Digital poltergeist status.",
		condition: (apps) =>
			apps.some(
				(a) =>
					a.status === STATUS.GHOSTED &&
					dayjs().diff(dayjs(a.updatedAt), "day") >= 30,
			),
	},

	// ── single-event milestones ────────────────────────
	{
		id: "endurance-champ",
		title: "🏆 Endurance Champ",
		description: "Third-round interview. Rocky Balboa of job hunts.",
		condition: (apps) =>
			apps.some((a) => a.history?.some((h) => h.status === STATUS.INTERVIEW3)),
	},

	{
		id: "double-trouble",
		title: "🏆 Double Trouble",
		description: "Round 2 reached. Charming or they’re desperate?",
		condition: (apps) =>
			apps.some((a) => a.history?.some((h) => h.status === STATUS.INTERVIEW2)),
	},

	{
		id: "plot-twist",
		title: "🏆 Plot Twist",
		description: "First interview ever. The ATS didn’t eat your résumé!",
		condition: (apps) =>
			apps.some((a) => a.history?.some((h) => h.status === STATUS.INTERVIEW1)),
	},

	{
		id: "plot-armor",
		title: "🏆 Plot Armor",
		description: "Got an offer! Error 404: Rejection not found.",
		condition: (apps) => apps.some((a) => a.status === STATUS.OFFER),
		confetti: true,
	},

	// ── quirky time-based ──────────────────────────────
	{
		id: "midnight-madness",
		title: "🏆 Midnight Madness",
		description: "Applied 3 AM. Desperation is neon-bright.",
		condition: (apps) =>
			apps.some((a) => {
				const h = dayjs(a.updatedAt).tz(dayjs.tz.guess()).hour();
				return h >= 0 && h < 6;
			}),
	},

	{
		id: "weekend-warrior",
		title: "🏆 Weekend Warrior",
		description: "Applied on a Sunday. Hustle knows no rest.",
		condition: (apps) => apps.some((a) => dayjs(a.updatedAt).day() === 0),
	},
];
