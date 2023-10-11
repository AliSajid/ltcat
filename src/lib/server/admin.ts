import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { FB_PRIVATE_KEY, FB_CLIENT_EMAIL, FB_PROJECT_ID } from '$env/static/private';
import pkg from 'firebase-admin';
import type FirebaseCredentials from '$lib/interfaces/firebase-credentials';

try {
  const firebaseConfig: FirebaseCredentials = {
    projectId: FB_PROJECT_ID,
    privateKey: FB_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: FB_CLIENT_EMAIL,
  };
  pkg.initializeApp({
    credential: pkg.credential.cert(firebaseConfig),
  });
} catch (error: any) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const adminDb = getFirestore();
export const adminAuth = getAuth();
