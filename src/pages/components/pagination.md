# `<Pagination>`

Link navigation for paginated routes

**Note**: This is component is generated server side for paginated routes like `/posts/1`, `/posts/2`, `/posts/3`. This component does not work for client side pagination

**Example**:

![pagination example](https://raw.githubusercontent.com/BryceRussell/astro-headless-ui/master/examples/pagination/example-2.PNG)

```tsx
---
import { Pagination } from 'astro-headless-ui';
---
<nav style="display:flex;gap:4px;">
    <Pagination url="/posts" total="22" current="11">
        <active slot="active">{page => <span>{page.number}</span>}</active>
        <span slot="disabled">...</span>
        {page => <a href={page.href}>{page.number}</a>}
    </Pagination>
</nav>
```

```html
<nav style="display:flex;gap:4px;">
    <a href="/1">1</a>
    <a href="/2">2</a>
    <span>...</span>
    <a href="/9">9</a>
    <a href="/10">10</a>
    <span>11</span>
    <a href="/12">12</a>
    <a href="/13">13</a>
    <span>...</span>
    <a href="/21">21</a>
    <a href="/22">22</a>
</nav>
```


## Props

### `url?: string`

**Default**: `/`

Root path used to interpolate a `href` for links `'${url}/${page.number}'`

### `total: string|number`

Total number of pages

### `current: string|number`

Current page number

### `start?: string|number`

**Default**: `2`

Number of pages to display at the start

### `end?: string|number`

**Default**: `2`

Number of pages to display at the end

### `middle?: string|number`

**Default**: `2`

Number of links to display on either side of the current active page/link

This prop is just an easier way of setting `before` and `after` to the same value

### `before?: string|number`

**Default**: `middle`

Number of links to display on the right side of the current active page/link

### `after?: string|number`

**Default**: `middle`

Number of links to display on the left side of the current active page/link

### `index?: boolean`

**Default**: `false`

`true`: The first page link will link to the index of `url` (`{url}/`) 

`false`: The first page link will link to the first page (`{url}/1`)

### `commas?: boolean`

**Default**: `true`

`true`: Returns page number as a string number formatted with commas

`false`: Return the page number as a number

### `collapse?: boolean`

**Default**: `true`

`true`: Collapse the navigation, only the page links defined using the `start`, `current`, `middle`, `before`, `after` and `end` props will be shown

`false`: Stops navigation from collapsing, a page link will be created for every single page number

## Slot Arguments

All slots have access to a `page` argument to use when defining templates for your link elements

```tsx
<Pagination>
    {page => <a href={page.href}>{page.number}</a>}
</Pagination>
```

```ts
interface page {
    number: string | number; // Number of page
    href: string; // href to page
    // What type of link the page is
    slot: 'link'|'first'|'disabled'|'before'|'active'|'after'|'last';
}
```

## Slots

**Example**:

```tsx
<Pagination url="/posts" total="22" current="11">
    <active slot="active">{page => <span>{page.number}</span>}</active>
    <span slot="disabled">...</span>
    {page => <a href={page.href}>{page.number}</a>}
</Pagination>

<!-- or -->

<Pagination url="/posts" total="22" current="11">
    {page => {
        if (page.slot === "active") return <span>{page.number}</span>
        if (page.slot === "disabled") return <span>...</span>
        return <a href={page.href}>{page.number}</a>
    }}
</Pagination>
```

### `default`

The default slot, acts as a fallback if a slot is not defined

### `link`

Targets any link that is not in the slots `disabled`, `first`, `before`, `active`, `after`, or `last`

### `first`

Targets the first link

### `disabled`

Targets the space between the `first` and `before` links, and the `after`and `last` links, usually looks like three dots (`...`). Represents the collapsed pages not included in pagination

### `before`

Targets the links before the `active` link

### `active`

Target the current page's link

### `after`

Targets the links after the `active` link

### `last`

Targets the last link

### `[number]`

Target any page number

```tsx
<Pagination>
  <span slot="2">This is the second page's link</span>
</Pagination>
```