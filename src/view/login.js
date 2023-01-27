export default () => {
  const viewLogin = /* html */ `
   <div id="container" class="login-container">
    <div class="img-container">
      <picture>
        <source media="(max-width: 599px)" srcset="/img/back-login.png" />
        <source media="(min-width: 600px) and (max-width: 1023px)" srcset="/img/back-login-tablet.png" />
        <img src="/img/back-login-desktop.png" alt="" />
      </picture>
    </div>
    <div id= "container1">
      <h1>cakeBook</h1>
      <div class= "form-btn">
        <input class= "input-users" type="text" placeholder="Usuario">
        <input class= "input-users" type="text" id="contraseña"  placeholder="Contraseña">
        <button type = "submit" class="log-button" id="login"><strong>INICIAR SESIÓN</strong></button>
        <button  class="log-button" id="register"><strong>REGISTRARSE</strong></button>
        <div class="login-google">
          <span>Ingresar con:</span>
          <button id="btn-google-register"> 
            <img class = "logo" src = "/img/Logo2.png">
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
  const linkElement = document.getElementById('link');
  linkElement.setAttribute('href', '/login.css');
  const mainElement = document.getElementById('main');
  mainElement.innerHTML = viewLogin;

  return mainElement;
};
