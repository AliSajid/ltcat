<script lang="ts">
  import { goto } from '$app/navigation';
  import { auth } from '$lib/firebase';
  import { user } from '$lib/users';
  import { signOut } from 'firebase/auth';

  /**
   * Signs out the current user from the application.
   * @returns A Promise that resolves when the user is signed out.
   */
  async function handleLogout(): Promise<void> {
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
