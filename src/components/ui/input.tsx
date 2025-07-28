import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"flex h-9 w-full min-w-0 rounded-none border border-border bg-card/60 px-3 py-1.5 font-mono text-sm text-foreground shadow-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 focus:border-primary focus:bg-card focus:shadow-[0_0_12px_2px_var(--glow-primary)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:shadow-[0_0_10px_2px_var(--destructive)]",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
