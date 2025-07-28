import type { PitEvent } from "@/store/types";
import {
	MOCK_APPLICATIONS_LEVEL_1,
	MOCK_APPLICATIONS_LEVEL_2,
	MOCK_APPLICATIONS_LEVEL_3,
	MOCK_APPLICATIONS_LEVEL_4,
	MOCK_APPLICATIONS_LEVEL_5,
	MOCK_APPLICATIONS_LEVEL_6,
} from "./level-1-seed";

export const LEVEL_SEEDS: Record<string, () => PitEvent> = {
	"1": () => ({
		type: "BULK_ADD",
		payload: MOCK_APPLICATIONS_LEVEL_1,
	}),

	"2": () => ({
		type: "BULK_ADD",
		payload: MOCK_APPLICATIONS_LEVEL_2,
	}),

	"3": () => ({
		type: "BULK_ADD",
		payload: MOCK_APPLICATIONS_LEVEL_3,
	}),

	"4": () => ({
		type: "BULK_ADD",
		payload: MOCK_APPLICATIONS_LEVEL_4,
	}),

	"5": () => ({
		type: "BULK_ADD",
		payload: MOCK_APPLICATIONS_LEVEL_5,
	}),

	"6": () => ({
		type: "BULK_ADD",
		payload: MOCK_APPLICATIONS_LEVEL_6,
	}),
};
