import { STATUS } from "@/lib/app.constants";
import type { Application } from "@/lib/app.types";
import { JobApplicationSchema } from "@/lib/schemas/job-applications.schema";
import { useLastApplication, usePitSend } from "@/store/pit-store";
import { Button } from "./ui/button";
import { DialogClose, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

type Props = {
	initialData?: Partial<Application>;
	afterSubmit?: () => void;
};

export function JobApplicationForm({ initialData, afterSubmit }: Props) {
	const lastApplication = useLastApplication();
	const send = usePitSend();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const parsed = JobApplicationSchema.parse(Object.fromEntries(formData));

		if (initialData?.id) {
			send({
				type: "StatusChanged",
				id: initialData.id,
				newStatus: parsed.status,
			});
		} else {
			send({
				type: "ApplicationAdded",
				payload: parsed,
			});
		}
		if (afterSubmit != null) {
			afterSubmit();
		}
	};

	return (
		<form className="flex flex-col gap-2" onSubmit={handleSubmit}>
			<div>
				<Label htmlFor="company" className="pb-1">
					Company Name *
				</Label>
				<Input
					type="text"
					placeholder="TechCorp"
					name="company"
					id="company"
					defaultValue={initialData?.company || ""}
					required
				/>
			</div>

			<div>
				<Label htmlFor="role" className="pb-1">
					Role *
				</Label>
				<Input
					id="role"
					name="role"
					type="text"
					placeholder="Frontend Developer"
					defaultValue={initialData?.role || ""}
					required
				/>
			</div>

			<div>
				<Label htmlFor="status" className="pb-1">
					Stage
				</Label>
				<Select
					name="status"
					required
					defaultValue={initialData?.status ?? STATUS.PENDING}
				>
					<SelectTrigger className="w-full" id="status">
						<SelectValue placeholder="placeholder" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="pending">Pending</SelectItem>
						<SelectItem value="interview1">1st Interview</SelectItem>
						<SelectItem value="interview2">2nd Interview</SelectItem>
						<SelectItem value="interview3">3rd Interview</SelectItem>
						<SelectItem value="rejected">Rejected</SelectItem>
						<SelectItem value="ghosted">Ghosted</SelectItem>
						<SelectItem value="offer">Offer</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div>
				<Label htmlFor="email" className="pb-1">
					Email Used
				</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="your@email.com"
					defaultValue={initialData?.email ?? (lastApplication?.email || "")}
				/>
			</div>

			<div>
				<Label htmlFor="notes" className="pb-1">
					Notes
				</Label>
				<Textarea
					id="notes"
					name="notes"
					placeholder="Something to save..."
					defaultValue={initialData?.notes ?? ""}
				/>
			</div>

			<DialogFooter className="justify-between">
				<DialogClose asChild>
					<Button className="flex-1">[CANCEL]</Button>
				</DialogClose>
				<Button type="submit" variant="destructive" className="flex-1">
					{initialData != null ? "[UPDATE]" : "[TOSS INTO PIT]"}
				</Button>
			</DialogFooter>
		</form>
	);
}
