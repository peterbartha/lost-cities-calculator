<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let value: number | "🤝" = 0;

  let isPlayed = false;

  const dispatch = createEventDispatcher<{ toggle: boolean }>();
  const toggle = () => dispatch("toggle", isPlayed);
</script>

<label
  class="bg-slate-50 dark:bg-slate-600 shadow-sm flex flex-auto items-center justify-center w-8 h-12 rounded text-2xl mb-1 select-none cursor-pointer"
  ><input
    class="hidden"
    type="checkbox"
    bind:checked={isPlayed}
    on:change={toggle}
  />{value}</label
>

<style>
  label {
    border: 1px solid rgba(var(--card-color), 0.1);
    color: rgb(var(--card-color));
  }
  label:has(input:checked) {
    background: rgb(var(--card-color));
    color: rgb(71 85 105);
  }
</style>
