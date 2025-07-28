import { STATUS } from "@/lib/app.constants";
import type { Application } from "@/lib/app.types";
import { INTERVIEW_STATUSES } from "./constants";
import type { FilterType } from "./types";

export function getStatusSymbol(status: string) {
	switch (status) {
		case STATUS.REJECTED:
			return "💀";
		case STATUS.INTERVIEW1:
		case STATUS.INTERVIEW2:
		case STATUS.INTERVIEW3:
			return "🎯";
		case STATUS.OFFER:
			return "🎉";
		case STATUS.PENDING:
			return "⏳";
		case STATUS.GHOSTED:
			return "👻";
		default:
			return "❓";
	}
}

export function getApplicationStatusColor(status: string) {
	switch (status) {
		case STATUS.REJECTED:
			return "text-red-400";
		case STATUS.GHOSTED:
			return "text-purple-400";
		case STATUS.INTERVIEW1:
		case STATUS.INTERVIEW2:
		case STATUS.INTERVIEW3:
			return "text-green-400";
		case STATUS.OFFER:
			return "text-yellow-400";
		case STATUS.PENDING:
			return "text-blue-400";
		default:
			return "text-gray-400";
	}
}

export const getStatusColor = (status: string): string => {
	const statusColorMap: Record<string, string> = {
		pending: "text-blue-400",
		interview1: "text-yellow-400",
		interview2: "text-yellow-400",
		interview3: "text-yellow-400",
		offer: "text-green-400",
		rejected: "text-red-400",
		ghosted: "text-purple-400",
	};

	return statusColorMap[status] ?? "text-gray-400";
};

export const isInterviewStatus = (status: string): boolean => {
	return INTERVIEW_STATUSES.includes(
		status as (typeof INTERVIEW_STATUSES)[number],
	);
};

export const shouldIncludeApplication = (
	app: Application,
	filter: FilterType,
): boolean => {
	switch (filter) {
		case "rejected":
			return app.status === "rejected";
		case "ghosted":
			return app.status === "ghosted";
		case "interview":
			return isInterviewStatus(app.status);
		case "pending":
			return app.status === "pending";
		case "all":
		default:
			return true;
	}
};

export const matchesSearchQuery = (
	app: Application,
	query: string,
): boolean => {
	if (!query.trim()) return true;

	const lowerQuery = query.toLowerCase();
	return [app.company, app.role, app.status].some((field) =>
		field.toLowerCase().includes(lowerQuery),
	);
};
