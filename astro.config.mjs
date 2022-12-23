import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug'
import remarkGemoji from 'remark-gemoji'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import oembed from 'remark-oembed';
import { defaultFrontmatter } from 'astro-default-frontmatter';
import { h } from 'hastscript'

export default defineConfig({
    site: process.env.MODE === 'development'
        ? 'https://localhost:3000/'
        : 'https://astro-simple-docs.netlify.app/',
    markdown: {
        extendDefaultPlugins: true,
        remarkPlugins: [
            [remarkGemoji, {}],
            [oembed, { syncWidget: true }],
            [defaultFrontmatter, {
                layout: "@/layouts/Markdown.astro"
            }]
        ],
        rehypePlugins: [
            [rehypeSlug, {}],
            [rehypeAutolinkHeadings, {
                behavior: 'prepend',
                test: ['h2', 'h3'],
                content: [
                    h('span.heading-link-icon', '#')
                ]
            }]
        ]
    }
});
