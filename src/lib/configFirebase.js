// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyAqnOgyLr3ZeyxexofnFRtuH1vr-KRmJjE',
  authDomain: 'red-social-e7d89.firebaseapp.com',
  projectId: 'red-social-e7d89',
  storageBucket: 'red-social-e7d89.appspot.com',
  messagingSenderId: '949629336718',
  appId: '1:949629336718:web:b356bf0c1a873f814adddf',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


