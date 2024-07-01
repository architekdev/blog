<script>
  import { onMount } from "svelte";
  import { formatDate } from "$lib/utils/formatting.js";

  export let title = null;
  export let date = null;
  export let update = null;
  export let tags = null;
  export let readingTime = null;

  let dateFormatted;
  let updateFormatted;

  let headingImage;
  let randomImgNum = Math.floor(Math.random() * 10) + 1;

  dateFormatted = formatDate(date, dateFormatted);
  updateFormatted = formatDate(update, updateFormatted);

  onMount(async () => {
    headingImage.style.setProperty(
      "--background-image",
      'url("/images/backgrounds/blurred-' + randomImgNum + '.jpg")',
    );
  });
</script>

<header>
  <section class="article-header-container" bind:this={headingImage}>
    <div
      class="article-inner-container max-width-container center-container padding"
    >
      <h1>
        {title}
      </h1>

      {#if date != null}
        <div class="article-header-info">
          <div class="article-header-dates">
            {#if dateFormatted != null}
              <p>Published: {dateFormatted}</p>
            {/if}
            {#if updateFormatted != null}
              <p class="date-divider">/</p>
              <p>Updated: {updateFormatted}</p>
            {/if}
            <p class="date-divider">/</p>
            <p>{readingTime.text}</p>
          </div>
          <div class="tags">
            {#if tags.length}
              {#each tags as tag}
                <a class="tag" href="/blog/tag/{tag}">
                  #{tag}
                </a>
              {/each}
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </section>
</header>

<style>
  .article-header-container {
    --background-image: unset;
    position: relative;
    padding: 4rem 0;
  }

  .article-header-container h1 {
    font-size: 2rem;
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
    filter: opacity(0.2) contrast(150%);
    z-index: -1;
  }

  :global(.dark .article-header-container::before) {
    filter: grayscale(40%) opacity(0.4);
  }

  .article-header-info {
    display: flex;
    flex-direction: column;
  }

  .article-header-dates {
    display: flex;
    gap: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .article-header-dates {
      flex-direction: column;
      gap: 0;
      margin-bottom: 1.5rem;
    }

    .article-header-dates p {
      margin-bottom: 0.5rem;
    }

    .date-divider {
      display: none;
    }
  }
</style>
