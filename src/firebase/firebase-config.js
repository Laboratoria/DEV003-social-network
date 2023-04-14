import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-7m2bCi0vkjLimvat7kAfGewBYLpZjH8',
  authDomain: 'lecture-app-a057e.firebaseapp.com',
  projectId: 'lecture-app-a057e',
  storageBucket: 'lecture-app-a057e.appspot.com',
  messagingSenderId: '866172084651',
  appId: '1:866172084651:web:deed89d21e922bc44c72ee',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
