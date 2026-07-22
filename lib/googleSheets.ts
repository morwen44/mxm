// lib/googleSheets.ts
import { google } from "googleapis";

export interface GuestData {
	id: string;
	language: string;
	mainName: string;
	maxPasses: number;
	specificNames: string[];
	status: string;
}

// 1. PERFORMANCE FIX: We move the authentication OUTSIDE the function.
// Now, the server logs into Google once when it starts, instead of every time a guest clicks a link.
const auth = new google.auth.GoogleAuth({
	credentials: {
		client_email: process.env.GOOGLE_CLIENT_EMAIL,
		private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
	},
	scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function getGuestFromSheet(id: string): Promise<GuestData | null> {
	try {
		// 2. We jump straight to fetching the data because we are already logged in
		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: "Sheet1!A:F",
		});

		const rows = response.data.values;

		if (!rows || rows.length === 0) {
			return null;
		}

		const targetId = id.toUpperCase();

		for (let i = 1; i < rows.length; i++) {
			const row = rows[i];

			if (row[0] && row[0].toUpperCase() === targetId) {
				return {
					id: row[0],
					language: row[1],
					mainName: row[2],
					maxPasses: parseInt(row[3], 10) || 1,
					specificNames: row[4]
						? row[4].split(",").map((name: string) => name.trim())
						: [],
					status: row[5] || "Pending",
				};
			}
		}

		return null;
	} catch (error) {
		console.error("Error fetching from Google Sheets:", error);
		return null;
	}
}
