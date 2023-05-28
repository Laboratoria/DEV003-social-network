import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAChZgu6qKMj4KIjx1Fc7U3I-tMGsovLgc",
  authDomain: "solidario-c5515.firebaseapp.com",
  projectId: "solidario-c5515",
  storageBucket: "solidario-c5515.appspot.com",
  messagingSenderId: "646872881528",
  appId: "1:646872881528:web:85a777136ba75bc117908d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const currentUser = auth.currentUser;
