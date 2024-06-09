<script>
  import Stop from "$lib/Stop.svelte";
</script>

<article>
  <header><h2>Accommodation</h2></header>

  <p>
    Going to be staying in a small wee village with a bar and a beach called
    Sleivebane. Booked into a wee cabin with a sofa bed and normal bed from the
    15th to the 16th of June.
  </p>

  <p>
    <a href="https://www.airbnb.co.uk/rooms/16707164"
      >Airbnb accommodation link</a
    >.
  </p>

  <h3>Map</h3>

  <Stop
    location={{
      lat: 55.3686,
      lon: -7.33703,
    }}
    zoom={15}
  />
</article>
