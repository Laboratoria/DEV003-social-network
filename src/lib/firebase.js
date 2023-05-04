import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {
  collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, orderBy,
} from 'firebase/firestore';
import { auth, db } from './confirebase.js';

// obtener usuario actual
export const getCurrentUser = async () => {
  const user = auth.currentUser;
  if (user) {
    await user.reload(); // actualizar la información del usuario
    return user;
  }
  return null;
};
// eliminar comentario de la base de datos
export const deleteComment = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};
// crear usuario con correo electrónico y contraseña
export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Signed in
      // const user = userCredential.user;
      window.location.href = '/#/';
      // console.log(user);
      // window.location
    })
    .catch(() => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(errorCode);
      // console.log(errorMessage);
    });
};
// iniciar sesión con correo electrónico y contraseña
export const authIngreso = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Signed in
      // const user = userCredential.user;
      window.location.href = '/#/wall';
      // ...
    })
    .catch(() => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });
};
// agregar comentario en la base de datos
export const publication = async (message) => {
  const user = await getCurrentUser();
  const email = user.email;
  // console.log(user);
  // console.log(auth.currentUser);
  if (email && message) {
    //  console.log(email);
    // const uid = user.uid;
    const dbRef = await addDoc(collection(db, 'posts'), {

      // uid,
      email,
      message,
      likes: 0, // agregar propiedad 'likes' inicializada en 0
    });
    console.log(dbRef.id);
  }
};

export const updateLikes = async (id, likes) => {
  await updateDoc(doc(db, 'posts', id), {
    likes,
  });
};
// obtener y mostrar los comentarios de la base de datos
// La función showPosts utiliza getDocs para obtener todos los documentos de la colección posts
const showPosts = async () => {
  const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy('message', 'asc')));
  const ul = document.getElementById('chatUl');
  // luego itera sobre cada documento usando forEach
  querySnapshot.forEach((postDoc) => {
    // cada doc. obtiene post doc.data().message y se agrega a la ul como un nuevo elemento li
    // console.log(ul);
    const email = postDoc.data().email;
    const message = postDoc.data().message;
    // const uid = doc.data().uid;
    let likes = postDoc.data().likes; // Obtener número de likes

    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    const likeBtn = document.createElement('button'); // Agregar botón de "Me gusta"

    likeBtn.classList.add('like-btn'); // agregar una clase para dar estilo al botón
    likeBtn.textContent = `Me gusta (${likes})`;
    likeBtn.addEventListener('click', async () => {
      await updateLikes(postDoc.id, likes + 1); // Actualizar número de likes en la base de datos
      likes += 1; // actualizar la variable local de likes
      likeBtn.textContent = `Me gusta (${likes})`; // Actualizar número de likes en la interfaz de usuario
    });
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => {
      // agregar la función pra eliminar contenido
      deleteComment(postDoc.id);
      li.remove();
    });
    // console.log(postDoc.data());

    li.innerHTML = `<span class="email">${email}:</span>
  <span class="message">${message}</span>`;
    li.appendChild(deleteBtn);
    li.appendChild(likeBtn); // Agregar botón de "Me gusta"
    ul.appendChild(li); // Cambiar append por prepend para la lista descendente
  });
};

// Llamar a la función showPosts cuando se carga la página
window.addEventListener('load', showPosts);
