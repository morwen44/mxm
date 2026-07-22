"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ({ faqData }: { faqData: any }) {
	// Tracks which specific question is open. Format: "categoryIndex-itemIndex"
	const [activeId, setActiveId] = useState<string | null>(null);

	const toggleAccordion = (id: string) => {
		setActiveId(activeId === id ? null : id);
	};

	const textVariant = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	return (
		<section className="px-8 md:px-16 lg:px-32 flex flex-col items-center text-[var(--color-text)]  mt-30 lg:mt-120">
			<motion.h1
				className="uppercase text-[var(--color-accent1)] text-4xl lg:text-5xl mb-20 font-bold tracking-widest  mb-20 lg:mb-30 text-center"
				style={{ fontFamily: "var(--font-eb-garamond)" }}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={textVariant}>
				{faqData.title}
			</motion.h1>

			<div className="w-full max-w-3xl space-y-16">
				{faqData.sections.map((section: any, sIdx: number) => (
					<div key={sIdx} className="flex flex-col items-center">
						{/* Category Title */}
						<motion.h2
							className="text-2xl italic mb-8 tracking-widest text-[var(--color-accent1)]"
							style={{ fontFamily: "var(--font-libre-baskerville)" }}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={textVariant}>
							{section.category}
						</motion.h2>

						{/* Accordion Items */}
						<div className="w-full border-t border-[var(--color-text)] border-opacity-20">
							{section.items.map((item: any, iIdx: number) => {
								const id = `${sIdx}-${iIdx}`;
								const isOpen = activeId === id;

								return (
									<div
										key={id}
										className="border-b border-[var(--color-text)] border-opacity-10">
										<button
											onClick={() => toggleAccordion(id)}
											className="w-full py-6 flex justify-between items-center text-left group transition-all">
											<span
												className={`text-lg lg:text-xl tracking-wide transition-colors duration-300 ${isOpen ? "text-[var(--color-accent2)]" : "group-hover:text-[var(--color-accent2)]"}`}
												style={{ fontFamily: "var(--font-libre-baskerville)" }}>
												{item.q}
											</span>

											{/* Minimalist Plus/Minus Icon */}
											<motion.span
												animate={{ rotate: isOpen ? 45 : 0 }}
												className="text-2xl ml-4 text-[var(--color-accent2)]">
												+
											</motion.span>
										</button>

										<AnimatePresence>
											{isOpen && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: "auto", opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.3, ease: "easeInOut" }}
													className="overflow-hidden">
													<div className="pb-8">
														<p
															className="text-base lg:text-lg leading-relaxed opacity-80 whitespace-pre-line"
															style={{
																fontFamily: "var(--font-libre-baskerville)",
															}}>
															{item.a}
														</p>

														{/* THE LIVE MAP EMBED */}
														{item.mapEmbed && (
															<div className="mt-6 w-full aspect-video rounded-sm overflow-hidden grayscale-[20%] contrast-[1.1]">
																<iframe
																	src={item.mapEmbed}
																	width="100%"
																	height="100%"
																	style={{ border: 0 }}
																	allowFullScreen
																	loading="lazy"
																	referrerPolicy="no-referrer-when-downgrade"
																	title="Venue Location"></iframe>
															</div>
														)}
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								);
							})}
						</div>

						{/* 20px Separator between sections */}
						<div className="w-[20px] h-[1px] bg-[var(--color-text)] opacity-40 mt-16" />
					</div>
				))}
			</div>
		</section>
	);
}
