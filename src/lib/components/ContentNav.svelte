<script>
  export let tocEntries = [];
</script>

{#if tocEntries.length}
  <aside>
    <div>
      <h2>Navigation</h2>
    </div>
    <ul>
      {#each tocEntries as tocEntry}
        <li class="toc-entry toc-{tocEntry.tagName.toLowerCase()}">
          <a class="toc-entry-link" href="#{tocEntry.id}"
            >{tocEntry.innerText}</a
          >
        </li>
      {/each}
    </ul>
  </aside>
{/if}

<style>
  aside {
    position: sticky;
    top: 2rem;
    max-width: 300px;
    width: 100%;
    height: fit-content;
    padding: 1rem;
    background-color: rgb(var(--gray-clr));
    border-radius: 4px;
  }

  @media only screen and (max-width: 1024px) {
    aside {
      position: relative;
      top: 0;
      margin: 0 auto;
      max-width: var(--inner-max-width);
      padding: var(--padding-inner);
    }
  }

  :global(.dark aside) {
    background-color: rgb(var(--gray-clr));
  }

  .toc-entry {
    padding-bottom: 0.5rem;
  }

  .toc-entry:last-child {
    padding-bottom: 0;
  }

  .toc-entry.toc-h3 {
    margin-left: 0.7rem;
    padding-left: 0.5rem;
  }

  .toc-entry.toc-h3::marker {
    content: "\002014";
    color: rgb(var(--text-clr));
  }

  .toc-entry.toc-h4 {
    margin-left: 1.9rem;
    padding-left: 0.5rem;
  }

  .toc-entry.toc-h4::marker {
    content: "\002E3A";
    color: rgb(var(--text-clr));
  }

  .toc-entry-link {
    color: rgb(var(--text-clr));
    transition: all 200ms ease;
  }

  .toc-entry-link:hover {
    color: rgb(var(--primary-clr));
  }
</style>
