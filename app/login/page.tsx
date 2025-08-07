import Link from "next/link";

import { LoginForm } from "@/components/forms/login-form";
import Image from "next/image";

export default function LoginPage() {
	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
			<div className="w-full max-w-sm space-y-8">
				<div className="flex flex-col items-center space-y-6">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/better-auth-starter.png"
							alt="Better Auth"
							width={40}
							height={40}
							className="dark:invert"
						/>
						<span className="text-2xl font-bold text-gray-900 dark:text-white">
							Better Auth
						</span>
					</Link>
					<div className="space-y-2 text-center">
						<h2 className="text-3xl font-bold tracking-tight">
							Welcome back
						</h2>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Enter your credentials to access your account
						</p>
					</div>
				</div>
				<LoginForm />
			</div>
		</div>
	);
}
