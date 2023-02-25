<script lang="ts">
  import Expedition from "./lib/Expedition.svelte";
  import { expeditions } from "./expeditions";
</script>

<main class="container m-auto">
  <h1 class="text-2xl text-center mb-5">Lost Cities Score Calculator</h1>

  <div
    class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <h2>Player Name</h2>
    <Expedition
      route={expeditions[0]}
      on:expedition={(event) => console.dir(event.detail)}
    />
  </div>
</main>

<style>
</style>
