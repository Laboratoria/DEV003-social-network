// crear funciones de los metos de firebase
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
// import { changeView } from '../controler/routers';
// eslint-disable-next-line import/no-duplicates
// import { signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line import/no-unresolved
import { auth } from './configFirebase';
// crear la funcion para exportar y dentro de pella pegar el codigo de firebase

export const authCorreo = (email, contraseña) => {
  createUserWithEmailAndPassword(auth, email, contraseña)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      //ejemplo para cambiar de pag//
      //changeView('home');
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, 'hola');
      console.log(errorMessage, 'hola3');
      // ..
    });
};

export const authSesion = (email, contraseña) => {
  signInWithEmailAndPassword(auth, email, contraseña)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode= error.code;
      const errorMessage= error.message;
    });
};
