<script>
  import { page } from "$app/stores";
</script>

<section class="max-width-container center-container">
  <h1>Error</h1>
  <p>{$page.status}: Something went wrong!</p>

  <a href="/">Home</a>
</section>
