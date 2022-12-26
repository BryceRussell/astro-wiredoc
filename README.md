# Astro Simple Docs

> **Note**: Work in progress

A easy and simple solution to authoring and publishing documention using Astro

## [Demo](https://astro-simple-docs.netlify.app)

## Features
- Add documentation pages in admin panel using Netlify CMS
- Automatically creates index pages if none exists in directory
- Table of contents generated using headings from markdown
- Responsive double sidebar layout
- Static search using pagefind
- Breadcrumb navigation
- Syntax highlighting
- Heading Links
- Scroll to top button
- Dark/light theme

## How to use

> **Note**: Work in progress

- Download template
- Host using Netlify
- Configure Template
- Setup Netlify identity
- Create posts

## NPM Scripts

### `npm run build`

`astro build && npx -y pagefind --source dist`

This template adds pagefind's indexing command after building to add search functionality

### `npm run preview`

`astro build && npx -y pagefind --source dist && astro preview`

This template combines the build, index, and preview commands into one, this makes customizing/debugging pagefind much easier