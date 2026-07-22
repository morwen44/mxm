"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TravelTipsProps {
	travelData: any;
}

export default function TravelTips({ travelData }: TravelTipsProps) {
	const tips = travelData;
	const [isLgScreen, setIsLgScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsLgScreen(window.innerWidth >= 1024);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (!tips) return null;

	const textVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" as const },
		}),
	};

	return (
		<section className=" px-4 lg:px-32 flex flex-col items-center text-center text-[var(--color-text)] mt-30 lg:mt-120 ">
			{/* Overall Title */}
			<motion.h1
				className="uppercase text-center text-[var(--color-accent1)] text-4xl lg:text-5xl mb-20 lg:mb-100 font-bold tracking-widest"
				style={{ fontFamily: "var(--font-eb-garamond)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				custom={0}
				viewport={{ once: true }}>
				{tips.title}
			</motion.h1>

			{/* Vuelos + Hospedaje side by side on lg */}
			<div className="flex flex-col xl:flex-row w-full gap-16">
				{/* Vuelos */}
				<div className="flex-1 flex flex-col items-center max-w-2xl mx-auto px-8">
					<motion.h2
						className="text-center text-xl md:text-3xl mb-10 lg:mb-16 italic tracking-widest"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						custom={1}
						viewport={{ once: true }}>
						{tips.flights.title}
					</motion.h2>

					{/* Paragraph 1: Inline text with the bold airport name */}
					<motion.p
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						custom={2}
						viewport={{ once: true }}
						className="text-center text-[var(--color-text)] text-base lg:text-xl leading-relaxed tracking-widest mb-6"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}>
						{tips.flights.body.first}{" "}
						<span className="font-bold">{tips.flights.body.aeropuerto}</span>{" "}
						{tips.flights.body.p1}
					</motion.p>

					{/* Paragraph 2: Italic subtitle */}
					<motion.p
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						custom={3}
						viewport={{ once: true }}
						className="text-center text-[var(--color-text)] text-base lg:text-xl leading-relaxed tracking-widest italic mb-4"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}>
						{tips.flights.body.h6_1}
					</motion.p>

					{/* Paragraph 3: Taxi / Private transport */}
					<motion.p
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						custom={4}
						viewport={{ once: true }}
						className="text-center text-[var(--color-text)] text-base lg:text-xl leading-relaxed tracking-widest mb-2"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}>
						{tips.flights.body.p2}
					</motion.p>

					{/* Paragraph 4: Shuttle with smaller italic subtitle on a new line */}
					<motion.p
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						custom={5}
						viewport={{ once: true }}
						className="text-center text-[var(--color-text)] text-base lg:text-xl leading-relaxed tracking-widest mb-8"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}>
						{tips.flights.body.p3}
						<br />
						<span className="italic text-sm lg:text-base opacity-80">
							{tips.flights.body.h6_2}
						</span>
					</motion.p>

					{/* Paragraph 5: Final note */}
					<motion.p
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						custom={6}
						viewport={{ once: true }}
						className="text-center text-[var(--color-text)] text-base lg:text-xl leading-relaxed tracking-widest"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}>
						{tips.flights.body.last}
					</motion.p>
				</div>

				{/* Hospedaje */}
				<div className="flex-1 flex flex-col items-center max-w-2xl mx-auto">
					<motion.h2
						className="text-center text-xl md:text-3xl mb-10 lg:mb-20 italic tracking-widest"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						custom={isLgScreen ? 1 : 10}
						viewport={{ once: true }}>
						{tips.accommodation.title}
					</motion.h2>

					<motion.p
						className="text-center text-[var(--color-text)] text-base lg:text-xl leading-relaxed whitespace-pre-line tracking-widest px-8"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						custom={isLgScreen ? 2 : 11}
						viewport={{ once: true }}>
						{tips.accommodation.body}
					</motion.p>

					{/* ROW 1: Regular Hotels / Hostels (Balanced Columns) */}
					<div className="flex flex-col lg:flex-row w-full gap-16 justify-center mt-20">
						{/* Left Column: Regular Hotels */}
						<div className="flex-1 flex flex-col items-center">
							<motion.h3
								className="text-center italic text-[var(--color-text)] text-base lg:text-xl leading-relaxed whitespace-pre-line tracking-widest mb-10"
								style={{ fontFamily: "var(--font-libre-baskerville)" }}
								variants={textVariant}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								custom={isLgScreen ? 3 : 3}>
								{tips.accommodation.hotelsTitle}
							</motion.h3>

							{tips.accommodation.hotels?.map((h: any, i: number) => (
								<motion.a
									key={`hotel-${i}`}
									href={h.url}
									target="_blank"
									rel="noopener noreferrer"
									className="relative w-fit mb-3 text-[var(--color-accent2)] visited:text-[var(--color-accent3)] group z-10"
									style={{ fontFamily: "var(--font-libre-baskerville)" }}
									variants={textVariant}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									custom={isLgScreen ? i + 3 : i + 3}>
									{h.name}
									<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
								</motion.a>
							))}
						</div>

						{/* Right Column: Hostels */}
						<div className="flex-1 flex flex-col items-center">
							<motion.h3
								className="text-center italic text-[var(--color-text)] text-base lg:text-xl leading-relaxed whitespace-pre-line tracking-widest mb-10"
								style={{ fontFamily: "var(--font-libre-baskerville)" }}
								variants={textVariant}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								custom={isLgScreen ? 3 : 3}>
								{tips.accommodation.hostelsTitle}
							</motion.h3>

							{tips.accommodation.hostels?.map((h: any, i: number) => (
								<motion.a
									key={`hostel-${i}`}
									href={h.url}
									target="_blank"
									rel="noopener noreferrer"
									className="relative w-fit mb-2 text-[var(--color-accent2)] visited:text-[var(--color-accent3)] group z-10"
									style={{ fontFamily: "var(--font-libre-baskerville)" }}
									variants={textVariant}
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									custom={isLgScreen ? i + 3 : i + 3}>
									{h.name}
									<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
								</motion.a>
							))}
						</div>
					</div>

					{/* ROW 2: Discount Hotels & PDF Guide (Centered Full Width) */}
					{tips.accommodation.discountHotelsText && (
						<div className="w-full flex flex-col items-center mt-20 border-t border-[var(--color-text)] border-opacity-20 pt-16">
							{/* Explanatory Text */}
							<motion.p
								className="text-center text-sm lg:text-base leading-relaxed tracking-widest mb-6 px-4 italic opacity-80"
								style={{ fontFamily: "var(--font-libre-baskerville)" }}
								variants={textVariant}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								custom={isLgScreen ? 7 : 12}>
								{tips.accommodation.discountHotelsText}
							</motion.p>

							{/* The PDF Link */}
							<motion.a
								href="/documents/reservation-guide.pdf" // Make sure to place the PDF in your public/documents folder
								target="_blank"
								rel="noopener noreferrer"
								className="mb-10 py-3 px-8 border border-[var(--color-accent1)] text-[var(--color-accent1)] uppercase text-xs tracking-[0.2em] hover:bg-[var(--color-accent1)] hover:text-[var(--color-bg)] transition-colors duration-300 text-center"
								variants={textVariant}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								custom={isLgScreen ? 8 : 13}>
								{tips.accommodation.guideLinkText}
							</motion.a>

							{/* Discount Hotel Links Map */}
							<div className="flex flex-col items-center">
								{tips.accommodation.discountHotels?.map((h: any, i: number) => (
									<motion.a
										key={`discount-${i}`}
										href={h.url}
										target="_blank"
										rel="noopener noreferrer"
										className="relative w-fit mb-3 text-[var(--color-accent2)] visited:text-[var(--color-accent3)] group z-10"
										style={{ fontFamily: "var(--font-libre-baskerville)" }}
										variants={textVariant}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true }}
										custom={isLgScreen ? i + 9 : i + 14}>
										{h.name}
										<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
									</motion.a>
								))}
							</div>
						</div>
					)}

					{/* NEW: Airbnb Recommendation Bottom Paragraph */}
					<motion.p
						className="text-center text-[var(--color-text)] text-sm lg:text-base leading-relaxed tracking-widest mt-16 px-8 italic opacity-80"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						custom={isLgScreen ? 14 : 18}
						viewport={{ once: true }}>
						{tips.accommodation.airbnbRecommendation}
					</motion.p>
				</div>
			</div>
		</section>
	);
}
