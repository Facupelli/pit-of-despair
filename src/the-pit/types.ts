export type FilterType =
	| "all"
	| "pending"
	| "rejected"
	| "ghosted"
	| "interview";

export interface FilterOption {
	key: string;
	label: string;
	value: FilterType;
}
