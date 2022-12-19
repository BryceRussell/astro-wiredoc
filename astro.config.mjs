import { defineConfig } from 'astro/config';

import { defaultFrontmatter } from 'astro-default-frontmatter';

export default defineConfig({
    site: process.env.DEV
        ? 'https://localhost:3000/'
        : 'https://localhost:3000/',
    markdown: {
        remarkPlugins: [
            [ defaultFrontmatter, {
                layout: "@/layouts/Markdown.astro"
            }]
        ]
    }
});
