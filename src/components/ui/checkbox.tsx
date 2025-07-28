import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Checkbox({
	className,
	...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<div className="relative group inline-block">
			<CheckboxPrimitive.Root
				data-slot="checkbox"
				className={cn(
					"peer size-5 shrink-0 border-2 transition-all outline-none relative overflow-hidden font-mono",
					"border-border bg-card/30",
					"data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
					"data-[state=checked]:shadow-[0_0_8px_oklch(var(--primary)/0.5)]",
					"focus-visible:border-primary focus-visible:shadow-[0_0_10px_oklch(var(--primary)/0.4)]",
					"aria-invalid:border-destructive aria-invalid:shadow-[0_0_6px_oklch(var(--destructive)/0.4)]",
					"hover:border-primary/60 hover:bg-card/50",
					"disabled:cursor-not-allowed disabled:opacity-50",
					"before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-current before:to-transparent before:opacity-[0.05] before:pointer-events-none",
					className,
				)}
				{...props}
			>
				<CheckboxPrimitive.Indicator
					data-slot="checkbox-indicator"
					className="flex items-center justify-center text-current transition-all duration-200"
				>
					<span className="text-xs font-bold leading-none">✓</span>
				</CheckboxPrimitive.Indicator>
			</CheckboxPrimitive.Root>

			<div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none">
				<div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
			</div>
		</div>
	);
}

export { Checkbox };
