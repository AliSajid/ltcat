import { auth, db } from '$lib/firebase';
import { derived, writable, type Readable } from 'svelte/store';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { browser } from '$app/environment';
import { doc, onSnapshot } from 'firebase/firestore';

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

/**
 * Creates a writable store that subscribes to changes in a Firestore document.
 * @template T - The type of data stored in the Firestore document.
 * @param path - The path to the Firestore document.
 * @returns
 *
 *
 *
 *  - An object with three properties:
 * - `subscribe`: a writable store that subscribes to changes in the Firestore document.
 * - `ref`: a reference to the Firestore document.
 * - `id`: the ID of the Firestore document.
 */
export function docStore<T>(path: string) {
  let unsubscribe: () => void;

  const docRef = doc(db, path);

  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}

interface UserData {
  userId: string;
  displayName: string;
  photoURL: string;
}

/**
 * Creates a derived store that subscribes to changes in the Firestore document for the current user.
 */
export const userData: Readable<UserData | null> = derived(user, ($user, set) => {
  if ($user) {
    return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null);
  }
});
