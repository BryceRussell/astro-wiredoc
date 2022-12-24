# `<AnimatedSpriteSheet>`

CSS stylesheet template for animating spritesheets using keyframe animations

## Features

- Animate spritesheets
- Supports horizontal, vertical, and grid spritesheets
- Change speed
- Ability to hide default animation element

## When do I use this?

This component is used when you want to animate a spritesheet using only CSS. It will eventually also be compatible with `<ScrollProp>` for the ability to animate on scroll

## How to use

![GIF of spritesheet animation](https://raw.githubusercontent.com/BryceRussell/astro-headless-ui/master/examples/animated-spritesheet/example-1.gif)
![Spritesheet](https://raw.githubusercontent.com/BryceRussell/astro-headless-ui/master/examples/animated-spritesheet/example-2.png)

```tsx
<AnimatedSpriteSheet
    url="/boom.png"
    name="boom"
    height={605}
    width={1207}
    cols={8}
    rows={4}
/>
```

```html
<div class="boom-animation"></div>

<style>
  ...
</style>
```

## Props

### `name: string`

Class the animation gets attached to

> **Note**: Use unique a class name to avoid style collisions with other classes in your project

### `url: string`

A css `url()` to the spritesheet image

### `height: number`

Height of spritesheet image in `px`

### `width: number`

Width of spritesheet image in `px`

### `cols?: number`

**Default**: `1`

Number of columns in spritesheet

### `rows?: number`

**Default**: `1`

Number of rows in spritesheet

### `speed?: number`

Speed in `ms`

**Default**: `1000`

> **Note**: The speed of the animation seems to be relative to the orientation and number of frames, different animations may need different speeds in order to match each others framerate

### `hide?: boolean`

**Default**: `false`

Hide the default animation element 

`<div class={name}></div>`

**Note**: To use the animation on another element add the animations class to it (`name` prop)