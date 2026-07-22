"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GuestData } from "../lib/googleSheets";

export default function RSVP({
	rsvpData,
	guestData,
}: {
	rsvpData: any;
	guestData: GuestData;
}) {
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");

	const [attendance, setAttendance] = useState<string>("yes");
	const [attendees, setAttendees] = useState<
		{ name: string; attending: boolean; isFixed: boolean }[]
	>([]);
	const [dietaryNotes, setDietaryNotes] = useState("");
	const [message, setMessage] = useState("");

	// Get just the first name for the personal greeting
	const firstName = guestData.mainName.split(" ")[0];

	useEffect(() => {
		if (guestData) {
			const initialList = [];
			guestData.specificNames.forEach((name) => {
				initialList.push({ name, attending: true, isFixed: true });
			});

			const remainingSlots =
				guestData.maxPasses - guestData.specificNames.length;
			for (let i = 0; i < remainingSlots; i++) {
				initialList.push({ name: "", attending: false, isFixed: false });
			}
			setAttendees(initialList);
		}
	}, [guestData]);

	const handleAttendeeToggle = (index: number) => {
		const newList = [...attendees];
		newList[index].attending = !newList[index].attending;
		setAttendees(newList);
	};

	const handlePlusOneName = (index: number, name: string) => {
		const newList = [...attendees];
		newList[index].name = name;
		setAttendees(newList);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("sending");

		const finalData = {
			guestId: guestData.id,
			mainName: guestData.mainName,
			attendance,
			attendees: attendees.filter((a) => a.attending),
			dietaryNotes,
			message,
		};

		try {
			const scriptURL = process.env.NEXT_PUBLIC_RSVP_SCRIPT_URL;

			if (!scriptURL) {
				throw new Error("RSVP Script URL is missing in .env.local");
			}

			await fetch(scriptURL, {
				method: "POST",
				mode: "no-cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(finalData),
			});

			setStatus("success");
		} catch (error) {
			console.error("Submission error:", error);
			setStatus("error");
		}
	};

	if (status === "success") {
		return (
			<section
				id="rsvp"
				className="py-32 px-8 text-center flex flex-col items-center">
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-3xl lg:text-5xl text-[var(--color-accent1)] font-bold mb-6"
					style={{ fontFamily: "var(--font-eb-garamond)" }}>
					{rsvpData.success}
				</motion.h2>
			</section>
		);
	}

	return (
		<section
			id="rsvp"
			className="w-full py-32 px-8 md:px-16 lg:px-32 flex flex-col items-center text-[var(--color-text)] mt-30 lg:mt-120">
			<motion.h1
				className="uppercase text-[var(--color-accent1)] text-4xl lg:text-5xl mb-20 lg:mb-30 font-bold tracking-widest text-center"
				style={{ fontFamily: "var(--font-eb-garamond)" }}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}>
				{/* Personal Greeting + Title from Translation */}
				{rsvpData.greeting}, {firstName}
				<br /> {rsvpData.title}
			</motion.h1>

			<form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-12">
				<div className="flex flex-col items-center">
					<label className="mb-6 text-sm uppercase tracking-widest opacity-70 text-center">
						{rsvpData.attendanceLabel}
					</label>
					<div className="flex gap-12">
						<label className="flex items-center cursor-pointer gap-3 group">
							<input
								type="radio"
								name="attendance"
								value="yes"
								checked={attendance === "yes"}
								onChange={(e) => setAttendance(e.target.value)}
								className="accent-[var(--color-accent1)] w-5 h-5"
							/>
							<span
								className="text-xl group-hover:text-[var(--color-accent1)] transition-colors"
								style={{ fontFamily: "var(--font-libre-baskerville)" }}>
								{rsvpData.yesOption}
							</span>
						</label>
						<label className="flex items-center cursor-pointer gap-3 group">
							<input
								type="radio"
								name="attendance"
								value="no"
								checked={attendance === "no"}
								onChange={(e) => setAttendance(e.target.value)}
								className="accent-[var(--color-accent1)] w-5 h-5"
							/>
							<span
								className="text-xl group-hover:text-[var(--color-accent1)] transition-colors"
								style={{ fontFamily: "var(--font-libre-baskerville)" }}>
								{rsvpData.noOption}
							</span>
						</label>
					</div>
				</div>

				<AnimatePresence>
					{attendance === "yes" && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							className="space-y-12 overflow-hidden  pt-12">
							<div className="space-y-6">
								<label className="text-sm uppercase tracking-widest opacity-70 block mb-4">
									{rsvpData.confirmAttendeesLabel}
								</label>
								{attendees.map((person, index) => (
									<div
										key={index}
										className="flex items-center gap-6 bg-white bg-opacity-5 p-4 rounded-sm">
										<input
											type="checkbox"
											checked={person.attending}
											onChange={() => handleAttendeeToggle(index)}
											className="w-6 h-6 accent-[var(--color-accent1)] cursor-pointer"
										/>

										{person.isFixed ? (
											<span className="text-lg opacity-90">{person.name}</span>
										) : (
											<input
												type="text"
												placeholder={rsvpData.plusOnePlaceholder}
												value={person.name}
												onChange={(e) =>
													handlePlusOneName(index, e.target.value)
												}
												className="bg-transparent border-b border-white border-opacity-20 flex-1 py-1 focus:border-[var(--color-accent1)] outline-none transition-colors"
											/>
										)}
									</div>
								))}
							</div>

							<div className="flex flex-col">
								<label className="mb-2 text-sm uppercase tracking-widest opacity-70">
									{rsvpData.dietaryLabel}
								</label>
								<textarea
									value={dietaryNotes}
									onChange={(e) => setDietaryNotes(e.target.value)}
									rows={2}
									className="bg-transparent border-b border-[var(--color-text)] border-opacity-30 py-2 outline-none resize-none focus:border-[var(--color-accent1)]"
								/>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<div className="flex flex-col">
					<label className="mb-2 text-sm uppercase tracking-widest opacity-70">
						{rsvpData.messageLabel}
					</label>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						rows={3}
						className="bg-transparent border-b border-[var(--color-text)] border-opacity-30 py-2 outline-none resize-none focus:border-[var(--color-accent1)]"
					/>
				</div>

				<div className="pt-8 flex justify-center flex-col items-center gap-4">
					<button
						disabled={status === "sending"}
						type="submit"
						className="py-4 px-12 bg-[var(--color-accent1)] text-[var(--color-bg)] uppercase rounded-sm hover:scale-105 transition-all duration-300 tracking-[0.2em] text-sm font-bold shadow-md disabled:opacity-50"
						style={{ fontFamily: "var(--font-libre-baskerville)" }}>
						{status === "sending" ? rsvpData.sending : rsvpData.submitButton}
					</button>

					{status === "error" && (
						<p className="text-red-400 text-sm">{rsvpData.error}</p>
					)}
				</div>
			</form>
		</section>
	);
}
