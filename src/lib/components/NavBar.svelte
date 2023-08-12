<script lang="ts">
  import { goto } from '$app/navigation';
  import { auth } from '$lib/firebase';
  import { user } from '$lib/users';
  import { signOut } from 'firebase/auth';

  async function handleLogout() {
    await signOut(auth);
    goto('/');
  }
</script>

<nav class="navbar bg-primary text-secondary-content">
  <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
  <a href="/profile" class="btn btn-ghost normal-case text-xl">Profile</a>
  <a href="/feeds" class="btn btn-ghost normal-case text-xl">Feeds</a>
  {#if $user}
    <a href="/" class="btn btn-ghost normal-case text-xl" on:click|preventDefault={handleLogout}>Logout</a>
  {:else}
    <a href="/login" class="btn btn-ghost normal-case text-xl">Login</a>
  {/if}
</nav>
