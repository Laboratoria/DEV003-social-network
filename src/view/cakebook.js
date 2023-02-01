import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

export default () => {
  const viewTimeline = /* html */ `
  <div id="container">
  <!--<img class = "fondoLogin" src = "images/fondoLogin.png">-->
  <div class="title">
    <h1>cakeBook</h1>
    <button type="button" id="signOut">
    <i class="fas fa-sign-out-alt"></i>
    </button>
  </div>
  <div class="containerTimeline">
  <div class="myPosts">
    <h2>¿Qué vamos a compartir hoy?</h2>
    <p>post</p>
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
  <div class="menu">
  <button type="button" class="btnMenu" id="homeBtn"><i class="fas fa-home"></i></button>
  <button type="button" class="btnMenu" id="searchBtn"><i class="fas fa-search"></i></button>
  <button type="button" class="btnMenu" id="postBtn"><i class="fas fa-plus"></i></button>
  <button type="button" class="btnMenu" id="friendsBtn"><i class="fas fa-users"></i></button>
  <button type="button" class="btnMenu" id="perfilBtn"><i class="fas fa-user-circle"></i></button>
  </div>
</div>
  `;

  const linkElement = document.getElementById('link');
  linkElement.setAttribute('href', '/cakebook.css');
  const cakebookContainer = document.createElement('div');
  cakebookContainer.classList.add('login-container');
  cakebookContainer.innerHTML = viewTimeline;
  return cakebookContainer;
};

export const init = () => {
  const buttonSignOut = document.getElementById('signOut');
  buttonSignOut.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
      });
  });

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('sign in');
    } else {
      console.log('sign out');
    }
  });
};
