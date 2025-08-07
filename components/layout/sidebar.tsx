import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@/components/organization-switcher";
import { Logout } from "@/components/logout";
import { Button } from "@/components/ui/button";
import { Home, Settings, Building2, LogOut } from "lucide-react";

const routes = [
	{
		label: "Dashboard",
		icon: Home,
		href: "/dashboard",
	},
	{
		label: "Organizations",
		icon: Building2,
		href: "/dashboard/organization",
	},
	{
		label: "Settings",
		icon: Settings,
		href: "/dashboard/settings",
	},
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="space-y-4 py-4 flex flex-col h-full bg-gray-50 dark:bg-gray-900">
			<div className="px-3 py-2">
				<OrganizationSwitcher />
			</div>
			<div className="space-y-1 px-3">
				{routes.map((route) => (
					<Link
						key={route.href}
						href={route.href}
						className={cn(
							"text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition",
							pathname === route.href
								? "bg-gray-100 dark:bg-gray-800"
								: ""
						)}
					>
						<div className="flex items-center flex-1">
							<route.icon className="h-5 w-5 mr-3" />
							{route.label}
						</div>
					</Link>
				))}
			</div>
			<div className="mt-auto px-3">
				<Logout>
					<Button variant="ghost" className="w-full justify-start">
						<LogOut className="h-5 w-5 mr-3" />
						Logout
					</Button>
				</Logout>
			</div>
		</div>
	);
}
