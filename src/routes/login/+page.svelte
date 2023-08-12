<script lang="ts">
  import type { PageData } from '../$types';
  import { auth } from '$lib/firebase';
  import { signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from 'firebase/auth';
  import { goto } from '$app/navigation';

  async function signUpWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    console.info(credential);
    goto('/profile');
  }

  async function signUpWithGithub(): Promise<void> {
    const provider = new GithubAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    console.info(credential);
    goto('/profile');
  }

  async function signOutApp() {
    await signOut(auth);
  }

  export let data: PageData;
</script>

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
