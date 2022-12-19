# `<DarkThemeToggle>`

A dark mode button toggle and script designed for websites with a light(default) and dark theme

The easiest way to use this component is in an element that is shared across all pages like a navbar or footer

> **Note**: This component is for websites with only a light(default) and dark theme, for more advanced theme features like scoping and defining multiple themes try out the `<MultiThemeToggle>` component

## Features

- Create a button with toggle function attached
- Toggles the `dark` class on the body
- Persist theme using `sessionStorage`
- Listen to system preference changes
- Ability to hide button and keep script for persistence
- Add `aria-label` by default, can override

## How to use

```jsx
---
import { DarkThemeToggle } from 'astro-headless-ui';
---

<DarkThemeToggle>
  Toggle Dark Theme
</DarkThemeToggle>
```

**Output**:

```html
<script>
  ...
</script>

<button onclick="darkThemeToggle()" aria-label="Toggle dark theme">
  Toggle Dark Theme
</button>
```

## Props

### `hide?: boolean`

Stops the button from rendering, but keeps the script. Useful for pages where the dark theme should persist without a toggle button on the page

### `...attrs`

**Type**: `HTMLAttributes<'button'>`

All other props passed to this component are passed as attributes to the toggle button (`id`, `class`, `style`, `aria-label`, `...`)

## Examples

### Persist theme without button

Add this to pages where the theme should persist without any visible toggle buttons

```jsx
<DarkThemeToggle hide />
```

### Using with `<IconSwitch>`

```jsx
---
import { DarkThemeToggle, IconSwitch } from 'astro-headless-ui';
import { Icon } from 'astro-icon';
---
<DarkThemeToggle style="padding:.5rem;">
  <IconSwitch size="2rem"> 
    <Icon name="ri:sun-foggy-line"/>
    <Icon name="ri:moon-cloudy-line"/>
  </IconSwitch>
</DarkThemeToggle>
```