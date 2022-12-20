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