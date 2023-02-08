import { getAuth, signOut } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  getDocs,
} from 'firebase/firestore';
import { db } from '../lib/firebase-app';

const auth = getAuth();
// const fs = getFirestore();

export default () => {
  const viewTimeline = /* html */ `
  <!--<img class = "fondoLogin" src = "images/fondoLogin.png">-->
  <header class="header">
    <nav class="nav">
      <h1>cakeBook</h1>
      <div class="btn-signOut">
        <button type="button" class="signOut" id="signOut">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </nav>
  </header>
  <div class="containerTimeline">
    <div class="myPosts">
       <h2>¿Qué vamos a compartir hoy?</h2>
        <div class="header-post"> 
          <div class="img-perfil">
            <img src="./img/userPic.png" alt="" class="imgUser">
          </div>
          <textarea class="myPosts" class="text-post" id="post" placeholder="" ></textarea>
        </div>
      <ul class="nav-myPost">
        <li><button class="postBtn">Foto</button></li>
        <li><button class="postBtn">Publicar</button></li>
      </ul> 
    </div>
    <div id="list-posts">
    </div>
    <template id="posts">
      <div class="myPosts">
        <div class="header-post"> 
          <div class="img-perfil">
            <img src="./img/userPic.png" alt="" class="imgUser">
          </div>
          <h2 id="user-name">User-name</h2> 
        </div>
        <div>
          <!-- <img src="./img/image-post.png" alt="" class="imgUser">-->
          <p id="description">Aquí va el post</p>
        </div>
        <!--<ul class="nav-myPost">
          <li><button class="postBtn">Liked</button></li>
          <li><button class="postBtn">Editar</button></li>
          <li><button class="postBtn">Eliminar</button></li> 
        </ul>-->
      </div>
    </template>    
  </div>
  `;
  document.querySelector('.footer').style.display = 'flex';

  const cakebookContainer = document.createElement('div');
  cakebookContainer.classList.add('cakebook-container');
  cakebookContainer.innerHTML = viewTimeline;
  return cakebookContainer;
};

export const init = () => {
  const buttonSignOut = document.getElementById('signOut');
  buttonSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        history.pushState(null, null, '/');
      })
      .catch((error) => {
        console.log(error);
      });
    document.querySelector('.footer').style.display = 'none';
  });

  // POSTS;
  const templatePosts = document.getElementById('posts');
  const containerListPosts = document.getElementById('list-posts');
  const setupPosts = (data) => {
    if (data) {
      data.forEach((doc) => {
        const dataPost = doc.data();
        const cloneTemplatePosts = document.importNode(
          templatePosts.content,
          true
        );
        const h2title = cloneTemplatePosts.getElementById('user-name');
        const pDescription = cloneTemplatePosts.getElementById('description');
        h2title.textContent = dataPost.title;
        pDescription.textContent = dataPost.description;
        containerListPosts.appendChild(cloneTemplatePosts);
      });
    } else {
      containerListPosts.textContent = 'No hay publicación';
    }
  };

  // events
  // list posts for auth state changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      getDocs(collection(db, 'post')).then((querySnapshot) => {
        setupPosts(querySnapshot);
        // querySnapshot.forEach((doc) => {
        //   console.log(doc.data());
        // });
      });
    } else {
      history.pushState(null, null, '/');
    }
  });
};
