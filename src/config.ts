import type { AstroGlobal } from "astro";
import type { IconLink, SEOInterface, SidebarConfig } from "@/types";

export const GITHUB_REPO = "https://github.com/BryceRussell/astro-wiredoc";

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

export const LEFT_NAVIGATION: SidebarConfig = [
    {
        title: "Introduction",
        glob: 'introduction/**'
    },
    {
        title: "Guides",
        glob: 'guides/**'
    },
    {
        title: "Reference",
        glob: 'reference/**'
    },
    {
        title: "Tests",
        glob: 'test/**'
    },
    {   
        title: 'Generate From Page Headings',
        entry: 'test/3rd-party-libraries/kleur'
    },
    {
        title: 'Manually Create Links',
        links: [
            {depth: 1, href: '#', slug: '', text: 'This link was manually set in config'}
        ]
    }
]

export const SOCIAL_ICONS: IconLink[] = [
    { title: 'Github', icon: 'mdi:github', color: 'var(--darker)', href: GITHUB_REPO },
    { title: 'Discord', icon: 'ic:baseline-discord', color: '#7289da', href: '#' },
    { title: 'Youtube', icon: 'mdi:youtube', color: 'red', href: '#' },
    { title: 'Twitter', icon: 'mdi:twitter', color: '#1DA1F2', href: '#' },
    { title: 'Mastadon', icon: 'mdi:mastodon', color: '#6364ff', href: '#' },
    { title: 'Open Collective', icon: 'gg:open-collective', color: '#447bf9', href: '#' }
]
