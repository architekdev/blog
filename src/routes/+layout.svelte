<script>
  import "$lib/css/app.css";

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
