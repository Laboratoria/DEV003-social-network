import { footer } from '../../components/footer.js';
import {
  addPost, onGetPost, postEdit, deletePost, removeLike, addLike, logout,
} from '../../firebase/firebase.js';
import { auth } from '../../firebase/firebase-config';

import logo from '../../assets/logo.webp';
import anonUser from '../../assets/anonymous-user.png';

export const dashboard = () => {
  const viewDashboard = document.createElement('div');
  viewDashboard.classList.add('post-container');
  viewDashboard.innerHTML = `
    <header>
      <div class="logo-container">
        <img src=${logo} />
        <h1>PURRFECT BOOKS</h1>
        <button type="button" id="logout-btn"></button>
      </div>
      </header>
<main>
  <section class="create-post">
    <article>
      <div>
          <h3>Escribe una reseña</h3>
        <form class="post-form" id="post-form">
            <input type="hidden" id="post-id" value="">
            <div class="wrap">
            <input type="text" id="post-title" placeholder="Titulo del libro">
            </div>
            <div>
            <textarea id="post-description" placeholder="Reseña"></textarea> 
            </div>
          <div class="btn-save-container">
            <button class="button-post-save" id="button-post-save">Publicar</button>
          </div>
        </form>
      </div>
    </article>
  </section>
      <section>
        <div id="posts-container">
      </section>
</div>
</main>
  `;
  // Se refresca sola la pagina y se crean los post
  onGetPost((querySnapshot) => {
    let html = '';
    const postsContainer = document.getElementById('posts-container');
    // itera sobre los docuemntos
    querySnapshot.forEach((doc) => {
      // extrae los datos
      const post = doc.data();
      html += `
      <article>
        <div class="user-info">
          <img src=${post.photo ? post.photo : anonUser}>
          <p>${post.name ? post.name : post.username}</p>
        </div>
        `;
      // si coinciden
      if (post.userId === auth.currentUser.uid) {
        html += `
        <div class="admin-btns">
          <button type="button" class='eliminar' data-id='${doc.id}'></button>
          <button type="button" class="edit-button" data-id='${JSON.stringify({ post, id: doc.id })}'></button>
          </div>
        <div class="user-post">
          <p>${post.title}</p>
          <span>${post.description}</span>
          </div>
          <div class="likes-container">
          <button type="button" class="like-button" data-id= '${JSON.stringify({ post, id: doc.id })}'></button>
          <p>A ${post.likesCounter} personas les ha gustado esto.</p>
          </div>
      </article>
    `;
      } else {
        html += `<div class="user-post">
          <p>${post.title}</p>
          <span>${post.description}</span>
          </div>
          <div class="likes-container">
          <button type="button" class="like-button" data-id= '${JSON.stringify({ post, id: doc.id })}'></button>
          <p>A ${post.likesCounter} personas les ha gustado esto.</p>
          </div>
      </article>
    `;
      }
    });
    postsContainer.innerHTML = html;

    // funcion editar
    const btnEditPost = postsContainer.querySelectorAll('.edit-button');
    btnEditPost.forEach((button) => {
      // para acceder al dataset que contiene el id y el nombre del post
      button.addEventListener('click', ({ target: { dataset } }) => {
        // para acceder al dataset que contiene el id y el nombre del post
        const { post, id } = JSON.parse(dataset.id);
        const inputTitle = viewDashboard.querySelector('#post-title');
        const inputDescription = viewDashboard.querySelector('#post-description');
        const inputId = viewDashboard.querySelector('#post-id');
        // Se establece el valor de los campos
        inputTitle.value = post.title;
        inputDescription.value = post.description;
        inputId.value = id;
        // empezar a editar inmediatamente
        inputTitle.focus();
      });
    });

    // funcion borrar post
    const btnDelete = postsContainer.querySelectorAll('.eliminar');
    btnDelete.forEach((button) => {
      button.addEventListener('click', ({ target: { dataset } }) => {
        // eslint-disable-next-line no-restricted-globals
        const isConfirmed = confirm('¿Está seguro de que desea eliminar esta publicación?');
        if (isConfirmed) {
          deletePost(dataset.id);
        }
      });
    });

    // funcion dar like
    const likeButton = postsContainer.querySelectorAll('.like-button');
    // iterar sobre cada boton
    likeButton.forEach((like) => {
      // para acceder al dataset que contiene el id y el nombre del post
      like.addEventListener('click', ({ target: { dataset } }) => {
        // analiza y extrae post y el id
        const { post, id } = JSON.parse(dataset.id);
        // se obtinee el id del ussuaio registrado
        const userId = auth.currentUser.uid;
        const postId = id;
        console.log(userId, postId);
        // se comprueba si el id del usuario esta en la lista de likes
        if (post.likes.includes(userId)) {
          removeLike(userId, postId);
        } else {
          addLike(userId, postId);
        }
      });
    });
  });

  // ADDING POST
  const dashboardPost = viewDashboard.querySelector('#button-post-save');
  dashboardPost.addEventListener('click', (e) => {
    e.preventDefault();
    const title = viewDashboard.querySelector('#post-title').value;
    const description = viewDashboard.querySelector('#post-description').value;
    const id = viewDashboard.querySelector('#post-id').value;
    if (title === '' || description === '') {
      alert('Debes completar todos los campos');
      // Si los campos de entrada están completos y no se ha proporcionado un valor de id
    } else if (!id) {
      addPost(title, description);
      viewDashboard.querySelector('#post-form').reset();
    } else {
      // eslint-disable-next-line no-restricted-globals
      const isConfirmed = confirm('¿Está seguro de que desea guardar los cambios en esta publicación?');
      if (isConfirmed) {
        postEdit(id, title, description);
        viewDashboard.querySelector('#post-form').reset();
      }
    }
  });

  // LOGOUT BUTTON
  viewDashboard.querySelector('#logout-btn').addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  });

  viewDashboard.appendChild(footer());
  return viewDashboard;
};
