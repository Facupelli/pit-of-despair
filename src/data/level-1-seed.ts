import type { Application } from "@/lib/app.types";

export const MOCK_APPLICATIONS_LEVEL_1: Application[] = [
	{
		id: "app1",
		company: "SadTech",
		role: "Frontend Dev",
		status: "rejected",
		email: "hr@sadtech.com",
		history: [{ status: "rejected", date: "2025-01-10" }],
		createdAt: "2025-01-01",
		updatedAt: "2025-01-10",
		notes: "Generic rejection.",
	},
	{
		id: "app2",
		company: "Cryware",
		role: "Fullstack Developer",
		status: "ghosted",
		email: "jobs@cryware.io",
		history: [{ status: "ghosted", date: "2025-02-15" }],
		createdAt: "2025-02-01",
		updatedAt: "2025-02-15",
		notes: "Ghosted after submitting assignment.",
	},
	{
		id: "app3",
		company: "Tears Unlimited",
		role: "React Engineer",
		status: "interview1",
		email: "recruitment@tearsunlimited.com",
		history: [
			{ status: "interview1", date: "2025-03-05" },
			{ status: "rejected", date: "2025-03-10" },
		],
		createdAt: "2025-03-01",
		updatedAt: "2025-03-10",
		notes: "Quick turn-around rejection after interview.",
	},
	{
		id: "app4",
		company: "PainHub",
		role: "Junior Dev",
		status: "rejected",
		history: [{ status: "rejected", date: "2025-04-12" }],
		createdAt: "2025-04-01",
		updatedAt: "2025-04-12",
		notes: "Lowball offer followed by rejection.",
	},
	{
		id: "app5",
		company: "Melancholy Inc.",
		role: "Software Engineer",
		status: "interview2",
		history: [
			{ status: "interview1", date: "2025-05-01" },
			{ status: "interview2", date: "2025-05-07" },
			{ status: "rejected", date: "2025-05-10" },
		],
		createdAt: "2025-04-25",
		updatedAt: "2025-05-10",
		notes: "Promising start, then heartbreak.",
	},
];

export const MOCK_APPLICATIONS_LEVEL_2 = [
	// 6 rejected without interview
	...Array.from({ length: 6 }, (_, i) => ({
		id: `rejected-l2-${i}`,
		company: `Rejectron ${i}`,
		role: "React Dev",
		status: "rejected",
		history: [{ status: "rejected", date: `2025-03-${i + 5}` }],
		createdAt: `2025-03-${i + 2}`,
		updatedAt: `2025-03-${i + 5}`,
		notes: "Brushed off instantly.",
	})),

	// 5 apps with interview1 + rejection
	...Array.from({ length: 5 }, (_, i) => ({
		id: `int1-l2-${i}`,
		company: `OneShot Fail Inc. ${i}`,
		role: "Backend Dev",
		status: "rejected",
		history: [
			{ status: "interview1", date: `2025-06-${i + 1}` },
			{ status: "rejected", date: `2025-06-${i + 3}` },
		],
		createdAt: `2025-06-${i}`,
		updatedAt: `2025-06-${i + 3}`,
		notes: "One round then nope.",
	})),

	// 4 ghosted
	...Array.from({ length: 4 }, (_, i) => ({
		id: `ghost-l2-${i}`,
		company: `Ghostly Co ${i}`,
		role: "Frontend Dev",
		status: "ghosted",
		history: [{ status: "ghosted", date: `2025-04-${i + 5}` }],
		createdAt: `2025-04-${i + 2}`,
		updatedAt: `2025-04-${i + 5}`,
		notes: "Nothing but silence.",
	})),
] as Application[];

export const MOCK_APPLICATIONS_LEVEL_3: Application[] = [
	// 6 rejected without interview
	...Array.from({ length: 6 }, (_, i) => ({
		id: `rejected-l2-${i}`,
		company: `Rejectron ${i}`,
		role: "React Dev",
		status: "rejected",
		history: [{ status: "rejected", date: `2025-03-${i + 5}` }],
		createdAt: `2025-03-${i + 2}`,
		updatedAt: `2025-03-${i + 5}`,
		notes: "Brushed off instantly.",
	})),

	...Array.from({ length: 5 }, (_, i) => ({
		id: `int2-l2-${i}`,
		company: `FalseHope Corp ${i}`,
		role: "Fullstack Dev",
		status: "rejected",
		history: [
			{ status: "interview1", date: `2025-05-${i + 1}` },
			{ status: "interview2", date: `2025-05-${i + 3}` },
			{ status: "rejected", date: `2025-05-${i + 5}` },
		],
		createdAt: `2025-05-${i}`,
		updatedAt: `2025-05-${i + 5}`,
		notes: "Wasted time on tech screen and behavioral.",
	})),

	// 5 apps with interview1 + rejection
	...Array.from({ length: 5 }, (_, i) => ({
		id: `int1-l2-${i}`,
		company: `OneShot Fail Inc. ${i}`,
		role: "Backend Dev",
		status: "rejected",
		history: [
			{ status: "interview1", date: `2025-06-${i + 1}` },
			{ status: "rejected", date: `2025-06-${i + 3}` },
		],
		createdAt: `2025-06-${i}`,
		updatedAt: `2025-06-${i + 3}`,
		notes: "One round then nope.",
	})),

	// 4 ghosted
	...Array.from({ length: 6 }, (_, i) => ({
		id: `ghost-l2-${i}`,
		company: `Ghostly Co ${i}`,
		role: "Frontend Dev",
		status: "ghosted",
		history: [{ status: "ghosted", date: `2025-04-${i + 5}` }],
		createdAt: `2025-04-${i + 2}`,
		updatedAt: `2025-04-${i + 5}`,
		notes: "Nothing but silence.",
	})),
] as Application[];

export const MOCK_APPLICATIONS_LEVEL_4: Application[] = [
	// 6 rejected without interview
	...Array.from({ length: 10 }, (_, i) => ({
		id: `rejected-l2-${i}`,
		company: `Rejectron ${i}`,
		role: "React Dev",
		status: "rejected",
		history: [{ status: "rejected", date: `2025-03-${i + 5}` }],
		createdAt: `2025-03-${i + 2}`,
		updatedAt: `2025-03-${i + 5}`,
		notes: "Brushed off instantly.",
	})),

	...Array.from({ length: 5 }, (_, i) => ({
		id: `int2-l2-${i}`,
		company: `FalseHope Corp ${i}`,
		role: "Fullstack Dev",
		status: "rejected",
		history: [
			{ status: "interview1", date: `2025-05-${i + 1}` },
			{ status: "interview2", date: `2025-05-${i + 3}` },
			{ status: "rejected", date: `2025-05-${i + 5}` },
		],
		createdAt: `2025-05-${i}`,
		updatedAt: `2025-05-${i + 5}`,
		notes: "Wasted time on tech screen and behavioral.",
	})),

	// 5 apps with interview1 + rejection
	...Array.from({ length: 8 }, (_, i) => ({
		id: `int1-l2-${i}`,
		company: `OneShot Fail Inc. ${i}`,
		role: "Backend Dev",
		status: "rejected",
		history: [
			{ status: "interview1", date: `2025-06-${i + 1}` },
			{ status: "rejected", date: `2025-06-${i + 3}` },
		],
		createdAt: `2025-06-${i}`,
		updatedAt: `2025-06-${i + 3}`,
		notes: "One round then nope.",
	})),

	// 4 ghosted
	...Array.from({ length: 15 }, (_, i) => ({
		id: `ghost-l2-${i}`,
		company: `Ghostly Co ${i}`,
		role: "Frontend Dev",
		status: "ghosted",
		history: [{ status: "ghosted", date: `2025-04-${i + 5}` }],
		createdAt: `2025-04-${i + 2}`,
		updatedAt: `2025-04-${i + 5}`,
		notes: "Nothing but silence.",
	})),
] as Application[];

export const MOCK_APPLICATIONS_LEVEL_5: Application[] = [
	// 6 rejected without interview
	...Array.from({ length: 20 }, (_, i) => ({
		id: `rejected-l2-${i}`,
		company: `Rejectron ${i}`,
		role: "React Dev",
		status: "rejected",
		history: [{ status: "rejected", date: `2025-03-${i + 5}` }],
		createdAt: `2025-03-${i + 2}`,
		updatedAt: `2025-03-${i + 5}`,
		notes: "Brushed off instantly.",
	})),

	...Array.from({ length: 12 }, (_, i) => ({
		id: `int2-l2-${i}`,
		company: `FalseHope Corp ${i}`,
		role: "Fullstack Dev",
		status: "rejected",
		history: [
			{ status: "interview1", date: `2025-05-${i + 1}` },
			{ status: "interview2", date: `2025-05-${i + 3}` },
			{ status: "rejected", date: `2025-05-${i + 5}` },
		],
		createdAt: `2025-05-${i}`,
		updatedAt: `2025-05-${i + 5}`,
		notes: "Wasted time on tech screen and behavioral.",
	})),

	// 5 apps with interview1 + rejection
	...Array.from({ length: 14 }, (_, i) => ({
		id: `int1-l2-${i}`,
		company: `OneShot Fail Inc. ${i}`,
		role: "Backend Dev",
		status: "rejected",
		history: [
			{ status: "interview1", date: `2025-06-${i + 1}` },
			{ status: "rejected", date: `2025-06-${i + 3}` },
		],
		createdAt: `2025-06-${i}`,
		updatedAt: `2025-06-${i + 3}`,
		notes: "One round then nope.",
	})),

	// 4 ghosted
	...Array.from({ length: 20 }, (_, i) => ({
		id: `ghost-l2-${i}`,
		company: `Ghostly Co ${i}`,
		role: "Frontend Dev",
		status: "ghosted",
		history: [{ status: "ghosted", date: `2025-04-${i + 5}` }],
		createdAt: `2025-04-${i + 2}`,
		updatedAt: `2025-04-${i + 5}`,
		notes: "Nothing but silence.",
	})),
] as Application[];

export const MOCK_APPLICATIONS_LEVEL_6: Application[] = [
	// 6 rejected without interview
	...Array.from({ length: 20 }, (_, i) => ({
		id: `rejected-l2-${i}`,
		company: `Rejectron ${i}`,
		role: "React Dev",
		status: "rejected",
		history: [{ status: "rejected", date: `2025-03-${i + 5}` }],
		createdAt: `2025-03-${i + 2}`,
		updatedAt: `2025-03-${i + 5}`,
		notes: "Brushed off instantly.",
	})),

	...Array.from({ length: 12 }, (_, i) => ({
		id: `int2-l2-${i}`,
		company: `FalseHope Corp ${i}`,
		role: "Fullstack Dev",
		status: "rejected",
		history: [
			{ status: "interview1", date: `2025-05-${i + 1}` },
			{ status: "interview2", date: `2025-05-${i + 3}` },
			{ status: "rejected", date: `2025-05-${i + 5}` },
		],
		createdAt: `2025-05-${i}`,
		updatedAt: `2025-05-${i + 5}`,
		notes: "Wasted time on tech screen and behavioral.",
	})),

	// 5 apps with interview1 + rejection
	...Array.from({ length: 14 }, (_, i) => ({
		id: `int1-l2-${i}`,
		company: `OneShot Fail Inc. ${i}`,
		role: "Backend Dev",
		status: "rejected",
		history: [
			{ status: "interview1", date: `2025-06-${i + 1}` },
			{ status: "rejected", date: `2025-06-${i + 3}` },
		],
		createdAt: `2025-06-${i}`,
		updatedAt: `2025-06-${i + 3}`,
		notes: "One round then nope.",
	})),

	// 4 ghosted
	...Array.from({ length: 40 }, (_, i) => ({
		id: `ghost-l2-${i}`,
		company: `Ghostly Co ${i}`,
		role: "Frontend Dev",
		status: "ghosted",
		history: [{ status: "ghosted", date: `2025-04-${i + 5}` }],
		createdAt: `2025-04-${i + 2}`,
		updatedAt: `2025-04-${i + 5}`,
		notes: "Nothing but silence.",
	})),
] as Application[];
