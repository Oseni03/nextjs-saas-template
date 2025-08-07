import { ModeSwitcher } from "@/components/mode-switcher";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
			<header className="absolute top-0 right-0 flex items-center justify-end p-4">
				<ModeSwitcher />
			</header>

			<main className="flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
				<div className="space-y-8">
					<Image
						src="/better-auth-starter.png"
						alt="Better Auth"
						width={120}
						height={120}
						className="mx-auto rounded-2xl dark:invert"
					/>

					<div className="space-y-4">
						<h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-5xl">
							Better Auth Starter
						</h1>

						<p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-300">
							A modern authentication starter with a clean,
							monochromatic design. Built with Next.js, Shadcn UI,
							and Better Auth for a seamless auth experience.
						</p>
					</div>

					<div className="flex items-center justify-center gap-4">
						<Link href="/login">
							<Button
								variant="outline"
								className="border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								Sign in
							</Button>
						</Link>
						<Link href="/signup">
							<Button className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200">
								Create account
							</Button>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
