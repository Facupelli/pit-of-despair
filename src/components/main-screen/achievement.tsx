import { useMemo } from "react";
import { ACHIEVEMENTS } from "@/data/achievements";
import { useApplications } from "@/store/pit-store";

export function Achievement() {
	const apps = useApplications();

	const hit = useMemo(
		() => ACHIEVEMENTS.find((ach) => ach.condition(apps)),
		[apps],
	);

	if (!hit) return null;

	return (
		<aside className="text-center text-accent font-medium ">
			🏆 {hit.description}
		</aside>
	);
}
