<script lang="ts">
  export let title: string;
  export let tourId: string;
  export let shareToken: string;
  export let width: string;
  export let height: string;
</script>

<iframe
  {title}
  src={`https://www.komoot.com/tour/${tourId}/embed?share_token=${shareToken}&profile=1`}
  {width}
  {height}
  frameborder="0"
  scrolling="no"
></iframe>
