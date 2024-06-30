<script>
  import { onMount } from "svelte";
  let darkTheme;
  let htmlElement;
  let switchTheme;

  onMount(async () => {
    htmlElement = document.documentElement;

    if (
      localStorage.theme == "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      htmlElement.classList.add("dark");
      darkTheme = true;
    } else {
      htmlElement.classList.remove("dark");
      darkTheme = false;
    }

    switchTheme = () => {
      darkTheme = !darkTheme;

      if (darkTheme == true) {
        htmlElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        htmlElement.classList.remove("dark");
        localStorage.removeItem("theme");
      }
    };
  });
</script>

<button on:click={switchTheme} class="rounded-full">
  <span class:dark-on={darkTheme}></span>
</button>

<style>
  button {
    position: relative;
    height: 32px;
    width: 64px;
    border-radius: 32px;
    padding: 2px;
    background-color: rgb(var(--gray-clr));
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px inset;
  }

  button span {
    position: absolute;
    display: block;
    left: 3px;
    top: 3px;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background-color: rgb(var(--primary-clr));
    transition: all 200ms ease;
  }

  button span.dark-on {
    left: 35px;
  }
</style>
