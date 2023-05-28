// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0K-XDmTKoYZNXG79vsg6OHkkCNWdsl90",
  authDomain: "solidaridad-e33df.firebaseapp.com",
  projectId: "solidaridad-e33df",
  storageBucket: "solidaridad-e33df.appspot.com",
  messagingSenderId: "280703507175",
  appId: "1:280703507175:web:b3c11d9a44c15a73fd6042",
  measurementId: "G-B9E64QFNGB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
