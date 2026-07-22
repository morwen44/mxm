"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Registry({ registryData }: { registryData: any }) {
	if (!registryData) return null;

	const fadeVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
		}),
	};

	return (
		/* Added bg-[var(--color-accent3)] and vertical padding (py-24) */
		<section
			id="registry"
			className="w-full bg-[var(--color-accent3)] py-24 px-8 md:px-16 lg:px-32 flex flex-col items-center text-center text-[var(--color-text)]  mt-30 lg:mt-100 lg:py-100">
			{/* 1. ALL CAPS intro */}
			<motion.p
				variants={fadeVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={0}
				className="uppercase text-sm md:text-base tracking-[0.25em] leading-loose whitespace-pre-line opacity-90"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}>
				{registryData.intro}
			</motion.p>

			{/* 2. Main Description */}
			<motion.p
				variants={fadeVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={1}
				className="text-base lg:text-xl leading-relaxed tracking-widest max-w-3xl mt-24 mb-24"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}>
				{registryData.description}
			</motion.p>

			{/* 3. Title LUNA DE MIEL */}
			<motion.h2
				variants={fadeVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={2}
				className="uppercase text-[var(--color-text)] text-2xl md:text-3xl mb-12 font-bold tracking-[0.15em]"
				style={{ fontFamily: "var(--font-eb-garamond)" }}>
				{registryData.fundTitle}
			</motion.h2>

			{/* 4. The Link: Styled as a bordered button */}
			<motion.a
				href={registryData.fundLinkUrl}
				target="_blank"
				rel="noopener noreferrer"
				variants={fadeVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={3}
				className="py-4 px-10 border border-[var(--color-accent2)] text-[var(--color-bg)] uppercase text-xs md:text-sm tracking-[0.2em] hover:bg-[var(--color-accent2)] hover:text-[var(--color-bg)] transition-colors duration-300 text-center font-bold"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}>
				{registryData.fundLinkLabel}
			</motion.a>

			{/* 5. The Image */}
			<motion.div
				variants={fadeVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={4}
				/* 1. Use the exact pixel width of your image to prevent stretching */
				/* 2. mx-auto keeps it centered in the section */
				className="w-[117px] h-[163px] mt-24 mx-auto relative group">
				<Image
					src="/images/registry.png"
					alt="Wedding registry icon"
					/* 3. Providing the exact dimensions here ensures no warping */
					width={117}
					height={163}
					className="w-full h-full object-contain"
				/>
			</motion.div>
		</section>
	);
}
