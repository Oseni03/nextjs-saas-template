import { Sidebar } from "./sidebar";
import { ReactNode } from "react";

export function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="h-screen">
			<div className="hidden md:flex h-full w-72 flex-col fixed inset-y-0 z-50">
				<Sidebar />
			</div>
			<main className="md:pl-72 h-full">
				<div className="h-full p-8">{children}</div>
			</main>
		</div>
	);
}
