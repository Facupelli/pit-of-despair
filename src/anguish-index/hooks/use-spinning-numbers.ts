import { useEffect, useState } from "react";

export function useSpinningNumber(
	target: number,
	duration = 1200,
	delay = 250,
) {
	const [display, setDisplay] = useState(target);

	useEffect(() => {
		if (display === target) return;

		const t = setTimeout(() => {
			const start = display;
			const distance = target - start;
			const step = Math.sign(distance) * 0.1; // 0.1 per tick
			const steps = Math.abs(distance / step);
			const interval = duration / steps;

			let value = start;
			const id = setInterval(() => {
				value += step;
				if ((step > 0 && value >= target) || (step < 0 && value <= target)) {
					setDisplay(target);
					clearInterval(id);
				} else {
					setDisplay(value);
				}
			}, interval);

			return () => clearInterval(id);
		}, delay);

		return () => clearTimeout(t);
	}, [target, duration, delay, display]);

	return display;
}
