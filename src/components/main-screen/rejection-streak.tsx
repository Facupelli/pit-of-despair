import { STATUS } from "@/lib/app.constants";
import { getStreak } from "@/lib/utils";
import { useApplications } from "@/store/pit-store";
import { ProgramBox } from "../program-box";

export function RejectionStreak() {
	const applications = useApplications();

	const streak = getStreak(applications, [STATUS.REJECTED, STATUS.GHOSTED]);

	const totalRejections = applications.filter(
		(app) => app.status === STATUS.REJECTED || app.status === STATUS.GHOSTED,
	).length;

	return (
		<ProgramBox title="REJECTION_STREAK.exe">
			<div className="flex gap-2 justify-between text-foreground">
				<div>{streak} ❌</div>
				<div>Total: {totalRejections}</div>
			</div>
		</ProgramBox>
	);
}
