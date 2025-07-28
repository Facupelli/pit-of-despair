import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "@/lib/dayjs";
import type { Application, Status } from "./app.types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatTimeAgo(dateString: string): string {
	return dayjs(dateString).fromNow();
}

export function getStreak(applications: Application[], statuses: Status[]) {
	let streak = 0;

	for (const app of [...applications].reverse()) {
		if (statuses.includes(app.status)) {
			streak++;
		} else {
			break;
		}
	}

	return streak;
}
