import { Achievement } from "./components/main-screen/achievement";
import { AnguishIndex } from "./components/main-screen/anguish-index";
import { AppTitle } from "./components/main-screen/app-title";
import { HitRateChart } from "./components/main-screen/hit-rate-over-time-chart";
import { AddJobAppDialog } from "./components/main-screen/submit-app-button";
import { ThePit } from "./components/main-screen/the-pit";
import { ProgramBox } from "./components/program-box";
import { Button } from "./components/ui/button";
import { useGhosting } from "./hooks/use-update-job-apps";
import { ThemeProvider } from "./theme/theme-provider";

function App() {
	return (
		<ThemeProvider>
			<UpdateStatusApplicationScript />

			<section className="font-mono bg-bg h-svh ">
				<div className="max-w-4xl mx-auto">
					<div className="p-10 flex flex-col gap-8">
						<AppTitle />
						<div className="grid grid-cols-[1fr_30%] gap-8">
							<AnguishIndex />
							<div className="flex flex-col gap-8">
								<ProgramBox title="EXPORT.exe" className="">
									<p className="text-pretty text-xs m-0 pb-4">
										Share your pain with others. Your are not alone!
									</p>
									<Button className="w-full" variant="outline">
										[EXPORT JOURNEY]
									</Button>
								</ProgramBox>
							</div>
						</div>
						<AddJobAppDialog />
						<Achievement />
						<ThePit />
						<HitRateChart />
					</div>
				</div>
			</section>
		</ThemeProvider>
	);
}

function UpdateStatusApplicationScript() {
	useGhosting();
	return null;
}

export default App;
