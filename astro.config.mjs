import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import rehypeSlug from 'rehype-slug'
import remarkGemoji from 'remark-gemoji'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import oembed from 'remark-oembed';
import h from 'hastscript'

export default defineConfig({
    site: process.env.MODE === 'development'
        ? 'https://localhost:3000/'
        : 'https://astro-simple-docs.netlify.app/',
    integrations: [
        NetlifyCMS({
            config: {
                backend: {
                    name: 'git-gateway',
                    branch: 'main'
                },
                collections: [{
                    name: "Documentation",
                    label: "Documentation",
                    description: "This is a description",
                    label_singular: "Page",
                    summary: "/{{dirname}} - {{title}}",
                    folder: "src/pages/docs",
                    path: "{{slug}}/index",
                    media_folder: "",
                    public_folder: "",
                    create: true,
                    delete: true,
                    nested: {
                        depth: 12,
                        summary: "{{title}}"
                    },
                    fields: [
                        { name: "layout", widget: "hidden", default: "@/layouts/Markdown.astro" },
                        { name: "draft", widget: "boolean", label: "Draft", default: true },
                        { name: "pubDate", widget: "date", label: "Publish Date", default: "" },
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
            [remarkGemoji, {}],
            [oembed, { syncWidget: true }]
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
