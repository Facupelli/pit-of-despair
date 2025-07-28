import { z } from "zod";

export const JobApplicationSchema = z.object({
	company: z.string().min(1, "Company name is required"),
	role: z.string().min(1, "Role is required"),
	status: z.enum([
		"pending",
		"rejected",
		"interview1",
		"interview2",
		"interview3",
		"offer",
		"ghosted",
	]),
	email: z.email().optional(),
	notes: z.string(),
});

export type JobApplicationSchema = z.infer<typeof JobApplicationSchema>;
