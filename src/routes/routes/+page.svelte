<script lang="ts">
  import KomootEmbed from '$lib/KomootEmbed.svelte';
  import { page } from '$app/stores';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<article>
  <header><h2>Routes</h2></header>

  <h3>Current weather</h3>

  {#each data.currentWeather as weather (weather)}
    <p>{weather}</p>
  {/each}

  <h3>Castlerock to Malin Head</h3>

  <p>
    We get off at Castlerock train station from Belfast, and cycle towards the
    Foyle ferry. It doesn't necessarily have a timetable, just goes flat out
    until roughly 8pm, so will probs stop for a pint at the bar next to the
    ferry terminal.
  </p>

  <p>
    I've avoided ridiculous hills, but there's going to be a few climbs. Tried
    to make sure there's nice scenery along the way too. Added in a few stops
    along the way.
  </p>

  <div class="embed">
    <KomootEmbed
      title="Castlerock to Malin Head"
      tourId="1613969817"
      shareToken="aMSLTG2hwUQKV7bjscU0Vq5QNA63kBnifMLq8V04I5I8PrVcLA"
      width="100%"
      height="700"
    />
  </div>

  <h3>Malin Head to Derry</h3>

  <p>
    Thought the scenic route might be nice to go for. The route is about 43
    miles, and should take us past a bunch of coast, and through some nice
    valleys. The route has a few not so nice hills, but well worth getting
    through I think.
  </p>

  <p>
    This time, I think it would be good to get home from Derry, as there's a
    Goldline that heads towards Dungannon, and I can hop on the train to
    Belfast, or get the same bus, which is ultimately bound for Belfast
    (although takes 3 hours).
  </p>

  <div class="embed">
    <KomootEmbed
      title="Malin Head to Derry"
      tourId="1626332768"
      shareToken="agU8kFlEKbmYbdYyQQ6jaJfAcCnqg24yZPE1tFN96FHx5F1hFM"
      width="100%"
      height="700"
    />
  </div>
</article>

<style>
  .embed {
    display: flex;
    justify-content: center;
  }
</style>
