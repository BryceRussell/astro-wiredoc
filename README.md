# Astro Simple Docs

A easy and simple solution to authoring and publishing documention using Astro

## Features
- Automatically create index pages
- All index pages contain a table of contents of the directory's `.md` files
- Breadcrumb navigation
- Static search using pagefind
- Dark/light theme

## How to use

Add `.md` pages to `/src/pages`

Nest `.md` files like `/src/pages/components` to organize files

## NPM Scripts

### `npm run build`

`astro build && npx -y pagefind --source dist`

Add pagefind's indexing command after build is finished

### `npm run preview`

`astro build && npx -y pagefind --source dist && astro preview`

Build, index, and preview the website. Pagefind does not work in `dev` mode, you must use this command to test search features locally 