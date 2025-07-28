import clsx from "clsx";
import { useState } from "react";
import { useMonochromeActive } from "@/store/pit-store";
import { ProgramBox } from "../program-box";

export function AppTitle() {
	const mono = useMonochromeActive();
	const [isGlitching, setIsGlitching] = useState(false);

	return (
		<ProgramBox title="SYSTEM_BOOT.exe">
			<div className="flex text-foreground flex-col items-center w-full text-4xl font-bold justify-center">
				<h1
					className={clsx(
						"tracking-wider uppercase font-mono text-accent",
						mono && "text-red-500",
					)}
					style={{
						animation: isGlitching
							? "glitch-skew 0.5s 1, glitch-rgb-split 0.3s 1"
							: "",
					}}
					onMouseEnter={() => setIsGlitching(true)}
					onMouseLeave={() => setIsGlitching(false)}
				>
					{mono ? "THE PIT OF REJECTIONS" : "THE PIT OF DESPAIR"}
				</h1>
				<div className={clsx("text-xs text-accent", mono && "text-red-500")}>
					JOB HUNT TRACKER
				</div>
			</div>
		</ProgramBox>
	);
}
