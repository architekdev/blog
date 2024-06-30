<script>
  import { onMount } from "svelte";
  import ContentNav from "$components/ContentNav.svelte";
  import Toast from "$components/Toast.svelte";
  export let data;
  const { title, Content } = data;

  let headings;
  let toast;

  onMount(async () => {
    headings = document.querySelectorAll(
      ".article h1, .article h2, .article h3, .article h4",
    );

    headings.forEach(function (heading) {
      heading.addEventListener("click", function (e) {
        let headingUrl = heading.children[0].href;
        e.preventDefault();

        navigator.clipboard.writeText(headingUrl);
        toast.pop();
      });
    });
  });
</script>

<svelte:head>
  <title>Architek - {title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<section
  class="article-outer-container max-width-container center-container padding"
>
  <ContentNav tocEntries={headings} />
  <article class="article article-container inner-container center-container">
    <Content />
  </article>
</section>
<Toast bind:this={toast} toastMessage="Link Copied!" />

<style>
  .article-outer-container {
    display: flex;
    gap: 2rem;
  }

  @media only screen and (max-width: 1024px) {
    .article-outer-container {
      flex-direction: column;
    }
  }

  .article {
    background-color: rgb(var(--gray-clr));
    border-radius: 4px;
    padding: var(--padding-inner);
  }

  :global(.dark .article) {
    background-color: rgb(var(--gray-clr));
  }
</style>
