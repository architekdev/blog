<script>
  import { formatDate } from "$lib/utils/formatting.js";
  import TitleHeader from "$components/TitleHeader.svelte";

  let dateFormatted;

  const newOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  export let data;
  const { tag, posts } = data;
</script>

<section>
  {#if posts.length}
    <TitleHeader title="Tagged &quot;{tag}&quot;" />
    <section class="max-width-container center-container padding">
      <ul class="tagged-posts">
        {#each data.posts as post}
          <li class="tagged-post">
            <div class="tagged-post-container">
              <a class="tagged-post-link" href={post.path}>
                <h2>
                  {post.meta.title}
                </h2>
                {#if post.meta.summary}
                  <p>{post.meta.summary}</p>
                {/if}
              </a>
              <div class="tagged-post-extras">
                <div class="tagged-post-date">
                  {(dateFormatted = formatDate(
                    post.meta.date,
                    dateFormatted,
                    newOptions,
                  ))}
                </div>

                <div class="tagged-post-tags">
                  {#each post.meta.tags as tag}
                    <a class="tag" href="/blog/tag/{tag}">
                      #{tag}
                    </a>
                  {/each}
                </div>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </section>
  {:else}
    <TitleHeader title="Sorry, no posts tagged &quot;{tag}&quot;" />
    <section>
      <a href="/">Home</a>
    </section>
  {/if}
</section>

<style>
  .tagged-posts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .tagged-post {
    position: relative;
    background-color: rgb(var(--gray-clr));
    border-radius: 4px;
    padding: var(--padding-inner);
  }

  :global(.dark .tagged-post) {
    background-color: rgb(var(--gray-clr));
  }

  .tagged-post::before {
    position: absolute;
    content: "";
    opacity: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 2px dashed rgb(var(--primary-accent-clr));
    border-radius: 4px;
    pointer-events: none;
    transition: all 200ms ease;
  }

  .tagged-post:hover::before,
  .tagged-post:focus::before {
    opacity: 100%;
    top: -6px;
    left: -6px;
  }

  .tagged-post-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tagged-post-extras {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .tagged-post-date {
    color: rgb(var(--primary-clr));
  }

  .tagged-post-tags {
    display: flex;
    gap: 1rem;
  }
</style>
