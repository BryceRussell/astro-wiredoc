import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import h from 'hastscript'
import rehypeSlug from 'rehype-slug'
import remarkGemoji from 'remark-gemoji'
import oembed from 'remark-oembed';
import { autoTitle } from 'astro-auto-title';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export default defineConfig({
    site: process.env.MODE === 'development'
        ? 'https://localhost:3000/'
        : 'https://astro-wiredoc.app/',
    integrations: [
        NetlifyCMS({
            config: {
                backend: {
                    name: 'git-gateway',
                    branch: 'master'
                },
                slug: {
                    encoding: "ascii",
                    clean_accents: true
                },
                collections: [{
                    folder: "src/content/ntation",
                    label: "Documentation",
                    description: "This is a description",
                    label_singular: "Page",
                    summary: "/{{dirname}} - {{title}}",
                    extension: "md",
                    format: "frontmatter",
                    media_folder: "/public/docs/{{dirname}}",
                    public_folder: "/docs/{{dirname}}",
                    preview_path: "/docs/{{dirname}}",
                    create: true,
                    delete: true,
                    nested: {
                        depth: 8,
                        summary: "{{title}}"
                    },
                    fields: [
                        { name: "draft", widget: "boolean", label: "Draft", default: false, required: false },
                        { name: "pubDate", widget: "date", label: "Publish Date" },
                        { name: "title", widget: "string", label: "Title" },
                        { name: "tags", widget: "list", label: "Tags" },
                        { name: "description", widget: "string", label: "Description" },
                        { name: "source", widget: "string", label: "Source", required: false },
                        { name: "demo", widget: "string", label: "Demo", required: false },
                        { name: "body", widget: "markdown", label: "Page Body" }
                    ],
                    meta: { path: { widget: "string", label: "Path", index_file: "index", default: "/" } }
                }]
            }
        })
    ],
    markdown: {
        extendDefaultPlugins: true,
        remarkPlugins: [
            [autoTitle, {}],
            remarkGemoji,
            [oembed, { syncWidget: true }]
        ],
        rehypePlugins: [
            rehypeSlug,
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
