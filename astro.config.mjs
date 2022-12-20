import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { defaultFrontmatter } from 'astro-default-frontmatter';
import { h } from 'hastscript'

export default defineConfig({
    site: process.env.DEV
        ? 'https://localhost:3000/'
        : 'https://localhost:3000/',
    markdown: {
        extendDefaultPlugins: true,
        remarkPlugins: [
            [ defaultFrontmatter, {
                layout: "@/layouts/Markdown.astro"
            }]
        ],
        rehypePlugins: [
            [rehypeSlug, {}],
            [rehypeAutolinkHeadings, {
                behavior: 'prepend',
                test: ['h2', 'h3', 'h4', 'h5', 'h6'],
                content: [
                    h('span.heading-link-icon', '#')
                ]
            }]
        ]
    }
});
