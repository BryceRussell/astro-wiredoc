# Astro Simple Docs

A easy and simple solution to authoring and publishing documention using Astro

## [Demo](https://astro-simple-docs.netlify.app)

## Features
- Automatically creates index pages for directories in `src/pages/`
- All index pages contain a list of `.md` files with table of contents
- Static search using pagefind
- Breadcrumb navigation
- Scroll to top button
- Dark/light theme
- Heading Links
- Syntax highlighting

## How to use

Just add `.md` pages to `/src/pages`, everything else is generated for you

## NPM Scripts

### `npm run build`

`astro build && npx -y pagefind --source dist`

This template adds pagefind's indexing command after building to add search functionality

### `npm run preview`

`astro build && npx -y pagefind --source dist && astro preview`

This template combines the build, index, and preview commands into one, this makes customizing/debugging pagefind much easier

## Pros

- **Easy to setup**: Just add `.md` files to `src/pages`, make sure each page contains a title `# Title` and all headings are in cascading order
- **Lighthouse 100s**: Scores 100s on lighthouse if your markdown is formatted correctly
- **SEO (WIP)**: Each page has its own SEO automatically
- **Table of Contents**: List and link to all headings within a `.md` file
- **Breadcrumb Navigation**: Navigate through directories and list their contents
- **Dark/Light Mode**: Persistent dark/light theme
- **Code Copy Buttons** Copy buttons on code blocks
- **Scroll to Top Button**: Button to scroll to top of page
- **Heading Links**: Headings have backlinks
- **Syntax Highlighting**: Syntax highlighting on code blocks
- **Media Embeds**: Embed youtube, tweets, etc inside your markdown
- **Gemojies**: Markdown emojies enabled

## Cons

- **Navigation**: Navigation is page based, takes multiple clicks to get to another page
- **Static Search**: Search is on its own page and can only return links to whole pages, not headings
- **Content Collections**: Template can't take advantage of new content collection API because it uses the page based routing of `src/pages`