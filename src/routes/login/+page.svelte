<script lang="ts">
  // import type { PageData } from '../$types';
  import { auth } from '$lib/firebase';
  import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
  import { goto } from '$app/navigation';
  import { user } from '$lib/users';
  import { getProfile, setProfile } from '$lib/interfaces/profile';

  /**
   * Signs up the user with Google authentication provider.
   * @returns A Promise that resolves when the user is signed up.
   */
  async function signUpWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    console.info(credential);
    try {
      await getProfile(credential.user.uid);
    } catch (error) {
      await setProfile(credential.user.uid, {
        name: credential.user.displayName,
        email: credential.user.email,
        uid: credential.user.uid,
      });
    }
    goto('/profile');
  }

  /**
   * Signs up the user with Github authentication provider.
   * @returns A Promise that resolves when the user is signed up.
   */
  async function signUpWithGithub(): Promise<void> {
    const provider = new GithubAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    console.info(credential);
    goto('/profile');
  }

  // export let data: PageData;
</script>

{#if !$user}
  <div class="card w-96 card-normal text-primary-content">
    <div class="card-body items-center text-center">
      <h1 class="card-title">Sign Up</h1>
      <button class="btn btn-primary card-actions w-4/5 rounded-s text-center" on:click={signUpWithGithub}
        >Sign up with Github</button
      >
      <button class="btn btn-primary card-actions justify-center w-4/5 rounded-s" on:click={signUpWithGoogle}
        >Sign up with Google</button
      >
    </div>
  </div>
{:else}
  <div class="card w-96 card-normal text-primary-content">
    <div class="card-body items-center text-center">
      <h1 class="card-title">Hello, {$user.displayName}</h1>
      <h2 class="card-title">You are already logged in</h2>
    </div>
  </div>
{/if}
