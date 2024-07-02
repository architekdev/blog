<script>
  import { formatDate } from "$lib/utils/formatting.js";
  import TitleHeader from "$components/TitleHeader.svelte";

  export let data;
  let dateFormatted;

  const newOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
</script>

<TitleHeader title="Blog Home" />
<section class="max-width-container center-container padding">
  <ul class="blog-posts">
    {#each data.posts as post}
      <li class="blog-post">
        <div class="blog-post-container">
          <a class="blog-post-link" href={post.path}>
            <h2>
              {post.meta.title}
            </h2>
            {#if post.meta.summary}
              <p>{post.meta.summary}</p>
            {/if}
          </a>
          <div class="blog-post-extras">
            <div class="blog-post-date">
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

<style>
  .blog-posts {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .blog-post {
    position: relative;
    background-color: rgb(var(--gray-clr));
    border-radius: 4px;
    padding: var(--padding-inner);
  }

  :global(.dark .blog-post) {
    background-color: rgb(var(--gray-clr));
  }

  .blog-post::before {
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

  .blog-post:hover::before,
  .blog-post:focus::before {
    opacity: 100%;
    top: -6px;
    left: -6px;
  }

  .blog-post-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .blog-post-extras {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .blog-post-date {
    color: rgb(var(--primary-clr));
  }

  .tagged-post-tags {
    display: flex;
    gap: 1rem;
  }
</style>
