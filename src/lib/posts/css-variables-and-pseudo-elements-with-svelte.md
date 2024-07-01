---
title: CSS variables let you control pseudo elements with Svelte
date: "2024-06-30"
summary: "Setting properties on a pseudo element is a breeze with CSS variables, and Svelte makes it even easier to control."
tags:
  - "css" 
  - "front-end"
  - "svelte"
---

If you navigate to the homepage of this blog and back to this post, you'll notice the background image within the header is randomly selected each time. I used a pseudo element to set this image, but I needed a way to set the value of this pseudo element in Svelte. Here's how I did it.

## Styling

We'll start with setting up the CSS:

```svelte
<style>
  .article-header-container {
    --background-image: unset;
    position: relative;
  }

  .article-header-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
```

Above is the CSS to set the image, as you can see I have created a CSS variable on the container image that can be equal to anything I want. I'm then accessing that variable within the `before` pseudo element, and setting some styling defaults for that image.

You can test this works by setting the `--background-image` variable to a colour and using this variable like this `background-color: var(--background-image);` on the pseudo element. CSS variables are great! For now I have just set the variable equal to `unset`, which I am using as a null value for now. Next, I will use JavaScript to change the value of this variable.

## Getting a random image

```svelte
<script>
  import { onMount } from "svelte";

  let headingImage;
  let randomImgNum = Math.floor(Math.random() * 10) + 1;

  onMount(async () => {
    headingImage.style.setProperty(
      "--background-image",
      'url("/images/backgrounds/blurred-' + randomImgNum + '.jpg")',
    );
  });
</script>
```

Here I am using Svelte, walking through this code, I have started by getting a random number between 1 and 10. `Math.random` will return a number equal to or greater than 0 and less than 1. To make this bigger, this number is multiplied by 10. To make this number an integer we use the `Math.floor` method which rounds the number down to the nearest whole number. Finally, I add 1 to this result so the integer will be between 1 and 10, not 0 and 9.

My background images are named `blurred-1.jpg`, `blurred-2.jpg`, and so on. Knowing this, all I needed to do was set the the `background-image` variable equal to a string that points to those images, utilising the random number that has been generated. This is where we use the `setProperty` method which takes in the property we want to target and the value we want to assign it.

> Note: we need to use the `onMount` life cycle method here as we are accessing an element from the DOM, so we need to wait for these elements to be rendered first.

## Binding to an element

The last step is to attach the property we have set on `headingImage` to an element, to do this there is the `bind:this` directive in Svelte.

```svelte
<section class="article-header-container" bind:this={headingImage}></section>
```

That's everything. This is an example of why I have been enjoying Svelte, I love the balance of vanilla JavaScript and useful built-ins, and the component philosophy makes a lot of sense to me as someone who has spent a lot of time working with CSS and obsesses over file structure.

## The complete component

Here's the overall component,:

```svelte
<script>
  import { onMount } from "svelte";

  let headingImage;
  let randomImgNum = Math.floor(Math.random() * 10) + 1;

  onMount(async () => {
    headingImage.style.setProperty(
      "--background-image",
      'url("/images/backgrounds/blurred-' + randomImgNum + '.jpg")',
    );
  });
</script>

<section class="article-header-container" bind:this={headingImage}>
  <h1>Your Heading Goes Here</h1>
</section>

<style>
  .article-header-container {
    --background-image: unset;
    position: relative;
  }

  .article-header-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--background-image);
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
```
