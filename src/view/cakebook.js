import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

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
    <div class="friendsPosts">
      <div class="friendPic">
        <button type="button" class="userPicBtn"><img src="./img/userPic.png" alt="" class="imgUser"></button>
      </div>
      <div class="friendsText">
        <h2>User</h2>
        <p>post</p>
      </div>
    </div>
  </div>
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
      }); document.querySelector('.footer').style.display = 'none';
  });

  auth.onAuthStateChanged((user) => {
    if (!user) {
      history.pushState(null, null, '/');
    }
  });
};
