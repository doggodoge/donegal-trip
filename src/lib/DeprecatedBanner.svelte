<script lang="ts">
  let bannerElement: HTMLDivElement;

  function closeBanner() {
    bannerElement.style.display = 'none';
  }
</script>

<div bind:this={bannerElement} class="banner">
  <p>
    This trip has now passed. The site will remain up until it starts costing me
    money.
  </p>
  <button on:click={closeBanner} class="close-button">x</button>
</div>

<style>
  .banner {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: yellow;
    height: 2rem;
    padding: 1rem;
    border-style: solid;
    border-radius: 0.3rem;
  }

  .close-button {
    border: none;
    border-bottom: solid;
    background-color: yellow;
    transition: 100ms;
  }

  .close-button:hover {
    filter: brightness(85%);
  }

  .close-button:active {
    filter: brightness(75%);
  }
</style>
