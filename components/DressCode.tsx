"use client";
import React from "react";
// Reverted to the standard import
import { motion } from "framer-motion";

export interface PositionedImage {
	src: string;
	top: string;
	left: string;
}

export interface DressCodeProps {
	dressCodeText: {
		title: string;
		line1: string;
		description: string;
		tips: string[];
	};
	images: PositionedImage[];
}

export default function DressCode({ dressCodeText, images }: DressCodeProps) {
	const popVariant = {
		hidden: { opacity: 0, scale: 0.8, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				delay: i * 0.15,
				type: "spring",
				stiffness: 100,
				damping: 15,
			},
		}),
	};

	const textVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.2, duration: 1, ease: "easeOut" },
		}),
	};

	return (
		<section className="w-full flex flex-col xl:flex-row items-center mt-20 lg:mt-40 gap-16 px-8 md:px-16 lg:px-32">
			{/* Left Side: Image Collage */}
			<div className="w-full relative aspect-[4/5] md:aspect-[16/9] lg:aspect-[1/1] xl:w-1/2">
				{images.map((img, index) => (
					<motion.img
						key={index}
						src={img.src}
						alt={`Dress code ${index + 1}`}
						className="absolute rounded-sm object-cover w-1/2" // Fixed width back to w-1/2
						style={{
							top: img.top,
							left: img.left,
							zIndex: images.length - index,
						}}
						variants={popVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						custom={index}
					/>
				))}
			</div>

			{/* Right Side: Centered Text */}
			<div className="w-full xl:w-1/2 flex flex-col justify-center items-center text-center">
				<div className="max-w-xl">
					<motion.h2
						className="uppercase text-[var(--color-accent1)] text-4xl lg:text-5xl mb-20 font-bold tracking-[0.2em]"
						style={{ fontFamily: "var(--font-eb-garamond)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={0}>
						{dressCodeText.title}
					</motion.h2>

					<motion.p
						className="text-xl md:text-2xl mb-20 italic tracking-widest text-[var(--color-text)]"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={1}>
						{dressCodeText.line1}
					</motion.p>

					<motion.p
						className="text-base lg:text-lg leading-relaxed whitespace-pre-line tracking-widest text-[var(--color-text)] mb-12"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}
						variants={textVariant}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						custom={2}>
						{dressCodeText.description}
					</motion.p>

					<div className="flex flex-col space-y-4 items-center">
						{dressCodeText.tips.map((tip, index) => (
							<motion.p
								key={index}
								className="text-sm md:text-base italic tracking-wide opacity-80"
								style={{ fontFamily: "var(--font-libre-baskerville)" }}
								variants={textVariant}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								custom={index + 3}>
								{tip}
							</motion.p>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
