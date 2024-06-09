<script context="module" lang="ts">
  export type Location = {
    lat: number;
    lon: number;
  };
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import mapboxgl from "mapbox-gl";

  export let location: Location;
  export let zoom: number = 14;
  export let imgSrc: string = '';
  export let attributionText: string = '';
  export let attributionHref: string = '';

  let map;
  let mapDiv: HTMLDivElement;

  onMount(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAP_KEY;
    map = new mapboxgl.Map({
      container: mapDiv,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [location.lon, location.lat],
      zoom,
    });

    new mapboxgl.Marker().setLngLat([location.lon, location.lat]).addTo(map);
  });
</script>

<div class="container">
  {#if imgSrc !== ''}
    <div class="image-and-attr">
      <enhanced:img src={imgSrc} alt={attributionText ?? ""} />
    </div>
  {/if}
  <div id="map" bind:this={mapDiv} />
</div>
{#if attributionText !== ''}
  <p>
    {attributionText}
    {#if attributionHref}, <a href={attributionHref}>Link</a>{/if}
  </p>
{/if}

<style>
  #map {
    display: flex;
    width: 100%;
    height: 350px;
  }

  img {
    display: flex;
    width: auto;
    height: 350px;
  }

  .container {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media (max-width: 1280px) {
      flex-direction: column;
    }
  }

  .image-and-attr {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
</style>
