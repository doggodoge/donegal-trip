<script lang="ts">
  type RouteAndName = {
    href: string;
    name: string;
  };

  const routes: RouteAndName[] = [
    { href: '/', name: 'Home' },
    { href: '/routes', name: 'Routes' },
    { href: '/transport', name: 'Transport' },
    { href: '/accommodation', name: 'Accom' },
    { href: '/stops', name: 'Stops' },
  ];
</script>

<svelte:head>
  <title>Donegal Trip</title>
  <meta
    name="description"
    content="Small info site containing information about an upcoming cycling trip."
  />
  <meta property="og:title" content="Donegal Trip" />
  <meta
    property="og:description"
    content="Small info site containing information about an upcoming cycling trip."
  />
  <meta property="og:url" content="https://derry.garymoore.ie" />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="content">
  <h1>Donegal Trip 🚴‍♂️</h1>

  <nav class="nav">
    {#each routes as route (route.href)}
      <a class="shadow" href={route.href}>{route.name}</a>
    {/each}
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
    gap: 1rem;
    padding-bottom: 1rem;
    flex-wrap: wrap;
  }

  .nav a {
    background: #32322c;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    color: white;
    text-decoration: none;
  }

  .shadow {
    box-shadow:
      0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition: 100ms;
  }
</style>
