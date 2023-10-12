<script lang="ts">
  import type { PageData } from './$types';
  import PodcastCard from '$lib/components/PodcastCard.svelte';

  import AuthCheck from '$lib/components/AuthCheck.svelte';

  export let data: PageData;
</script>

<AuthCheck>
  <h1 class="text-3xl">Feeds</h1>
  <div class="flex flex-wrap -mx-2">
    {#each data.feeds as feed}
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
        <PodcastCard title={feed.title} description={feed.description} image={feed.image} />
      </div>
    {/each}
  </div></AuthCheck
>
