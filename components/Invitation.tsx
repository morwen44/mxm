"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface InvitationProps {
	invitationText: {
		line1: string;
		line2: string;
		line3: string;
		line4: string;
		line5: string;
		line6: string;
		line7: string;
		rsvp: string;
	};
	guestName: string; // Added this prop
}

export default function Invitation({
	invitationText,
	guestName,
}: InvitationProps) {
	const inv = invitationText;

	const textVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
				duration: 1,
				ease: "easeOut" as const,
			},
		}),
	};

	return (
		<section
			id="invitation"
			className="flex flex-col items-center justify-center mt-32 mb-16 px-6">
			<motion.div
				className="mb-20 w-full max-w-2xl rounded-lg overflow-hidden "
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.2, ease: "easeOut" }}>
				<Image
					src="/images/invitation.png"
					alt="Boda Invitación"
					width={800}
					height={1000}
					className="w-full h-auto p-4"
					priority
				/>
			</motion.div>

			<motion.h2
				className="uppercase tracking-[0.2em] mb-10 text-xs lg:text-xl text-center px-4 text-[var(--color-accent1)]"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				custom={0}
				viewport={{ once: true }}>
				{guestName}
			</motion.h2>

			{/* Line 1: Intro - Note we increased the 'custom' index for the following lines to keep the sequence */}
			<motion.p
				className="italic tracking-widest text-center mb-10 text-base lg:text-lg text-[var(--color-text)]"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				custom={1}
				viewport={{ once: true }}>
				{inv.line1}
			</motion.p>

			{/* Line 2: The Action */}
			<motion.p
				className="uppercase tracking-[0.2em] mb-10 text-xs lg:text-xl text-center px-4 text-[var(--color-text)]"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				custom={2}
				viewport={{ once: true }}>
				{inv.line2}
			</motion.p>

			{/* Line 3: The Date */}
			<motion.p
				className="uppercase mb-10 text-3xl lg:text-6xl text-center tracking-[0.3em] text-[var(--color-text)]"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				custom={3}
				viewport={{ once: true }}>
				{inv.line3}
			</motion.p>

			{/* Line 4: The Venue */}
			<motion.h2
				className="uppercase text-center text-[var(--color-accent1)] text-3xl lg:text-5xl mb-10 font-bold tracking-[0.2em]"
				style={{ fontFamily: "var(--font-eb-garamond)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				custom={4}
				viewport={{ once: true }}>
				{inv.line4}
			</motion.h2>

			{/* Line 5: Location */}
			<motion.p
				className="uppercase text-center text-[var(--color-text)] mb-10 tracking-widest text-xs lg:text-xl"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				custom={5}
				viewport={{ once: true }}>
				{inv.line5}
			</motion.p>

			{/* Line 6: Time */}
			<motion.p
				className="uppercase text-center text-[var(--color-text)] mb-10 text-xl lg:text-2xl font-bold tracking-widest"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				custom={6}
				viewport={{ once: true }}>
				{inv.line6}
			</motion.p>

			{/* Line 7: Post-reception info */}
			<motion.p
				className="italic text-center mb-16 tracking-widest text-xs lg:text-lg text-[var(--color-text)]"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}
				variants={textVariant}
				initial="hidden"
				whileInView="visible"
				custom={7}
				viewport={{ once: true }}>
				{inv.line7}
			</motion.p>

			{/* RSVP Button */}
			<motion.a
				href="#rsvp"
				className="py-4 px-10 bg-[var(--color-accent1)] text-[var(--color-bg)] uppercase rounded-sm hover:scale-105 transition-transform duration-300 tracking-[0.2em] text-sm font-bold shadow-md"
				style={{ fontFamily: "var(--font-libre-baskerville)" }}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 1.6 }}
				viewport={{ once: true }}>
				{inv.rsvp}
			</motion.a>
		</section>
	);
}
