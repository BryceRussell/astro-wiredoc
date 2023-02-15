import type { AstroGlobal } from "astro";
import type { Link, SEOInterface } from "@/types";

export function SEODEFAULT(Astro: AstroGlobal): SEOInterface {
    if (!Astro.site) throw Error("\"src/config.ts\": No 'site' option is set in astro.config.mjs")
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

export const LEFT_NAVIGATION: Array<{
    title?: string;
    links: Link[];
    entry?: string;
}> = [
    {
        title: "Introduction",
        links: [
            { depth: 1, slug: 'getting-started', text: 'Getting Started'}
        ]
    },
    {
        title: "Guides",
        links: [

        ]
    },
    {
        title: "Reference",
        links: [

        ]
    },
    {
        entry: '3rd-party-libraries/chalk',
        links: [

        ]
    },
]
