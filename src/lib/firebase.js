import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';
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
export const publication = async (message) => {
  const user = await getCurrentUser();
  // console.log(user);
  // console.log(auth.currentUser);
  if (email && message) {
    const email = user.email;
    //  console.log(email);
    //const uid = user.uid;
    const dbRef = await addDoc(collection(db, 'posts'), {

     // uid,
      email,
      message,
    });
    console.log(dbRef.id);
  }
};

// La función showPosts utiliza getDocs para obtener todos los documentos de la colección posts
const showPosts = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const ul = document.getElementById('chatUl');
  // luego itera sobre cada documento usando forEach
  querySnapshot.forEach((doc) => {
    // para cada doc. se obtiene el texto post doc.data().message y se agrega a la ul como un nuevo elemento li

    const email = doc.data().email;
    const message = doc.data().message;
    //const uid = doc.data().uid;
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button2');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => {
    // agregar la función pra eliminar contenido
    });
    console.log(doc.data());
    li.textContent = `${email}:\n${message}`;
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  });
};

// Llamar a la función showPosts cuando se carga la página
window.addEventListener('load', showPosts);

const getCurrentUser = async () => {
  const user = auth.currentUser;
  if (user) {
    await user.reload(); // actualizar la información del usuario
    return user;
  }
  return null;
};

/*
const li = document.createElement('li');
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Eliminar';
deleteBtn.addEventListener('click', () => {
  // Agregar el código para eliminar la publicación
});
li.textContent = `${email}: ${message} `;
li.appendChild(deleteBtn);
ul.appendChild(li); */
