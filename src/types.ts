import type { VFile, Data } from 'vfile';
import type { MarkdownHeading } from 'astro';
import type { HTMLAttributes } from 'astro/types';

export interface Link extends MarkdownHeading, HTMLAttributes<'a'> {};

export interface DETAILS extends HTMLAttributes<'details'> {
    title?: string;
    url?: string;
    headings: Array<Link>;
    depth?: number;
    max?: number;
    entry?: string;
}

export type Sidebar = SidebarDetails[];
export interface SidebarDetails extends Omit<DETAILS, 'headings'> {
    links?: SidebarLink[]
}
export interface SidebarLink extends Omit<Link, 'slug'>{
    slug?: string;
};

export interface SEOInterface {
    title?: string;
    description?: string;
    canonical?: string;
    nofollow?: boolean;
    noindex?: boolean;
    openGraph?: {
        basic: {
            title: string;
            type: string;
            image: string;
            url?: string;
        };
        optional?: {
            audio?: string;
            description?: string;
            determiner?: string;
            locale?: string;
            localeAlternate?: string[];
            siteName?: string;
            video?: string;
        };
        image?: {
            url?: string;
            secureUrl?: string;
            type?: string;
            width?: number;
            height?: number;
            alt?: string;
        };
            article?: {
            publishedTime?: string;
            modifiedTime?: string;
            expirationTime?: string;
            authors?: string[];
            section?: string;
            tags?: string[];
        };
    };
    twitter?: {
        card?: string;
        site?: string;
        creator?: string;
    };
    extend?: {
        link?: Partial<HTMLAttributes<'link'>>[];
        meta?: Partial<HTMLAttributes<'meta'>>[];
    };
};

export type AstroVFile = VFile & {
    data: Data & {
        astro: {
            frontmatter: Record<string, unknown>;
        }
    }
}