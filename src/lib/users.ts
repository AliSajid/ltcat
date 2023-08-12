import { auth } from '$lib/firebase';
import { writable } from 'svelte/store';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { browser } from '$app/environment';

/**
 * Creates a writable store that tracks the current user's authentication state using the Firebase Authentication library.
 * If Firebase Auth is not initialized or we are rendering on the server, returns a store with a null value.
 * @returns An object with a `subscribe` method that can be used to subscribe to changes in the user's authentication state.
 * The `subscribe` method takes a callback function as its argument, which is called whenever the value of the store changes.
 * The callback function is passed the new value of the store as its argument.
 */
function userStore(): { subscribe: (callback: (value: User | null) => void) => void } {
  let unsubscribe: () => void;

  if (!auth || !browser) {
    console.warn('Firebase auth not available');
    const { subscribe } = writable<User | null>(null);
    return { subscribe };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();
