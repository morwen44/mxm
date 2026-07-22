"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhatToDo({ activitiesData }: { activitiesData: any }) {
	if (!activitiesData) return null;

	const textVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" as const },
		}),
	};

	return (
		<section className="px-8 md:px-16 lg:px-32 flex flex-col items-center text-center text-[var(--color-text)] mt-30 lg:mt-120 pb-20">
			{/* Main Title */}
			<motion.h1
				className="uppercase text-[var(--color-accent1)] text-4xl lg:text-5xl mb-20 lg:mb-100 font-bold tracking-widest"
				style={{ fontFamily: "var(--font-eb-garamond)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={0}>
				{activitiesData.title}
			</motion.h1>

			{/* Two Halves Container */}
			<div className="flex flex-col lg:flex-row w-full gap-16 lg:gap-32 justify-center mt-10">
				{/* LEFT HALF: Recomendaciones (Cafes/Restaurants) */}
				<div className="flex-1 flex flex-col items-center max-w-md mx-auto">
					<motion.h2
						className="text-xl md:text-3xl mb-12 italic tracking-widest"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={1}>
						{activitiesData.recomendacionesTitle}
					</motion.h2>

					{activitiesData.recomendaciones?.map((rec: any, i: number) => (
						<React.Fragment key={`rec-${i}`}>
							<div className="flex flex-col items-center">
								<motion.a
									href={rec.url}
									target="_blank"
									rel="noopener noreferrer"
									className="relative w-fit mb-4 text-[var(--color-accent2)] visited:text-[var(--color-accent3)] group z-10 text-lg lg:text-xl font-bold tracking-widest"
									style={{ fontFamily: "var(--font-libre-baskerville)" }}
									variants={textVariant}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									custom={i + 2}>
									{rec.name}
									<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
								</motion.a>

								<motion.p
									className="text-base lg:text-lg leading-relaxed tracking-widest"
									style={{ fontFamily: "var(--font-libre-baskerville)" }}
									variants={textVariant}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									custom={i + 2}>
									{rec.description}
								</motion.p>
							</div>

							{i !== activitiesData.recomendaciones.length - 1 && (
								<motion.div
									className="w-[20px] h-[1px] bg-[var(--color-text)] opacity-40 my-8"
									variants={textVariant}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									custom={i + 2}
								/>
							)}
						</React.Fragment>
					))}
				</div>

				{/* RIGHT HALF: Actividades (In-City Niche) */}
				<div className="flex-1 flex flex-col items-center max-w-md mx-auto">
					<motion.h2
						className="text-xl md:text-3xl mb-12 italic tracking-widest"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={1}>
						{activitiesData.activitiesTitle}
					</motion.h2>

					{activitiesData.activities?.map((activity: string, i: number) => (
						<React.Fragment key={`act-${i}`}>
							<motion.p
								className="text-base lg:text-lg leading-relaxed tracking-widest"
								style={{ fontFamily: "var(--font-libre-baskerville)" }}
								variants={textVariant}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								custom={i + 2}>
								{activity}
							</motion.p>

							{i !== activitiesData.activities.length - 1 && (
								<motion.div
									className="w-[20px] h-[1px] bg-[var(--color-text)] opacity-40 my-8"
									variants={textVariant}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									custom={i + 2}
								/>
							)}
						</React.Fragment>
					))}
				</div>
			</div>

			{/* BOTTOM EXTRA: Tuxtla section */}
			{activitiesData.extraTuxtla && (
				<div className="w-full max-w-3xl mt-24 lg:mt-40 flex flex-col items-center">
					{/* Small aesthetic separator */}

					<motion.h2
						className="text-2xl md:text-3xl mb-4 italic tracking-widest text-[var(--color-accent1)]"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={6}>
						{activitiesData.extraTuxtla.title}
					</motion.h2>

					<motion.p
						className="text-sm md:text-base opacity-70 mb-12 uppercase tracking-widest text-center px-4"
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={7}>
						{activitiesData.extraTuxtla.note}
					</motion.p>

					<div className="flex flex-col gap-10 items-center">
						{activitiesData.extraTuxtla.items?.map((item: any, i: number) => (
							<React.Fragment key={`extra-${i}`}>
								<div className="flex flex-col items-center">
									<motion.h3
										className="text-lg lg:text-xl font-bold tracking-widest mb-4 text-[var(--color-text)]"
										style={{ fontFamily: "var(--font-libre-baskerville)" }}
										variants={textVariant}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										custom={i + 8}>
										{item.title}
									</motion.h3>
									<motion.p
										className="text-base lg:text-lg leading-relaxed tracking-widest"
										style={{ fontFamily: "var(--font-libre-baskerville)" }}
										variants={textVariant}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										custom={i + 8}>
										{item.description}
									</motion.p>
								</div>
								{i !== activitiesData.extraTuxtla.items.length - 1 && (
									<motion.div
										className="w-[20px] h-[1px] bg-[var(--color-text)] opacity-40 my-2"
										variants={textVariant}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										custom={i + 8}
									/>
								)}
							</React.Fragment>
						))}
					</div>
				</div>
			)}
		</section>
	);
}
