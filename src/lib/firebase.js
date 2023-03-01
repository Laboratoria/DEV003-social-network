import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './confirebase.js';

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};

export const authIngreso = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
