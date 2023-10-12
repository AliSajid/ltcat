<script lang="ts">
  import AuthCheck from '$lib/components/AuthCheck.svelte';
  import { getProfile } from '$lib/interfaces/profile';
  import { user } from '$lib/users';
  import type Profile from '$lib/interfaces/profile';

  let text: string;
  let profile: Profile;

  async function loadProfile() {
    if ($user) {
      profile = await getProfile($user.uid);
    } else {
      profile = {
        name: 'No user',
        email: 'NoUser@example.com',
        uid: 'Tm8gVXNlcgo=',
      };
      console.log('No user');
    }
  }

  loadProfile();
</script>

<AuthCheck>
  <div class="card w-96 card-normal text-primary-content">
    <div class="card-body items-center text-center">
      <h1 class="card-title">Profile</h1>
      <div class="card-subtitle">
        <p class="text-black">Welcome to your profile page</p>
        <p class="text-black">Your name is {profile.name}</p>
        <p class="text-black">Your email is {profile.email}</p>
        <p class="text-black">Your uid is {profile.uid}</p>
      </div>
    </div>
  </div>
  <form action="submit" class="form-control">
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" bind:value={text} />
    <button class="btn btn-primary" type="submit" on:click|preventDefault={() => console.log(text)}>Submit</button>
  </form>
</AuthCheck>
