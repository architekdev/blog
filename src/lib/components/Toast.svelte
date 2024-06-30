<script>
  import { fly } from "svelte/transition";

  export let toastMessage = "Copied";
  export let toastTime = 2000;
  let active = false;

  export function pop() {
    active = true;

    setTimeout(() => {
      active = false;
    }, toastTime);
  }
</script>

{#if active}
  <div transition:fly={{ duration: 250, y: 20 }} class="toast">
    {toastMessage}
  </div>
{/if}

<style>
  .toast {
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    padding: 1rem;
    border-radius: 4px;
    background-color: rgb(var(--gray-clr));
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
    z-index: 10;
  }

  :global(.dark .toast) {
    background-color: rgb(var(--gray-clr));
  }
</style>
