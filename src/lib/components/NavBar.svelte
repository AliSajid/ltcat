<script>
  import { user } from '$lib/users';
</script>

<nav class="navbar bg-primary text-secondary-content">
  <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
  <a href="/profile" class="btn btn-ghost normal-case text-xl">Profile</a>
  <a href="/feeds" class="btn btn-ghost normal-case text-xl">Feeds</a>
  {#if user}
    <a href="/logout" class="btn btn-ghost normal-case text-xl">Logout</a>
  {:else}
    <a href="/login" class="btn btn-ghost normal-case text-xl">Login</a>
  {/if}
</nav>
