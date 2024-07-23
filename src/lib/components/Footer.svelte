<script>
  import Logo from "./Logo.svelte";
  import NavItems from "./NavItems.svelte";
</script>

<footer>
  <section
    class="footer-container max-width-container center-container padding"
  >
    <Logo />
    <div class="footer-info">
      <p class="footer-copy">&copy; {new Date().getFullYear()} Architek</p>
      <p>
        Made with <a
          class="footer-link"
          target="_blank"
          rel="”noopener”"
          href="https://kit.svelte.dev/">Sveltekit</a
        >
        |
        <a
          class="footer-link"
          target="_blank"
          rel="”noopener”"
          href="https://mdsvex.pngwn.io/">mdsvex</a
        >
      </p>
    </div>
    <NavItems itemsClass="footer" />
  </section>
</footer>

<style>
  footer {
    background-color: rgb(var(--gray-clr));
  }

  .footer-container {
    display: grid;
    grid-template-areas:
      "logo ..."
      "nav links";
    gap: 2rem;
    color: rgb(var(--text-clr));
  }

  .footer-info {
    grid-area: links;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  :global(.footer-container .nav-items-container) {
    grid-area: nav;
    align-items: flex-end;
  }

  .footer-link:hover,
  .footer-link:focus {
    text-decoration: underline;
  }

  @media screen and (max-width: 640px) {
    .footer-container {
      grid-template-areas:
        "logo"
        "links"
        "nav";
    }

    :global(.footer-container .nav-home-link) {
      justify-content: center;
    }

    .footer-info {
      align-items: center;
    }
  }
</style>
