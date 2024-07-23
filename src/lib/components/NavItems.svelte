<script>
  import DarkSwitch from "./DarkSwitch.svelte";

  export let itemsClass;

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

<ul class="nav-items-container {itemsClass}">
  {#each navItems as navItem}
    <li>
      <a class="nav-link" href={navItem.path}>{navItem.pathName}</a>
    </li>
  {/each}

  <DarkSwitch />
</ul>

<style>
  .nav-items-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-items-container.mobile {
    display: none;
  }

  :global(.nav-items-container.footer button) {
    display: none;
  }

  @media screen and (max-width: 640px) {
    .nav-items-container.desktop {
      display: none;
    }

    .nav-items-container.mobile {
      display: flex;
      flex-direction: column;
    }

    .nav-items-container.footer {
      justify-content: center;
    }
  }
</style>
