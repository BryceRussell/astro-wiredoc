import type { AstroGlobal } from "astro";
import type { SEOInterface } from "@/types";

export const SITE = 'https://localhost:3000/'

export const SEODefault = (Astro: AstroGlobal): SEOInterface => {
    if (!Astro.site) throw Error("src/config.ts SEODefault(): No 'site' option is set in astro.config.mjs")
    return {
        title: "Astro Simple Docs",
        description: "A fast and easy to use documentation template built using Astro",
        canonical: ''+(new URL(Astro.url.pathname, Astro.site)),
        openGraph: {
            basic: {
                title: "Simple Docs",
                url: ''+(new URL(Astro.url.pathname, Astro.site)),
                image: "/og.webp",
                type: "website"
            },
            optional: {
                siteName: "Astro Simple Docs",
                description: "Documentation template built using Astro"
            },
            image: {
                alt: "logo"
            }
        }
    }
}

export const Links = {
    active: { 
        class: ' active'
    },
    links: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Services',
            href: '/services'
        },
        {
            text: 'About Us',
            href: '/about-us'
        }
    ]
}