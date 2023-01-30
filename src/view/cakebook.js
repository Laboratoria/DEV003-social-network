export default () => {
  const viewTimeline = /* html */ `
  <div id="container">
  <!--<img class = "fondoLogin" src = "images/fondoLogin.png">-->
  <div class="title">
    <h1>cakeBook</h1>
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

  const divElement = document.getElementById('main');
  divElement.innerHTML = viewTimeline;
  const linkElement = document.getElementById('link');
  linkElement.setAttribute('href', '/cakebook.css');

  divElement.innerHTML = viewTimeline;
  return divElement;
};

export const init = () => {};
