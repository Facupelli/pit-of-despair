import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	// Base styles - cyberpunk foundation
	"inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-sm font-medium border-2 rounded-none transition-all duration-300 disabled:pointer-events-none disabled:opacity-40 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 relative overflow-hidden uppercase tracking-wider select-none cursor-pointer",
	{
		variants: {
			variant: {
				default:
					"bg-primary/10 text-primary border-primary shadow-[0_0_15px_var(--primary),inset_0_0_15px_var(--primary)/10] hover:bg-primary/20 hover:shadow-[0_0_25px_var(--primary),0_0_40px_var(--primary)/50,inset_0_0_20px_var(--primary)/20] hover:border-primary/80 active:scale-[0.98] active:shadow-[0_0_30px_var(--primary),inset_0_0_25px_var(--primary)/30] hover:text-primary-foreground transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
				destructive:
					"bg-destructive/10 text-destructive border-destructive shadow-[0_0_15px_var(--destructive),inset_0_0_15px_var(--destructive)/10] hover:bg-destructive/20 hover:shadow-[0_0_25px_var(--destructive),0_0_40px_var(--destructive)/50,inset_0_0_20px_var(--destructive)/20] hover:border-destructive/80 active:scale-[0.98] active:shadow-[0_0_30px_var(--destructive),inset_0_0_25px_var(--destructive)/30] hover:text-background transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-destructive/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
				outline:
					"bg-background/5 text-foreground border-border hover:bg-accent/10 hover:text-accent hover:border-accent hover:shadow-[0_0_20px_var(--accent),inset_0_0_15px_var(--accent)/10] active:bg-accent/20 active:scale-[0.98] transition-all duration-300 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-accent/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
				secondary:
					"bg-secondary/10 text-secondary border-secondary shadow-[0_0_15px_var(--secondary),inset_0_0_15px_var(--secondary)/10] hover:bg-secondary/20 hover:shadow-[0_0_25px_var(--secondary),0_0_40px_var(--secondary)/50,inset_0_0_20px_var(--secondary)/20] hover:border-secondary/80 active:scale-[0.98] active:shadow-[0_0_30px_var(--secondary),inset_0_0_25px_var(--secondary)/30] hover:text-secondary-foreground transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-secondary/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
				ghost:
					"bg-transparent text-foreground border-transparent hover:bg-accent/10 hover:text-accent hover:border-accent/50 hover:shadow-[0_0_15px_var(--accent)/50,inset_0_0_10px_var(--accent)/5] active:scale-[0.98] transition-all duration-300 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-accent/5 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
				link: "bg-transparent border-transparent text-primary hover:text-primary/80 active:brightness-125 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_var(--primary)] active:after:shadow-[0_0_12px_var(--primary)]",
				neon: "bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 text-primary border-primary shadow-[0_0_20px_var(--primary),0_0_40px_var(--accent)/30,inset_0_0_20px_var(--primary)/10] hover:shadow-[0_0_30px_var(--primary),0_0_60px_var(--accent)/50,inset_0_0_30px_var(--primary)/20] hover:bg-gradient-to-r hover:from-primary/30 hover:via-accent/30 hover:to-primary/30 active:scale-[0.98] transition-all duration-300 animate-pulse before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
				glitch:
					"bg-primary/10 text-primary border-primary shadow-[0_0_15px_var(--primary)] hover:shadow-[0_0_25px_var(--primary),0_0_40px_var(--primary)/50] active:scale-[0.98] transition-all duration-150 hover:animate-[glitch-skew_0.3s_ease-in-out,glitch-rgb-split_0.2s_ease-in-out] ",
			},
			size: {
				default: "h-11 px-6 py-3 text-sm has-[>svg]:px-4",
				sm: "h-9 gap-1.5 px-4 py-2 text-xs has-[>svg]:px-3",
				lg: "h-14 px-8 py-4 text-base has-[>svg]:px-6",
				xl: "h-16 px-10 py-5 text-lg has-[>svg]:px-8",
				icon: "size-11 p-0",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);
function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";
	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button };
