<script lang="ts">
  import AuthCheck from '$lib/components/AuthCheck.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<AuthCheck>
  <div class="card w-96 card-normal text-primary-content">
    <div class="card-body items-center text-center">
      <h1 class="card-title">Profile</h1>
      <p class="card-subtitle">Welcome to your profile page</p>
    </div>
  </div>
</AuthCheck>
