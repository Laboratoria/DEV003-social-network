// crear funciones de los metos de firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line import/no-unresolved
import { auth } from './lib/functionFirebase';
// crear la funcion para exportar y dentro de pella pegar el codigo de firebase




export const authCorreo = () => {
// const email = document.querySelector('#email').value;
// const contraseña = document.querySelector('#contraseña').value;
//  console.log(email,"email..")
//  console.log(contraseña,"contraseña")


  createUserWithEmailAndPassword(auth, email, contraseña)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });
}