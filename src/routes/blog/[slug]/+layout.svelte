<script>
  import { fade, fly } from "svelte/transition";
  import { quartIn, quadOut } from "svelte/easing";

  import TitleHeader from "$components/TitleHeader.svelte";

  export let data;
  const { title, date, update, tags, readingTime } = data;
</script>

<TitleHeader {title} {date} {update} {tags} {readingTime} />

{#key data.currentRoute}
  <div
    class="animate"
    in:fly={{ duration: 320, delay: 220, y: 10, ease: quartIn }}
    out:fade={{ duration: 200, ease: quadOut }}
  >
    <slot />
  </div>
{/key}
