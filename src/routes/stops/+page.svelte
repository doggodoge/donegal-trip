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
    attributionText="By D LN"
    attributionHref="https://commons.wikimedia.org/w/index.php?curid=88231585"
    licenseType="CC BY-SA"
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

  <h3>Pound Town</h3>

  <p>
    Mitchell wants me to stop here to get a photo with the Pound town road sign
    that's there. Won't take too long 😂
  </p>

  <h4>Location</h4>

  <Stop
    location={{
      lat: 55.2055,
      lon: -6.97922,
    }}
    zoom={14}
  />

  <h3>Mc Laughlins</h3>

  <p>
    This is a wee shop we can stop at to get some things if we need them. We
    need to go past this place anyway, handy in case we need something.
  </p>

  <h4>Location</h4>
<!-- https://www.openstreetmap.org/?mlat=55.20451&mlon=-6.99083#map=18/55.20451/-6.99083&layers=C -->
  <Stop
    location={{
      lat: 55.20451,
      lon: -6.99083,
    }}
    zoom={16}
  />

  <h3>Magilligan Point View</h3>

  <p>Pretty panoramic view of Magilligan Point in Co Derry.</p>

  <h4>Location</h4>

  <!-- https://www.openstreetmap.org/?mlat=55.22402&mlon=-7.01397#map=19/55.22402/-7.01397&layers=C -->
  <Stop
    location={{
      lat: 55.22402,
      lon: -7.01397,
    }}
    zoom={14}
  />

  <p><em>More to come...</em></p>
</article>
