<div class="dashed-container max-width-container center-container">
  <section class="dashed padding">
    <slot />
  </section>
</div>

<style>
  .dashed-container {
    padding: 4em 1rem;
  }

  .dashed {
    position: relative;
    border: 2px solid rgb(var(--primary-accent-clr));
    border-radius: 4px;
  }

  .dashed::before {
    position: absolute;
    content: "";
    display: block;
    top: -8px;
    left: -8px;
    height: calc(100% + 5px);
    width: calc(100% + 5px);
    border: 2px dashed rgb(var(--secondary-accent-clr));
    border-radius: 4px;
    pointer-events: none;
  }

  :global(.dashed h1) {
    font-size: 3rem;
  }

  :global(.dashed p) {
    font-size: 1.2rem;
  }
</style>
