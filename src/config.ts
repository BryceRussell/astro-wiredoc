import type { AstroGlobal } from "astro";
import type { SEOInterface } from "@/types";

export const SITE = 'https://astro-simple-docs.netlify.app/'

export function SEODefault(Astro: AstroGlobal): SEOInterface {
    if (!Astro.site) throw Error("src/config.ts SEODefault(): No 'site' option is set in astro.config.mjs")
    return {
        title: "Astro Simple Docs",
        description: "A fast and easy to use documentation template built using Astro",
        canonical: ''+(new URL(Astro.url.pathname, Astro.site)),
        openGraph: {
            basic: {
                title: "astro-simple-docs",
                url: ''+(new URL(Astro.url.pathname, Astro.site)),
                image: "/og.webp",
                type: "website"
            },
            optional: {
                siteName: "Astro Simple Docs",
                description: "An easy to use documentation template built using Astro"
            },
            image: {
                alt: "logo"
            }
        }
    }
}