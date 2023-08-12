<script lang="ts">
  import type { PageData } from './$types';
  import { auth } from '$lib/firebase';
  import { signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from 'firebase/auth';

  async function signUpWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    console.info(credential);
  }

  async function signUpWithGithub(): Promise<void> {
    const provider = new GithubAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    console.info(credential);
  }

  async function signOutApp() {
    await signOut(auth);
  }

  export let data: PageData;
</script>

<div class="card">
  <button class="btn btn-primary" on:click={signUpWithGithub}> Sign up with Github </button>

  <button class="btn btn-primary" on:click={signUpWithGoogle}> Sign up with Google </button>
</div>
