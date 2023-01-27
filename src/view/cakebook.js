export default () => {
  const viewTimeline = `
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
  <button type="button" class="btnMenu" id="homeBtn"><img src="./img/homeIcon.png" alt="" class="imgBtn"></button>
  <button type="button" class="btnMenu" id="searchBtn"><img src="./img/searchIcon.png" alt="" class="imgBtn"></button>
  <button type="button" class="btnMenu" id="postBtn"><img src="./img/postIcon.png" alt="" class="imgBtn"></button>
  <button type="button" class="btnMenu" id="friendsBtn"><img src="./img/friendsIcon.png" alt="" class="imgBtn"></button>
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
