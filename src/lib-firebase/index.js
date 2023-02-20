/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1E6v0tl-VMKi90Oqck7ywqNNbgBj6lBE",
  authDomain: "beat-1-29ed1.firebaseapp.com",
  projectId: "beat-1-29ed1",
  storageBucket: "beat-1-29ed1.appspot.com",
  messagingSenderId: "95473403789",
  appId: "1:95473403789:web:c3d43d3ca3251e2a029fc4",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// función de autenticación
const auth = getAuth();
export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
//función de google provider

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
}
console.log(loginWithGoogle);
