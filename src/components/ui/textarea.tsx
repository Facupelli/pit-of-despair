import type * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				"flex min-h-16 w-full rounded-none border border-border bg-card/60 px-3 py-2 font-mono text-sm text-foreground shadow-none placeholder:text-muted-foreground/60 transition-colors outline-none focus:border-primary focus:bg-card focus:shadow-[0_0_12px_2px_var(--glow-primary)] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:shadow-[0_0_10px_2px_var(--destructive)] resize-y",
				className,
			)}
			{...props}
		/>
	);
}

export { Textarea };
