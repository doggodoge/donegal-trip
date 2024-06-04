<div class="content">
  <h1>Donegal Trip 🚴‍♂️</h1>

  <nav class="nav">
    <a href="/">Home</a>
    <a href="/routes">Routes</a>
    <a href="/transport">Transport</a>
    <a href="/accommodation">Accommodation</a>
  </nav>

  <main>
    <slot></slot>
  </main>
</div>

<style>
  .content {
    font-family: sans-serif;
    max-width: 70rem;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }

  .nav {
    display: flex;
    gap: 2ch;
    padding-bottom: 1rem;
    flex-wrap: wrap;
  }
</style>
