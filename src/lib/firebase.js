import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {
  collection, addDoc, getDocs, deleteDoc, doc,
} from 'firebase/firestore';
import { auth, db } from './confirebase.js';

export const getCurrentUser = async () => {
  const user = auth.currentUser;
  if (user) {
    await user.reload(); // actualizar la información del usuario
    return user;
  }
  return null;
};
export const deleteComment = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
};

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

// La función showPosts utiliza getDocs para obtener todos los documentos de la colección posts
const showPosts = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const ul = document.getElementById('chatUl');
  // luego itera sobre cada documento usando forEach
  querySnapshot.forEach((postDoc) => {
    // para cada doc. se obtiene el texto post doc.data().message y se agrega a la ul como un nuevo elemento li

    const email = postDoc.data().email;
    const message = postDoc.data().message;
    // const uid = doc.data().uid;
    const likes = postDoc.data().likes; // Obtener número de likes
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button2');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => {
    // agregar la función pra eliminar contenido
      deleteComment(postDoc.id);
      li.remove();
    });
    console.log(postDoc.data());
    const likeBtn = document.createElement('button'); // Agregar botón de "Me gusta"
    const heartIcon = document.createElement('img'); // crear una imagen para el corazón
    heartIcon.src = 'src="./css/img/favorite_FILL1_wght700_GRAD200_opsz40.svg" alt="heat"';// definir la ruta de la imagen del corazón
    heartIcon.classList.add('heart-icon'); // agregar una clase para dar estilo a la imagen
    likeBtn.appendChild(heartIcon); // agregar la imagen al botón
    likeBtn.classList.add('like-btn'); // agregar una clase para dar estilo al botón
    likeBtn.textContent = `Me gusta (${likes})`;
    likeBtn.addEventListener('click', async () => {
      await updateLikes(postDoc.id, likes + 1); // Actualizar número de likes en la base de datos
      likes++; // actualizar la variable local de likes
      likeBtn.textContent = `Me gusta (${likes})`; // Actualizar número de likes en la interfaz de usuario
    });
    li.innerHTML = `<span class="email">${email}:</span>
  <span class="message">${message}</span>`;
    li.appendChild(deleteBtn);
    li.appendChild(likeBtn); // Agregar botón de "Me gusta"
    ul.appendChild(li);
  });
};
export const updateLikes = async (id, likes) => {
  await updateDoc(doc(db, 'posts', id), {
    likes,
  });
};

// Llamar a la función showPosts cuando se carga la página
window.addEventListener('load', showPosts);
