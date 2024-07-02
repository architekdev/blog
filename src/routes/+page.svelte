<script>
  import { formatDate } from "$lib/utils/formatting.js";

  let recentPostNum = 6;
  let dateFormatted;

  export let data;

  const newOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
</script>

<svelte:head>
  <title>Architek</title>
  <meta property="og:title" content="Architek" />
</svelte:head>

<div class="welcome-container max-width-container center-container">
  <section class="welcome padding">
    <h1>Hey, I'm Amy</h1>
    <p>
      <strong>Architek</strong> is my blog where you'll find content about web developement
      and tech in general. Enjoy!
    </p>
  </section>
</div>

<section class="max-width-container center-container padding">
  <h2>Recent Posts:</h2>

  <ul class="recent-posts">
    {#each data.posts as post, i}
      {#if i < recentPostNum}
        <li class="recent-post">
          <div class="recent-post-container">
            <a class="recent-post-link" href={post.path}>
              <h2>
                {post.meta.title}
              </h2>
              {#if post.meta.summary}
                <p>{post.meta.summary}</p>
              {/if}
            </a>
            <div class="recent-post-extras">
              <div class="recent-post-date">
                {(dateFormatted = formatDate(
                  post.meta.date,
                  dateFormatted,
                  newOptions,
                ))}
              </div>

              <div class="recent-post-tags">
                {#each post.meta.tags as tag}
                  <a class="tag" href="/blog/tag/{tag}">
                    #{tag}
                  </a>
                {/each}
              </div>
            </div>
          </div>
        </li>
      {/if}
    {/each}
  </ul>
</section>

<div class="all-tags-container">
  <section class="max-width-container center-container padding">
    <h2>All Post Tags:</h2>
    <div class="tags">
      {#each data.uniqueTags as tag}
        <a class="tag" href="/blog/tag/{tag}">
          #{tag}
        </a>
      {/each}
    </div>
  </section>
</div>

<style>
  .welcome-container {
    padding: 4em 1rem;
  }

  .welcome {
    position: relative;
    border: 2px solid rgb(var(--primary-accent-clr));
    border-radius: 4px;
  }

  .welcome::before {
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

  .welcome h1 {
    font-size: 3rem;
  }

  .recent-posts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media only screen and (max-width: 992px) {
    .recent-posts {
      grid-template-columns: 1fr;
    }
  }

  .recent-post {
    position: relative;
    background-color: rgb(var(--gray-clr));
    border-radius: 4px;
    padding: var(--padding-inner);
  }

  :global(.dark .recent-post) {
    background-color: rgb(var(--gray-clr));
  }

  .recent-post::before {
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

  .recent-post:hover::before,
  .recent-post:focus::before {
    opacity: 100%;
    top: -6px;
    left: -6px;
  }

  .recent-post-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .recent-post-extras {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
  }

  .recent-post-date {
    color: rgb(var(--primary-clr));
  }

  .recent-post-tags {
    display: flex;
    gap: 1rem;
  }

  .all-tags-container {
    padding: 4rem 0;
  }
</style>
