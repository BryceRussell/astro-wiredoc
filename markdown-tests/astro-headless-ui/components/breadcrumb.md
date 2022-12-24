# `<Breadcrumb>`

Hierarchical link navigation of a URL

## Features 

- Split a URL into hierarchical link navigation
- Use slot function templates to fully customize render
- Collapse long URLs
- Change index link text or remove entirely

## How to use

![Breadcrumb example 1](https://raw.githubusercontent.com/BryceRussell/astro-headless-ui/master/examples/breadcrumb/example-1.PNG)

> **Note**: This is the default render without using slot customization

```tsx
// "src/pages/posts/categories/javascript/tutorial"
---
import { Breadcrumb } from 'astro-headless-ui';
---
<nav>
    <Breadcrumb />
</nav>
```

**Output**:

```html
<nav>
    <a href="/">Home</a>
    <span class="divider">/</span>
    <a href="/posts">posts</a>
    <span class="divider">/</span>
    <a href="/posts/categories">categories</a>
    <span class="divider">/</span>
    <a href="/posts/categories/javascript">javascript</a>
    <span class="divider">/</span>
    <span class="active">tutorial</span>
</nav>
```


## Props

### `url?: URL|string`

**Default**: `Astro.url`

The URL used to generate hierarchical links, strings are converted to URL `URL(url)`.

### `index?: string|false`

**Default**: `Home`

The text assigned to the root link, `<a href="/">{index}</a>`, set to false to remove the root link entirely.

### `collapse?: boolean`

**Default**: `false`

Collapse long breadcrumbs, only the links defined using the `start` and `end` props will be displayed, all links that would have been displayed without collapsing are replaced by the `disabled` slot.

### `start?: string|number`

**Default**: `1`

Number of links to display at the start of the breadcrumb if the `collapse` prop is `true`.

### `end?: string|number`

**Default**: `3`

Number of links to display at the end of the breadcrumb if the `collapse` prop is `true`.

## Slot Arguments

All slots have access to a `link` argument to use when defining templates for your link elements

```tsx
<Breadcrumb>
    {link => <a href={link.href}>{link.text}</a>}
</Breadcrumb>
```

```ts
interface link {
    slug: string;
    href: string;
    text: string;
}
```

## Slots

Slots allow you to tweak how you want your component to be rendered

**Example**:


![Breadcrumb example 2](https://raw.githubusercontent.com/BryceRussell/astro-headless-ui/master/examples/breadcrumb/example-2.PNG)

```tsx
// "src/pages/blog/categories/javascript/tutorial"
<Breadcrumb collapse>
    {url => (<a href={url.href}>{url.text}</a><span>&gt;</span>)}
    <active slot="active">{url => <span>{url.text}</span>}</active>
    <Fragment slot="disabled"><span>...</span><span>&gt;</span></Fragment>
</Breadcrumb>
```

### `default`

The default slot, acts as a fallback if other slots are not defined

### `active`

Target the current page's link

### `disabled`

Only renders if `collapse` is true, replaces all links that would have been displayed if `collapse` was false

### `[number]`

Use a number as a slot to target the link rendering index.

**Example**: the first link can be targeted using slot `0`, the third link with slot `2`, etc

### `[slug]`

Target a link using the last slug in its path.

**Example**: a link with `href="/posts/javascript"` can be targeted using the slug `javascript`