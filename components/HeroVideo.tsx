"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeroVideoProps {
	videoSrc: string;
	logoSrc: string;
	overlayColor?: string; // optional
}

export default function HeroVideo({
	videoSrc,
	logoSrc,
	overlayColor = "bg-black/30",
}: HeroVideoProps) {
	return (
		<section
			className="relative w-full overflow-hidden"
			style={{
				height: "100svh", // Safari/iOS safe viewport height
				minHeight: "100vh", // fallback for other browsers
			}}>
			{/* Background video */}
			<video
				autoPlay
				muted
				loop
				className="absolute inset-0 w-full h-full object-cover">
				<source src={videoSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Optional overlay */}
			<div className={`absolute inset-0 ${overlayColor}`}></div>

			{/* Logo with fade-in */}
			<div className="absolute inset-0 z-10 flex justify-center items-center">
				<motion.img
					src={logoSrc}
					alt="Logo"
					className="w-80 md:w-90 h-auto"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2, ease: "easeInOut" }}
				/>
			</div>
		</section>
	);
}
