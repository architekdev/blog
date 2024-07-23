<script>
  import Logo from "./Logo.svelte";
  import NavItems from "./NavItems.svelte";

  let showNav = false;

  let navToggle = () => {
    showNav = !showNav;
  };
</script>

<nav class="max-width-container center-container">
  <div class="nav-container padding">
    <Logo />
    <NavItems itemsClass="desktop" />

    <button on:click={navToggle} class="mobile-menu">
      <span class="slice"></span>
      <span class="slice"></span>
      <span class="slice"></span>
    </button>

    <div class="mobile-nav padding" class:show={showNav}>
      <button on:click={navToggle} class="mobile-menu">
        <span class="slice"></span>
        <span class="slice"></span>
        <span class="slice"></span>
      </button>
      <NavItems itemsClass="mobile" />
    </div>
  </div>
</nav>

<style>
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mobile-menu,
  .mobile-nav {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .mobile-menu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 6px;
      background-color: transparent;
      cursor: pointer;
    }

    .mobile-menu .slice {
      display: block;
      height: 4px;
      width: 20px;
      background-color: rgb(var(--text-clr));
      transition: all 200ms ease;
    }

    .mobile-menu .slice:first-child,
    .mobile-menu .slice:last-child {
      width: 24px;
    }

    .mobile-menu:hover .slice,
    .mobile-menu:focus .slice {
      width: 24px;
    }

    .mobile-menu:hover .slice:first-child,
    .mobile-menu:hover .slice:last-child,
    .mobile-menu:focus .slice:first-child,
    .mobile-menu:focus .slice:last-child {
      width: 20px;
    }

    .mobile-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      gap: 2rem;
      top: 0;
      left: -20vw;
      width: 100vw;
      height: 100vh;
      background: rgb(var(--bg-clr));
      z-index: -100;
      opacity: 0;
      transition: all 200ms ease;
      transition-delay: 100ms;
    }

    .mobile-nav .mobile-menu {
      margin-top: 8px;
    }

    .show {
      left: 0;
      opacity: 1;
      z-index: 100;
    }
  }
</style>
