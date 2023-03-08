import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { auth } from './confirebase.js';

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      location.href = '/#/';
      // console.log(user);
      // window.location
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(errorCode);
      // console.log(errorMessage);
    });
};

export const authIngreso = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      location.href = '/#/wall';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const post = (comment) => {
  // Add a new cocument with a generated id.
  const docRef = addDoc(collection(db, 'comentarios'), {
    name: 'comment',
  });
  console.log('Document written with ID: ', docRef.id);
};
