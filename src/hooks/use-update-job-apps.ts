import { useEffect } from "react";
import { STATUS } from "@/lib/app.constants";
import dayjs from "@/lib/dayjs";
import { useApplications, usePitSend } from "@/store/pit-store";

const GHOST_AFTER_DAYS = 7;

export function useGhosting() {
	const applications = useApplications();
	const send = usePitSend();

	// biome-ignore lint: i only want to run this on startup
	useEffect(() => {
		const now = dayjs();
		applications.forEach((app) => {
			if (
				app.status === STATUS.PENDING &&
				dayjs(app.updatedAt).add(GHOST_AFTER_DAYS, "day").isBefore(now)
			) {
				send({
					type: "StatusChanged",
					id: app.id,
					newStatus: STATUS.GHOSTED,
				});
			}
		});
	}, []);
}
