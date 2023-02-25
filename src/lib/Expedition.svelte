<script lang="ts">
  import Card from "./Card.svelte";
  import { createEventDispatcher } from "svelte";
  import type { ExpeditionRoute, ExpeditionScore } from "../expeditions";

  export let route: ExpeditionRoute;

  const dispatch = createEventDispatcher<{
    expedition: ExpeditionScore;
  }>();

  const expeditionCost = -20;
  const cardBonus = 20;

  let cost = 0;
  let sum = 0;
  let subtotal = 0;
  let wagerMultiplier = 1;
  let result = 0;
  let bonus = 0;
  let final = 0;

  let deck = new Array<boolean>(10).fill(false);
  let wagerCards = new Array<boolean>(3).fill(false);
  let visibleWagerCards = 1;
  let playedCardCount = 0;

  $: visibleWagerCards = Math.min(
    Math.max(wagerCards.filter((c) => c).length + 1, 1),
    3
  );

  $: {
    playedCardCount = [...wagerCards, ...deck].filter((c) => c).length;
    cost = playedCardCount > 0 ? expeditionCost : 0;
    sum = deck.reduce(
      (acc, isCurrentPlayed, i) => acc + (isCurrentPlayed ? i + 1 : 0),
      0
    );
    subtotal = sum + cost;
    wagerMultiplier = wagerCards.filter((c) => c).length + 1;
    result = subtotal * wagerMultiplier;
    bonus = playedCardCount >= 8 ? cardBonus : 0;
    final = result + bonus;

    dispatch("expedition", {
      cost,
      sum,
      subtotal,
      wagerMultiplier,
      result,
      bonus,
      final,
    });
  }

  const handleInvestment = (isPlayed: boolean) => {
    wagerCards = isPlayed
      ? [true, ...wagerCards.slice(0, wagerCards.length - 1)]
      : [...wagerCards.slice(1), false];
  };

  const handlePlay = (isPlayed: boolean, index: number) => {
    deck[index] = isPlayed;
  };
</script>

<ul>
  {#each Array(visibleWagerCards).fill(0) as _}
    <li>
      <Card
        value="🤝"
        on:toggle={(event) => handleInvestment(event.detail)}
        --card-color={route.rgbCardColor}
      />
    </li>
  {/each}
  {#each deck as _, i}
    <li>
      <Card
        value={i + 1}
        on:toggle={(event) => handlePlay(event.detail, i)}
        --card-color={route.rgbCardColor}
      />
    </li>
  {/each}
</ul>
