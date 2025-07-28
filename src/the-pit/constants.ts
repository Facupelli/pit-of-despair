import { STATUS } from "@/lib/app.constants";
import type { FilterOption } from "./types";

export const FILTER_OPTIONS: FilterOption[] = [
	{ key: "a", label: "ALL", value: "all" },
	{ key: "p", label: "PENDING", value: "pending" },
	{ key: "i", label: "INTERVIEW", value: "interview" },
	{ key: "r", label: "REJECTED", value: "rejected" },
	{ key: "g", label: "GHOSTED", value: "ghosted" },
] as const;

export const SEARCH_DEBOUNCE_MS = 500;
export const INTERVIEW_STATUSES = [
	STATUS.INTERVIEW1,
	STATUS.INTERVIEW2,
	STATUS.INTERVIEW3,
] as const;

export const ITEMS_PER_PAGE = 10;
