// crear funciones de los metos de firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { collection, addDoc, getDocs, doc, deleteDoc,
} from 'firebase/firestore';
import { auth, db } from './configFirebase';
// crear la funcion para exportar y dentro de pella pegar el codigo de firebase

export const authCorreo = (email, contraseña) => {
  createUserWithEmailAndPassword(auth, email, contraseña)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // console.log(user);
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
  signInWithEmailAndPassword(auth, email, contraseña);
};

// Para crear  documentos
export const post = async (comentario) => {
  const docRef = await addDoc(collection(db, 'publicaciones'), {
    contenido: comentario,
  });
  // console.log('Document written with ID: ', docRef);
};

// funcion para traer POS DE FIRESTORE
export const publicacionesPost = async () => {
  // solo se obtiene la base de coleccion
  const querySnapshot = await getDocs(collection(db, 'publicaciones'));
  // declaracion de arreglo y despues retonarlo , para luego recorrerlo
  const posteos = [];
  querySnapshot.forEach((doc) => {
    posteos.push({ ...doc.data(), id: doc.id });
  });
  // retornar el arreglo creado
  return posteos;
};

export const eliminarPost = (id) => {
  // console.log("=>", id)
  deleteDoc(doc(db, 'publicaciones', id));
};