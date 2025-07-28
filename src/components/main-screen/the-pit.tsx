import clsx from "clsx";
import { useCallback, useMemo, useRef, useState } from "react";
import type { Application } from "@/lib/app.types";
import { formatTimeAgo } from "@/lib/utils";
import { useApplications } from "@/store/pit-store";
import { FILTER_OPTIONS, ITEMS_PER_PAGE } from "@/the-pit/constants";
import { useFilteredApplications } from "@/the-pit/hooks/use-filtered-applications";
import { useKeyboardShortcuts } from "@/the-pit/hooks/use-keyboard-shortcuts";
import type { FilterType } from "@/the-pit/types";
import { getApplicationStatusColor, getStatusSymbol } from "@/the-pit/utils";
import { JobApplicationForm } from "../job-app-form";
import { ProgramBox } from "../program-box";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export function ThePit() {
	const [searchQuery, setSearchQuery] = useState("");
	const [filter, setFilter] = useState<FilterType>("all");
	const [selectedApplication, setSelectedApplication] =
		useState<Application | null>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	const applications = useApplications();

	const handleFilterChange = useCallback((newFilter: FilterType) => {
		setFilter(newFilter);
		setCurrentPage(1);
	}, []);

	const handleSearchFocus = useCallback(() => {
		const searchInput = document.querySelector(
			'input[type="text"]',
		) as HTMLInputElement | null;
		searchInput?.focus();
	}, []);

	const handleApplicationSelect = useCallback((app: Application) => {
		setSelectedApplication(app);
		setIsDialogOpen(true);
	}, []);

	const handleDialogClose = useCallback((open: boolean) => {
		setIsDialogOpen(open);
		if (!open) {
			setSelectedApplication(null);
		}
	}, []);

	const handleShowMore = useCallback(() => {
		setCurrentPage((prev) => prev + 1);
	}, []);

	useKeyboardShortcuts(handleFilterChange, handleSearchFocus);
	const filteredApplications = useFilteredApplications(
		applications,
		filter,
		searchQuery,
	);

	const paginatedData = useMemo(() => {
		const startIndex = 0;
		const endIndex = currentPage * ITEMS_PER_PAGE;
		const visibleApplications = filteredApplications.slice(
			startIndex,
			endIndex,
		);
		const hasMore = endIndex < filteredApplications.length;
		const totalCount = filteredApplications.length;

		return {
			applications: visibleApplications,
			hasMore,
			totalCount,
			currentlyShowing: visibleApplications.length,
		};
	}, [filteredApplications, currentPage]);

	const hasSearchOrFilter = searchQuery.trim() !== "" || filter !== "all";
	const isEmpty = filteredApplications.length === 0;

	return (
		<>
			<EditJobAppDialog
				application={selectedApplication}
				open={isDialogOpen}
				onOpenChange={handleDialogClose}
			/>

			<ProgramBox title="THE_PIT.exe">
				{/* Search and filters */}
				<div>
					<div className="space-y-2">
						<SearchBar value={searchQuery} onChange={setSearchQuery} />
						<FilterButtons
							currentFilter={filter}
							onFilterChange={handleFilterChange}
						/>
					</div>
				</div>

				<div className="">
					{isEmpty ? (
						<EmptyState hasSearchOrFilter={hasSearchOrFilter} />
					) : (
						<div className="">
							{paginatedData.applications.map((app) => (
								<ApplicationCard
									key={app.id}
									application={app}
									onClick={handleApplicationSelect}
								/>
							))}

							<div className="text-xs text-primary/40 pt-1 flex justify-end font-mono">
								Showing {paginatedData.currentlyShowing} of{" "}
								{paginatedData.totalCount} applications
							</div>

							{paginatedData.hasMore && (
								<div className="flex justify-center">
									<Button size="sm" variant="outline" onClick={handleShowMore}>
										[SHOW MORE]
									</Button>
								</div>
							)}
						</div>
					)}
				</div>
			</ProgramBox>
		</>
	);
}

interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
	const searchInputRef = useRef<HTMLInputElement>(null);

	return (
		<div className="flex-1 relative">
			<div className="relative">
				<span className="-translate-y-1/2 absolute top-1/2 left-3">🔎</span>
				<input
					ref={searchInputRef}
					type="text"
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder="Search the void... (press / to focus)"
					className="px-10 w-full bg-card border border-secondary text-foreground py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-foreground placeholder-gray-500"
				/>
			</div>
		</div>
	);
};

interface FilterButtonsProps {
	currentFilter: FilterType;
	onFilterChange: (filter: FilterType) => void;
}

const FilterButtons = ({
	currentFilter,
	onFilterChange,
}: FilterButtonsProps) => (
	<div className="flex justify-end gap-2 text-xs">
		{FILTER_OPTIONS.map(({ key, label, value }) => (
			<button
				type="button"
				key={value}
				onClick={() => onFilterChange(value)}
				className={clsx(
					"px-2 py-1 border font-mono tracking-wider transition-all",
					currentFilter === value
						? "bg-foreground text-black border-foreground"
						: "border-secondary text-foreground hover:bg-cyan-400/10",
				)}
			>
				<span className="text-xs opacity-60">{key}</span> {label}
			</button>
		))}
	</div>
);

interface ApplicationCardProps {
	application: Application;
	onClick: (application: Application) => void;
}

const ApplicationCard = ({ application, onClick }: ApplicationCardProps) => {
	const handleClick = useCallback(() => {
		onClick(application);
	}, [application, onClick]);

	const historyString = useMemo(() => {
		if (!application.history || application.history.length <= 1) {
			return null;
		}
		return application.history.map((h) => h.status).join(" -> ");
	}, [application.history]);

	return (
		<button
			type="button"
			onClick={handleClick}
			className="cursor-pointer flex w-full items-center justify-between border p-2 bg-bg/30 border-foreground hover:bg-gray-700/30 transition-colors"
		>
			<div className="flex items-center gap-3 flex-1 min-w-0">
				<span className="text-lg">{getStatusSymbol(application.status)}</span>
				<div className="flex items-center gap-2 min-w-0">
					<span
						className={`font-bold text-xs ${getApplicationStatusColor(application.status)}`}
					>
						{application.status.toUpperCase()}:
					</span>
					<span className="text-white text-xs truncate">
						{application.company}
					</span>
					<span className="text-gray-400 text-xs hidden sm:inline shrink-0">
						| ({application.role})
					</span>
				</div>
				{historyString && (
					<div className="text-gray-400 text-xs truncate">
						| {historyString}
					</div>
				)}
			</div>
			<span className="text-gray-500 text-xs whitespace-nowrap ml-2">
				{formatTimeAgo(application.createdAt)}
			</span>
		</button>
	);
};

interface EmptyStateProps {
	hasSearchOrFilter: boolean;
}

const EmptyState = ({ hasSearchOrFilter }: EmptyStateProps) => (
	<div className="text-center py-12">
		<div className="text-gray-500 text-sm">
			{hasSearchOrFilter ? (
				"No applications match your criteria"
			) : (
				<div className="text-sm text-destructive/80 flex flex-col items-center justify-center text-center">
					<div>
						<span>The pit awaits your suffering.</span>
					</div>
					<div>Start your quest, brave soul.</div>
				</div>
			)}
		</div>
	</div>
);

interface EditJobAppDialogProps {
	application: Application | null;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const EditJobAppDialog = ({
	application,
	open,
	onOpenChange,
}: EditJobAppDialogProps) => {
	if (!application) return null;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit Application</DialogTitle>
				</DialogHeader>
				<JobApplicationForm
					initialData={application}
					afterSubmit={() => onOpenChange(false)}
				/>
			</DialogContent>
		</Dialog>
	);
};
