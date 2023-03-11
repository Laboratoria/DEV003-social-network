import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDOqcsR5E7aGB4jsqTR7R18zLRaAUICwaY',
  authDomain: 'chile-solidario.firebaseapp.com',
  projectId: 'chile-solidario',
  storageBucket: 'chile-solidario.appspot.com',
  messagingSenderId: '211458870485',
  appId: '1:211458870485:web:cb20e639de0d4025f0665c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
