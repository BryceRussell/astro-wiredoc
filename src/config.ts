import type { AstroGlobal } from "astro";
import type { IconLink, SEOInterface, SidebarConfig } from "@/types";

export const GITHUB_REPO = "https://github.com/BryceRussell/astro-simple-docs";

export function SEODEFAULT(Astro: AstroGlobal): SEOInterface {
    if (!Astro.site) throw Error("\"src/config.ts\": No 'site' option is set in astro.config.mjs")
    return {
        title: "Astro WireDoc",
        description: "A wireframe documentation template created using Astro",
        canonical: ''+(new URL(Astro.url.pathname, Astro.site)),
        openGraph: {
            basic: {
                title: "WireDoc",
                url: ''+(new URL(Astro.url.pathname, Astro.site)),
                image: "/og.webp",
                type: "website"
            },
            optional: {
                siteName: "Astro WireDoc",
                description: "A wireframe documentation template created using Astro"
            },
            image: {
                alt: "Astro WireDoc"
            }
        }
    }
}

export const SOCIAL_ICONS: IconLink[] = [
    { title: 'Github', icon: 'mdi:github', color: 'var(--darker)', href: GITHUB_REPO },
    { title: 'Discord', icon: 'ic:baseline-discord', color: '#7289da', href: '#' },
    { title: 'Youtube', icon: 'mdi:youtube', color: 'red', href: '#' },
    { title: 'Twitter', icon: 'mdi:twitter', color: '#1DA1F2', href: '#' },
    { title: 'Mastadon', icon: 'mdi:mastodon', color: '#6364ff', href: '#' },
    { title: 'Open Collective', icon: 'gg:open-collective', color: '#447bf9', href: '#' }
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
            { depth: 1, text: 'Configuration', href: '/reference/configuration', slug: ''},
            { depth: 1, text: 'API', href: '/reference/api', slug: ''}
        ]
    },
    {
        title: "Tests",
        links: [

        ]
    },
    {   
        title: 'Auto Headings',
        entry: '3rd-party-libraries/kleur',
        links: [

        ]
    },
]
