// app/i18n/getTranslation.ts
import { translations } from "./translations";

export const t = (lang: "es" | "de" | "en", key: string) => {
	const keys = key.split("."); // e.g. "buttons.es"
	return keys.reduce((acc: any, k) => acc[k], translations[lang]);
};
