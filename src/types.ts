import type { VFile, Data } from 'vfile';
import type { MarkdownHeading } from 'astro';
import type { HTMLAttributes } from 'astro/types';

// Utility types

export type Rename<T, K extends keyof T, N extends string> = Pick<T, Exclude<keyof T, K>> & { [P in N]: T[K] }

export interface Tree<T> {
    [key: string]: Tree<T> | T;
}

// Configuration Types

export interface Link extends MarkdownHeading, HTMLAttributes<'a'> {};
export interface IconLink extends HTMLAttributes<'a'> {
    icon: string;
    color?: string;
};

export interface DETAILS_COMMON extends Omit<HTMLAttributes<'details'>, 'slot'> {
    title?: string;
    url?: string;
    depth?: number;
    max?: number;
    link?: boolean;
}

type DETAILS_OPTIONAL =
    | { headings: Link[]; }
    | { entry: string; }

export type DETAILS = DETAILS_COMMON & DETAILS_OPTIONAL


export type SidebarConfig = SidebarDropdown[];
export type SidebarOptional =
    | { links: Link[]; }
    | { entry: string; }
    | { glob: string; }

export type SidebarDropdown = DETAILS_COMMON & SidebarOptional

// Page Types

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