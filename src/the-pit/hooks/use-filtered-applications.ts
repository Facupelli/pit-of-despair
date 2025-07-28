import { useMemo } from "react";
import useDebounce from "@/hooks/use-debounce";
import type { Application } from "@/lib/app.types";
import { SEARCH_DEBOUNCE_MS } from "../constants";
import type { FilterType } from "../types";
import { matchesSearchQuery, shouldIncludeApplication } from "../utils";

export function useFilteredApplications(
	applications: Application[],
	filter: FilterType,
	searchQuery: string,
) {
	const debouncedQuery = useDebounce(searchQuery, SEARCH_DEBOUNCE_MS);

	return useMemo(() => {
		return applications
			.filter((app) => shouldIncludeApplication(app, filter))
			.filter((app) => matchesSearchQuery(app, debouncedQuery))
			.reverse();
	}, [applications, filter, debouncedQuery]);
}
