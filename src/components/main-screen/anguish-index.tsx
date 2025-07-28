import clsx from "clsx";
import { useMemo } from "react";
import { useSpinningNumber } from "@/anguish-index/hooks/use-spinning-numbers";
import {
	getCurrentLevelInfo,
	getLevelColor,
	getProgressInLevel,
} from "@/anguish-index/utils";
import { useApplications } from "@/store/pit-store";
import { selectAnguish, selectLevel } from "@/store/selectors";
import { useTheme } from "@/theme/use-theme";
import { ProgramBox } from "../program-box";

export function AnguishIndex() {
	const applications = useApplications();
	const anguishIndex = useMemo(
		() => selectAnguish(applications),
		[applications],
	);
	const currentLevel = useMemo(() => selectLevel(applications), [applications]);
	const { isVoid } = useTheme();

	const spinningValue = useSpinningNumber(anguishIndex);

	const {
		current: levelData,
		index: levelIndex,
		previousLimit,
	} = getCurrentLevelInfo(currentLevel);

	const progress = getProgressInLevel(
		anguishIndex,
		previousLimit,
		levelData.limit,
	);

	const levelColor = getLevelColor(levelIndex, isVoid);

	return (
		<ProgramBox title="ANGUISH_INDEX.exe">
			{/* Level name */}
			<div className="text-center">
				<div
					className={clsx(
						"text-2xl font-bold tracking-wider uppercase bg-gradient-to-r bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]",
						levelColor,
						isVoid && "animate-pulse text-red-400",
					)}
				>
					{levelData.name}
				</div>
				{isVoid && (
					<div className="text-red-400 text-xs mt-1 animate-pulse tracking-widest">
						[REALITY.EXE HAS STOPPED WORKING]
					</div>
				)}
			</div>

			{/* Progress bar */}
			<div className="space-y-3">
				<div className="flex justify-between text-xs text-primary">
					<span>{previousLimit}</span>
					<span className={`text-foreground tracking-wider`}>
						LEVEL {levelIndex + 1}
					</span>
					<span>
						{levelData.limit === Number.POSITIVE_INFINITY
							? "∞"
							: levelData.limit}
					</span>
				</div>

				<div className="relative h-6 bg-gray-900 border border-foreground shadow-inner">
					<div
						className={clsx(
							"h-full transition-all duration-500 ease-out bg-gradient-to-r shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.8)]",
							levelColor,
							isVoid &&
								"animate-pulse shadow-[0_0_30px_rgba(var(--color-destructive-rgb),0.8)]",
						)}
						style={{ width: `${progress}%` }}
					/>

					{/* Progress bar glow effect */}
					<div
						className={clsx(
							"absolute top-0 h-full opacity-50 blur-sm transition-all duration-500 ease-out bg-gradient-to-r",
							levelColor,
						)}
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>

			{/* Anguish Index number */}
			<div className="text-center">
				<div className="text-sm text-foreground tracking-wider">
					CURRENT INDEX
				</div>
				<div
					className={clsx(
						"text-6xl font-bold tabular-nums drop-shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.8)] bg-gradient-to-r bg-clip-text text-transparent",
						levelColor,
						isVoid && "animate-pulse text-red-400",
					)}
				>
					{spinningValue.toFixed(1)}
				</div>
			</div>
		</ProgramBox>
	);
}
