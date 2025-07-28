import clsx from "clsx";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/theme/use-theme";

export function ProgramBox({
	children,
	className,
	title,
}: {
	children: React.ReactNode;
	title?: string;
	className?: string;
}) {
	const [glitch, setGlitch] = useState(false);
	const { isVoid } = useTheme();

	// Glitch effect for VP of Void
	useEffect(() => {
		if (isVoid) {
			const interval = setInterval(
				() => {
					setGlitch((prev) => !prev);
				},
				150 + Math.random() * 200,
			);
			return () => clearInterval(interval);
		}
	}, [isVoid]);

	return (
		<section className={cn("relative w-full", className)}>
			<div
				className={clsx(
					"relative bg-black border-2 border-primary shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.8)] font-mono overflow-hidden",
					isVoid &&
						"animate-pulse border-destructive shadow-[0_0_30px_rgba(var(--color-destructive-rgb),0.8)]",
					glitch && "animate-bounce",
				)}
			>
				{/* Console header */}
				<div className="bg-border/30 border-foreground border-b px-4 py-2">
					<div className="flex items-center gap-2">
						<span className="text-foreground text-sm ml-2 tracking-wider">
							{title}{" "}
							{isVoid && (
								<span className="text-red-400 animate-pulse">[CRITICAL]</span>
							)}
						</span>
					</div>
				</div>

				<div className="p-6 space-y-6">{children}</div>
			</div>
		</section>
	);
}
