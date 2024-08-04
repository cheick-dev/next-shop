import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next-Shop",
	description: "La meilleure application de shopping en ligne",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="fr">
				<body
					className={`${inter.className} min-h-screen font-sans antialiased bg-gray-50`}
				>
					<NavBar />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
