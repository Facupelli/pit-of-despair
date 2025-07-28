import { calcAnguish, LEVELS } from "@/data/levels";
import { STATUS } from "@/lib/app.constants";
import type { Application, Status } from "@/lib/app.types";

export function selectAnguish(applications: Application[]): number {
	return applications.reduce((sum, app) => sum + calcAnguish(app), 0);
}
export function selectLevel(applications: Application[]) {
	const anguish = selectAnguish(applications);
	return LEVELS.find((level) => anguish < level.limit) ?? LEVELS[0];
}

export function selectMonochrome(applications: Application[]): boolean {
	const recentStatuses = applications.slice(-5).map((app) => app.status);

	return (
		recentStatuses.length === 5 &&
		recentStatuses.every((status) => status === "rejected")
	);
}

export function selectHitRatePoints(applications: Application[]): number[] {
	const interviewStatuses: Status[] = [
		STATUS.INTERVIEW1,
		STATUS.INTERVIEW2,
		STATUS.INTERVIEW3,
		STATUS.OFFER,
	];

	let interviewedCount = 0;

	return applications.map((app, index) => {
		const hasInterviewed =
			interviewStatuses.includes(app.status) ||
			app.history.some((h) => interviewStatuses.includes(h.status));

		if (hasInterviewed) {
			interviewedCount++;
		}

		return (interviewedCount / (index + 1)) * 100;
	});
}

export function selectStats(applications: Application[]) {
	const byStatus = applications.reduce(
		(acc, app) => {
			acc[app.status] = (acc[app.status] || 0) + 1;
			return acc;
		},
		{} as Record<Status, number>,
	);

	const interviewStatuses: Status[] = [
		STATUS.INTERVIEW1,
		STATUS.INTERVIEW2,
		STATUS.INTERVIEW3,
		STATUS.OFFER,
	];

	const successfulApps = applications.filter(
		(app) =>
			interviewStatuses.includes(app.status) ||
			app.history.some((h) => interviewStatuses.includes(h.status)),
	);

	return {
		total: applications.length,
		byStatus,
		successRate:
			applications.length > 0
				? (successfulApps.length / applications.length) * 100
				: 0,
	};
}
