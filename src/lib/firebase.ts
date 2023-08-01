// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import {getPerformance} from 'firebase/performance';


const firebaseConfig = {
  apiKey: "AIzaSyDVeb6azdjnk1Ec3fgfWegvwyAAEETQPHs", // pragma: allowlist secret
  authDomain: "ltcat-340f7.firebaseapp.com",
  projectId: "ltcat-340f7",
  storageBucket: "ltcat-340f7.appspot.com",
  messagingSenderId: "733830252896",
  appId: "1:733830252896:web:1e75f66f8f7f3f036cf605",
  measurementId: "G-6PC24D198C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const performance = getPerformance(app);

export { app, analytics, db, auth, storage, performance }