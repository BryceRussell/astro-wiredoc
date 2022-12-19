# `<Paginate>`

This component is like the SSR version of Astro's SSG [`paginate()`](https://docs.astro.build/en/reference/api-reference/#paginate) function, create paginated dynamic routes using SSR

[Stackblitz Example/Demo](https://stackblitz.com/edit/github-pot44t-dmheae?file=src%2Fpages%2F[...page].astro)

## Features

- Create array of pages from an array of data
- Use slot functions as render templates for pages
- Works with index pages
- Compatible with `<Pagination>` component for page link navigation
- Alternatively render a page using the page number as a named slot
- Renders `error` slot if page number doesn't exist

## When do I use this?

This component is used when you want the to create a paginated dynamic route using SSR

## How to use

```tsx
---
import { Paginate } from 'astro-headless-ui';

const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
---

<Paginate page={Astro.params.page} data={posts}>
    {page => (
        <section>
            { page.data.map(post => (
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )}
</Paginate>
```

## Props

### `data: any[]`

Array of data to split into pages

### `size?: string|number`

**Default**: `10`

Number of items assigned to a page

### `page: string|number`

**Default**: `1`

Page number of page to display/render

**Example**:

```jsx
// src/pages/[...page].astro
<Paginate page={Astro.params.page}>
    ...
</Paginate>
```

## Slot Arguments

All slots are passed a `page` argument

```ts
interface Page {
    data: any[]; // Array of data for the current page
    start: number; // Index of first item on current page
    end: number; // Index of last item on current page
    size: number; // How many items per-page
    total: number; // The total number of items across all pages
    current: number; // The current page number, starting with 1
    last: number; // The total number of pages
}
```

```tsx
<Paginate>
    {page => (
        ...
    )}
</Paginate>
```

## Slots

### `default`

Default for render for page

```jsx
<Paginate>
    {page => (
      ...
    )}
</Paginate>
```

### `error`

This slot is rendered if the `page` prop is not a number or if its larger than the total number of pages **Example**: trying to access page `11` when there are only `10` pages

### `[number]`

Target a specific page for an alternative render using the page number as a named slot

In this example the first page of the pagination is completely replaced with a single element `<h1>First Page</h1>`

```jsx
<Paginate>
    <first slot="1">{() => <h1>First Page</h1>}</first>
    {page => (
      ...
    )}
</Paginate>
```

## Examples

### Adding navigation with Pagination

Easily add page navigation to your page using the `<Pagination>` component

```tsx
// 'src/pages/posts/[page].astro'
---
const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
---
<Paginate data={posts} size="10" page={Astro.params.page}>
    { page => (
        <section>
            { page.data.map(post => (
                <article>
                    <h2>{post.id} - {post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
        <nav>
            <Pagination url="/posts" total={page.last} current={page.current}>
                <active slot="active">{page => <span>{page.number}</span>}</active>
                <span slot="disabled">...</span>
                {page => <a href={page.href}>{page.number}</a>}
            </Pagination>
        </nav>
    )}
</Paginate>
```

### Alternative render for first page

Target a page for alternative render by using the page number as a named slot

```tsx
// 'src/pages/posts/[page].astro'
---
const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
---
<Paginate data={posts} size="10" page={Astro.params.page}>
    <first slot="1">{ page => (
        <section>
            <h1>This is the first page</h1>
            { page.data.map(post => (
                <article>
                    <h2>{post.id} - {post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )}</first>
    { page => (
        <section>
            { page.data.map(post => (
                <article>
                    <h2>{post.id} - {post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )}
</Paginate>
```

### Render error slot if page doesn't exist

Render an error page if trying to access a page number larger than the total number of pages

```tsx
// 'src/pages/posts/[page].astro'
---
const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
---
<Paginate data={posts} size="10" page={Astro.params.page}>
    { page => (
        <section>
            { page.data.map(post => (
                <article>
                    <h2>{post.id} - {post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
    )}
    <section slot="error">
        <p>This page does not exist</p>
    </section>
</Paginate>
```

### Paginate with an index

To paginate with an index you must use a rest route [`[...page]`](https://docs.astro.build/en/core-concepts/routing/#rest-parameters) or add the pagination to both your dynamic route and index (`index.astro` and `[page].astro`)

If using the `<Pagination>` component for navigation you must also pass the `index` prop

```tsx
// 'src/pages/posts/[...page].astro'
---
const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
---
<Paginate data={posts} size="10" page={Astro.params.page}>
    { page => (
        <section>
            { page.data.map(post => (
                <article>
                    <h2>{post.id} - {post.title}</h2>
                    <p>{post.body}</p>
                </article>
            ))}
        </section>
        <nav>
            <Pagination index url="/posts" total={page.last} current={page.current}>
                <active slot="active">{page => <span>{page.number}</span>}</active>
                <span slot="disabled">...</span>
                {page => <a href={page.href}>{page.number}</a>}
            </Pagination>
        </nav>
    )}
    <section slot="error">
        <p>This page does not exist</p>
    </section>
</Paginate>
```

### Stackblitz Demo

This is a small demo/example project showing how to use `<Paginate>` and `<Pagination>` to paginate an array of 100 posts from [jsonplaceholder](https://jsonplaceholder.typicode.com/)

https://stackblitz.com/edit/github-pot44t-dmheae?file=src%2Fpages%2F[...page].astro