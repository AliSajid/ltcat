import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';

interface Profile {
  uid: string;
  email: string | null | undefined;
  name: string | null | undefined;
}

/**
 * Gets the profile of the user with the given ID.
 * @param id The ID of the user whose profile to get.
 * @returns The profile of the user with the given ID.
 */
export async function getProfile(id: string | null | undefined): Promise<Profile> {
  if (!id) {
    throw new Error('No ID provided');
  }
  const docRef = doc(db, 'profiles', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as Profile;
  } else {
    throw new Error('Profile does not exist');
  }
}

/**
 * Sets the profile of the user with the given ID.
 * @param id The ID of the user whose profile to set.
 * @param profile The profile to set.
 */
export async function setProfile(id: string, profile: Profile): Promise<void> {
  const docRef = doc(db, 'profiles', id);
  await setDoc(docRef, profile);
}

export default Profile;
