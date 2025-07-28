import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { JobApplicationForm } from "../job-app-form";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

const SADISTIC_LABELS = [
	"Throw into the Pit",
	"Feed the Void",
	"Submit to Corporate Overlords",
	"Deepen the Wound",
	"Deploy Hope.exe",
	"Push to Rejection Branch",
	"Just Get It Over With",
	"Why Do I Do This?",
	"One Step Closer to the Edge",
	"Git Push Origin Despair",
	"Dispatch to the Ether",
	"Compile & Weep",
	"Connect to 127.0.0.1:HELL",
	"Ping the Abyss",
	"Lower the Bar",
	"Another Brick in the Wall",
];

export function AddJobAppDialog() {
	const [open, setOpen] = useState(false);
	const [currentLabel, setCurrentLabel] = useState("");

	useEffect(() => {
		const randomLabel =
			SADISTIC_LABELS[Math.floor(Math.random() * SADISTIC_LABELS.length)];
		setCurrentLabel(randomLabel);
	}, []);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="glitch" className="w-full text-lg mx-auto">
					{currentLabel}
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>THROW INTO THE PIT</DialogTitle>
				</DialogHeader>

				<JobApplicationForm afterSubmit={() => setOpen(false)} />
			</DialogContent>
		</Dialog>
	);
}
