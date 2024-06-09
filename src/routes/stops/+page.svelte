<script>
  import Stop from "$lib/Stop.svelte";
  import { MussendenTemple } from "$lib";
</script>

<article>
  <header><h2>Stops</h2></header>

  <h3>Mussenden Temple</h3>

  <p>We're going past this place anyway, may as well visit.</p>

  <h4>Location</h4>

  <Stop
    imgSrc={MussendenTemple}
    attributionText="by D LN, CC BY-SA 4.0"
    attributionHref="https://commons.wikimedia.org/w/index.php?curid=88231585"
    location={{ lat: 55.16776, lon: -6.81097 }}
    zoom={17}
  />

  <h3>Point bar</h3>

  <p>
    First stop at the Foyle ferry port while we wait for the ferry. We may or
    may not have enough time for this, depends how quick that ferry is.
  </p>

  <h4>Location</h4>

  <Stop
    location={{
      lat: 55.19127769796368,
      lon: -6.964640021324158,
    }}
    zoom={16}
  />

  <p><em>More to come...</em></p>
</article>
