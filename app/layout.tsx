import type { Metadata } from "next";

import "./globals.css";
import { EB_Garamond } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"], // make sure italic is included
});

const ebGaramond = EB_Garamond({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-eb-garamond",
});

const libreBaskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
	title: "Monserrat & Michael",
	description: "Wedding Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${ebGaramond.variable} ${libreBaskerville.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
