<script>
  import DarkSwitch from "./DarkSwitch.svelte";

  let navItems = [
    {
      path: "/",
      pathName: "home",
    },
    {
      path: "/about",
      pathName: "about",
    },
    {
      path: "/blog",
      pathName: "blog",
    },
  ];
</script>

<nav class="max-width-container center-container">
  <div class="nav-container padding">
    <a class="nav-home-link" href="/">
      <div class="nav-home-img" title="Architek Logo">
        <svg
          class="light-mode-img"
          width="58"
          height="40"
          viewBox="0 0 1458 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="left-side"
            d="M1167.88 529.938L1162.84 540L1167.88 550.062L1421.59 1057.5H1066.91L808.156 540L1066.91 22.5H1421.59L1167.88 529.938Z"
            stroke="black"
            stroke-width="45"
          />
          <path
            class="right-side"
            d="M36.4057 1057.5L553.906 22.5H908.594L391.094 1057.5H36.4057Z"
            stroke="black"
            stroke-width="45"
          />
        </svg>
        <svg
          class="dark-mode-img"
          width="58"
          height="40"
          viewBox="0 0 1458 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="left-side"
            d="M1167.88 529.938L1162.84 540L1167.88 550.062L1421.59 1057.5H1066.91L808.156 540L1066.91 22.5H1421.59L1167.88 529.938Z"
            stroke="white"
            stroke-width="45"
          />
          <path
            class="right-side"
            d="M36.4057 1057.5L553.906 22.5H908.594L391.094 1057.5H36.4057Z"
            stroke="white"
            stroke-width="45"
          />
        </svg>
      </div>
      <h4>Architek</h4></a
    >
    <ul class="nav-items-container">
      {#each navItems as navItem}
        <li>
          <a href={navItem.path}>{navItem.pathName}</a>
        </li>
      {/each}

      <DarkSwitch />
    </ul>
  </div>
</nav>

<style>
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-home-link {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-home-link .nav-home-img {
    height: 40px;
    width: 54px;
  }

  .nav-home-link .nav-home-img .left-side,
  .nav-home-link .nav-home-img .right-side {
    transition: all 200ms ease;
  }

  .nav-home-link:hover .left-side {
    opacity: 0;
  }

  .nav-home-link:hover .right-side {
    transform: translateX(37%);
  }

  .dark .nav-home-link .nav-home-img .light-mode-img,
  .nav-home-link .nav-home-img .dark-mode-img {
    display: none;
  }

  .nav-home-link .nav-home-img .light-mode-img,
  .dark .nav-home-link .nav-home-img .dark-mode-img {
    display: block;
  }

  .nav-items-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
</style>
