<script lang="ts">
  import Header from "layouts/header.svelte";
  import Footer from "layouts/footer.svelte";
</script>

<div className="flex flex-col min-h-screen pointer-events-none">
  <Header />
  <main class="flex-1 max-w-screen-xl w-full mx-auto pointer-events-auto p-2 pt-12 lg:pt-16 lg:px-4">
    <slot />
  </main>
  <Footer />
</div>
