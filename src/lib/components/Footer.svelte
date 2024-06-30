<footer>
  <section
    class="footer-container max-width-container center-container padding"
  >
    <a class="footer-home-link" href="/">
      <div class="footer-home-img" title="Architek Logo"></div>
      <h4>Architek</h4></a
    >
    <p class="footer-copy">&copy; {new Date().getFullYear()} Architek</p>
  </section>
</footer>

<style>
  footer {
    background-color: rgb(var(--gray-clr));
  }

  .footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(var(--text-clr));
  }

  .footer-home-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    opacity: 0.2;
  }

  .footer-home-link:hover,
  .footer-home-link:focus {
    opacity: 0.4;
  }

  .footer-home-link .footer-home-img {
    height: 40px;
    width: 54px;
    background-image: url("/images/logos/black-line-1080.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .dark .footer-home-link .footer-home-img {
    background-image: url("/images/logos/white-line-1080.svg");
  }

  .footer-copy {
    opacity: 0.2;
  }
</style>
