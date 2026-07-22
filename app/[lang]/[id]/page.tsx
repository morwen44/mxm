import React from "react";
import { translations } from "../../../i18n/translations";
import Navbar from "../../../components/Navbar";
import HeroVideo from "../../../components/HeroVideo";
import Invitation from "../../../components/Invitation";
import DressCode from "../../../components/DressCode";
import TravelTips from "../../../components/TravelTips";
import WhatToDo from "../../../components/WhatToDo";
import FAQ from "../../../components/FAQ";
import RSVP from "../../../components/RSVP";
import Registry from "../../../components/Registry";

// 1. Import the mock database function
import { getGuestFromSheet } from "../../../lib/googleSheets";

// Next.js gives us the URL parameters (e.g., "es" and "LIND88") via the `params` prop
export default async function LocalizedHomePage({
	params,
}: {
	params: Promise<{ lang: string; id: string }>; // Added 'id' here to catch the URL code
}) {
	// Await the params to get both lang and the guest ID
	const { lang, id } = await params;

	// Ensure the language exists in your translations
	const currentLang = lang as keyof typeof translations;
	const data = translations[currentLang];

	if (!data) {
		return <div>Language not supported</div>;
	}

	// 2. The VIP Logic: We fetch the guest data from the mock database using the ID
	const guestData = await getGuestFromSheet(id);

	// 3. Security Check: If they type a fake ID, show an error screen instead of the website
	if (!guestData) {
		return (
			<div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col items-center justify-center">
				<h1
					className="text-3xl font-bold tracking-widest uppercase mb-4 text-[var(--color-accent1)]"
					style={{ fontFamily: "var(--font-eb-garamond)" }}>
					Enlace Inválido / Invalid Link
				</h1>
				<p
					className="opacity-70 text-center px-8"
					style={{ fontFamily: "var(--font-libre-baskerville)" }}>
					Por favor revisa el enlace que te enviamos o contacta a los novios.{" "}
					<br />
					Please check the link provided or contact the couple.
				</p>
			</div>
		);
	}
	const firstName = guestData.mainName.split(" ")[0];
	// Now use 'data' and 'guestData' to populate your components
	return (
		<div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
			<Navbar navData={data.nav} lang={lang} />
			<HeroVideo videoSrc="/videos/hero.mp4" logoSrc="/images/logo.png" />

			{/* Passed the guestName here for the VIP greeting */}
			<Invitation invitationText={data.invitation} guestName={firstName} />

			<section id="travel">
				<TravelTips travelData={data.travelTips} />
				<WhatToDo activitiesData={data.whatToDo} />
			</section>

			<section id="dress-code">
				<DressCode
					dressCodeText={data.dressCode}
					images={[
						{ src: "/images/dc1.png", top: "10%", left: "55%" },
						{ src: "/images/dc2.png", top: "23%", left: "2%" },
						{ src: "/images/dc3.png", top: "38%", left: "35%" },
						{ src: "/images/dc4.png", top: "10%", left: "55%" },
						{ src: "/images/dc5.png", top: "20%", left: "5%" },
					]}
				/>
			</section>

			{/* Passed the guestData here so the form knows how many people to ask for */}
			<RSVP rsvpData={data.rsvp} guestData={guestData} />

			<Registry registryData={data.registry} />

			<section id="faq">
				<FAQ faqData={data.faq} />
			</section>
		</div>
	);
}
