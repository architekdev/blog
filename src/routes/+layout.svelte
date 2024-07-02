<script>
  import "@fontsource-variable/karla";
  import "@fontsource/dm-serif-display";
  import "@fontsource/courier-prime";

  import "./css/base/reset.css";
  import "./css/base/colors.css";
  import "./css/base/fonts.css";
  import "./css/base/containers.css";

  import "./css/components/tag.css";

  import "./css/layouts/all-tags.css";
  import "./css/layouts/prism.css";
  import "./css/layouts/article.css";

  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";

  import { fade, fly } from "svelte/transition";
  import { quartIn, quadOut } from "svelte/easing";

  export let data;
</script>

<Header />
{#key data.currentRoute}
  <main
    in:fly={{ duration: 220, delay: 120, y: 10, ease: quartIn }}
    out:fade={{ duration: 100, ease: quadOut }}
  >
    <slot />
  </main>
{/key}
<Footer />

<style>
  main {
    min-height: calc(100vh - 208px);
  }
</style>
