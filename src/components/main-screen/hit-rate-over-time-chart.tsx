"use client";

import { useMemo } from "react";
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { STATUS } from "@/lib/app.constants";
import type { Application } from "@/lib/app.types";
import dayjs from "@/lib/dayjs";
import { useApplications } from "@/store/pit-store";
import { selectHitRatePoints } from "@/store/selectors";
import { ProgramBox } from "../program-box";

interface ChartData {
	month: string;
	value: number;
}

function getChartData(applications: Application[]): ChartData[] {
	if (applications.length === 0) {
		return [{ month: dayjs().format("MMM YYYY"), value: 0 }];
	}

	/* 1. Group apps by month */
	const monthlyData: { [key: string]: { total: number; positive: number } } =
		{};
	applications.forEach((app) => {
		const date = dayjs(app.updatedAt);
		const month = date.format("MMM YYYY");

		if (!monthlyData[month]) {
			monthlyData[month] = { total: 0, positive: 0 };
		}
		monthlyData[month].total += 1;
		if (app.status.startsWith("interview") || app.status === STATUS.OFFER) {
			monthlyData[month].positive += 1;
		}
	});

	/* 2. Monthly (non-cumulative) hit-rate */
	const chartData: ChartData[] = Object.keys(monthlyData)
		.sort(
			(a, b) => dayjs(a, "MMM YYYY").valueOf() - dayjs(b, "MMM YYYY").valueOf(),
		)
		.map((month) => {
			const { total, positive } = monthlyData[month];
			const hitRate = total ? (positive / total) * 100 : 0;
			return { month, value: Number(hitRate.toFixed(1)) };
		});

	return chartData.length > 0
		? chartData
		: [{ month: dayjs().format("MMM YYYY"), value: 0 }];
}

export function HitRateChart() {
	const applications = useApplications();

	const hitRatePoints = useMemo(
		() => selectHitRatePoints(applications),
		[applications],
	);

	const chartData = getChartData(applications);

	const currentRate = hitRatePoints[hitRatePoints.length - 1] || 0;

	const averageRate =
		hitRatePoints.length > 0
			? hitRatePoints.reduce((a, b) => a + b, 0) / hitRatePoints.length
			: 0;
	const trend =
		hitRatePoints.length > 1
			? currentRate - hitRatePoints[hitRatePoints.length - 2]
			: 0;

	return (
		<ProgramBox title="HIT_RATE_OVER_TIME.exe">
			{/* Stats header */}
			<div>
				<div className="grid grid-cols-3 gap-4 text-center">
					<div>
						<div className="text-xl font-bold text-foreground">
							{currentRate.toFixed(1)}%
						</div>
						<div className="text-xs text-gray-400">CURRENT</div>
					</div>
					<div>
						<div className={`text-xl font-bold text-primary`}>
							{averageRate.toFixed(1)}%
						</div>
						<div className="text-xs text-gray-400">AVERAGE</div>
					</div>
					<div>
						<div
							className={`text-xl font-bold ${trend >= 0 ? "text-green-400" : "text-red-400 animate-pulse"}`}
						>
							{trend >= 0 ? "+" : ""}
							{trend.toFixed(1)}%
						</div>
						<div className="text-xs text-gray-400">TREND</div>
					</div>
				</div>
			</div>

			{/* Chart */}
			<div>
				{chartData.length === 0 ? (
					<div className="text-center py-8">
						<div className="text-gray-500 text-sm">
							Submit applications to see your hit rate
						</div>
					</div>
				) : (
					<div className="h-48">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart
								data={chartData}
								margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
							>
								<CartesianGrid strokeDasharray="3 3" stroke="#374151" />
								<XAxis
									dataKey="month"
									stroke="#9ca3af"
									fontSize={12}
									tickLine={false}
									axisLine={false}
								/>
								<YAxis
									stroke="#9ca3af"
									fontSize={12}
									tickFormatter={(val: number) => `${val}%`}
									domain={[0, Math.max(10, ...chartData.map((d) => d.value))]} // Dynamic max
									tickLine={false}
									axisLine={false}
								/>
								<Tooltip
									contentStyle={{
										backgroundColor: "#111827",
										border: "none",
										borderRadius: "4px",
										fontSize: 12,
									}}
									labelStyle={{ color: "#e5e7eb" }}
									itemStyle={{ color: "#34d399" }}
									formatter={(val: number) => [`${val}%`, "Hit Rate"]}
								/>
								<Line
									type="monotone"
									dataKey="value"
									stroke="cyan"
									strokeWidth={2}
									dot={{ fill: "cyan", r: 3 }}
									activeDot={{ r: 5 }}
								/>
							</LineChart>
						</ResponsiveContainer>
					</div>
				)}
			</div>
		</ProgramBox>
	);
}
