<script lang="ts">
  import boardForSixExpeditions from "./assets/6.jpg";
  import {
    expeditions,
    type ExpeditionKey,
    type ExpeditionScore,
  } from "./expeditions";
  import Expedition from "./lib/Expedition.svelte";

  let scores = new Map<ExpeditionKey, ExpeditionScore>(
    expeditions.map<[ExpeditionKey, ExpeditionScore]>(({ id }) => [
      id,
      {
        cost: 0,
        sum: 0,
        subtotal: 0,
        wagerMultiplier: 0,
        result: 0,
        bonus: 0,
        final: 0,
      },
    ])
  );
  $: finalScore = Array.from(scores.values()).reduce(
    (acc, { final }) => acc + final,
    0
  );

  const setScore = (id: ExpeditionKey, score: ExpeditionScore) => {
    scores = scores.set(id, score);
  };
</script>

<main class="container m-auto">
  <h1 class="text-2xl text-center mb-5">Lost Cities Score Calculator</h1>

  <section
    class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <header class="flex items-baseline mb-2">
      <h2 class="flex-1 text-xl">Player Name</h2>
      <strong>Σ {finalScore}</strong>
    </header>
    <img
      class="board block mb-2 shadow-md"
      src={boardForSixExpeditions}
      alt="Lost Cities board for 5 expeditions"
    />
    <div class="decks flex justify-center">
      {#each expeditions as route (route.id)}
        <Expedition
          {route}
          on:expedition={(event) => setScore(route.id, event.detail)}
        />
      {/each}
    </div>
  </section>
</main>

<style>
  .board {
    width: 300px;
  }
  .decks {
    gap: 18px;
  }
</style>
