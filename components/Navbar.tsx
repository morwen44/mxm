"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar({
	navData,
	lang,
}: {
	navData: any;
	lang: string;
}) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	// Toggle background on scroll
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (mobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [mobileOpen]);

	const navLinks = [
		{ name: navData.home, href: "#invitation" },
		{ name: navData.travel, href: "#travel" },
		{ name: navData.dressCode, href: "#dress-code" },
		{ name: navData.rsvp, href: "#rsvp" },
		{ name: navData.registry, href: "#registry" },
		{ name: navData.faq, href: "#faq" },
	];

	return (
		<nav
			className={`fixed top-0 w-full z-[100] transition-all duration-500 px-8 py-6 lg:px-16 ${
				isScrolled && !mobileOpen
					? "bg-[var(--color-bg)]/80 backdrop-blur-md py-4 shadow-sm"
					: "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto flex justify-between items-center relative">
				{/* Logo: z-[110] keeps it above the menu overlay */}
				<Link
					href={`/${lang}`}
					className="text-xl tracking-[0.2em] font-bold uppercase text-[var(--color-accent1)] z-[110]"
					style={{ fontFamily: "var(--font-eb-garamond)" }}
					onClick={() => setMobileOpen(false)}>
					M & M
				</Link>

				{/* Desktop Links */}
				<div className="hidden md:flex gap-10">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="group relative text-xs uppercase tracking-[0.3em] text-[var(--color-accent1)]"
							style={{ fontFamily: "var(--font-libre-baskerville)" }}>
							{link.name}
							<span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--color-accent1)] scale-x-0 transition-transform duration-500 origin-center group-hover:scale-x-100"></span>
						</a>
					))}
				</div>

				{/* Mobile Hamburger/X Button: z-[110] is the key here! */}
				<button
					onClick={() => setMobileOpen(!mobileOpen)}
					className="md:hidden text-[var(--color-text)] flex flex-col gap-1.5 z-[110] relative p-2 focus:outline-none"
					aria-label="Menu">
					{/* Top Line */}
					<motion.span
						animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
						className="w-6 h-[1px] bg-current"
					/>
					{/* Middle Line */}
					<motion.span
						animate={{ opacity: mobileOpen ? 0 : 1 }}
						className="w-6 h-[1px] bg-current"
					/>
					{/* Bottom Line */}
					<motion.span
						animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
						className="w-6 h-[1px] bg-current"
					/>
				</button>
			</div>

			{/* Full Screen Mobile Menu Overlay */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{
							type: "tween" as const,
							duration: 0.4,
							ease: "circOut" as const,
						}}
						/* z-[105] sits perfectly between the Nav bar and the Buttons */
						className="fixed top-0 left-0 w-full h-[100dvh] bg-[var(--color-bg)] z-[105] flex flex-col items-center justify-center gap-10">
						{navLinks.map((link, i) => (
							<motion.a
								key={link.name}
								href={link.href}
								onClick={() => setMobileOpen(false)}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 + i * 0.1 }}
								className="text-2xl uppercase tracking-[0.3em] text-[var(--color-text)]"
								style={{ fontFamily: "var(--font-libre-baskerville)" }}>
								{link.name}
							</motion.a>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
