import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';
// import { async } from 'regenerator-runtime';
import { auth, db } from './confirebase.js';

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
// agregar comentario en la base de datos
export const publication = (message) => {
  const dbRef = addDoc(collection(db, 'posts'), {

    // email: '',
    // name: '',
    message,
  });
  console.log(dbRef.id);
};

// La función showPosts utiliza getDocs para obtener todos los documentos de la colección posts
const showPosts = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const ul = document.getElementById('chatUl');
  // luego itera sobre cada documento usando forEach
  querySnapshot.forEach((doc) => {
    // para cada documento se obtiene el texto post doc.data().message y se agrega a la ul como un nuevo elemento li
    const post = doc.data().message;
    const li = document.createElement('li');
    li.innerHTML = `<span class='messageContent'>${post}</span>`;
    ul.appendChild(li);
  });
};

// Llamar a la función showPosts cuando se carga la página
window.addEventListener('load', showPosts);




/*
// La función showPosts utiliza getDocs para obtener todos los documentos de la colección posts
const showPosts = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const ul = document.getElementById('chatUl');
  // luego itera sobre cada documento usando forEach
  querySnapshot.forEach((doc) => {
    // para cada documento se obtiene el texto post doc.data().message y se agrega a la ul como un nuevo elemento li
    const post = doc.data().message;
    const li = document.createElement('li');
    li.textContent = post;
    ul.appendChild(li);
  });
};

// Llamar a la función showPosts cuando se carga la página
window.addEventListener('load', showPosts);

li.innerHTML = `
      <span class='messageContent'>${message}</span>
    `;
*/
