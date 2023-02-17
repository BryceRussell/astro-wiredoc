import type { AstroGlobal } from "astro";
import type { IconLink, SEOInterface, SidebarConfig } from "@/types";

export const GITHUB_REPO = "https://github.com/BryceRussell/astro-simple-docs";

export const SOCIAL_ICONS: IconLink[] = [
    { title: 'Github', icon: 'mdi:github', color: 'var(--darker)', href: '' },
    { title: 'Discord', icon: 'ic:baseline-discord', color: '#7289da', href: '' },
    { title: 'Youtube', icon: 'mdi:youtube', color: 'red', href: '' },
    { title: 'Twitter', icon: 'mdi:twitter', color: '#1DA1F2', href: '' },
    { title: 'Mastadon', icon: 'mdi:mastodon', color: '#6364ff', href: '' },
    { title: 'Open Collective', icon: 'gg:open-collective', color: '#447bf9', href: '' }
]

export const LEFT_NAVIGATION: SidebarConfig = [
    {
        title: "Introduction",
        links: [
            { depth: 1, text: 'Why?', href: '/why', slug: '',},
            { depth: 1, text: 'Getting Started', href: '/getting-started', slug: ''},
            { depth: 1, text: 'Installation', href: '/installation', slug: ''}
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
            { depth: 1, text: 'API', href: '/reference/api', slug: ''}
        ]
    },
    {   
        title: 'Test Auto Headings',
        entry: '3rd-party-libraries/chalk',
        links: [

        ]
    },
]

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
