"use client";

import { useState, useCallback } from "react";
import en from "./locales/en.json";
import es from "./locales/es.json";

type Locale = "en" | "es";
const translations = { en, es };

export function useTranslation() {
    const [locale, setLocale] = useState<Locale>("en");

    const t = useCallback(
        (key: string) => {
            const keys = key.split(".");
            let result: any = translations[locale];

            for (const k of keys) {
                if (result[k]) {
                    result = result[k];
                } else {
                    return key; // Fallback to key name if not found
                }
            }
            return result;
        },
        [locale]
    );

    return { t, locale, setLocale };
}
