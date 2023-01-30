export default () => {
  const viewRegister = /* html */ `
    <div class="img-container">
      <picture>
        <source media="(max-width: 599px)" srcset="/img/back-login.png" />
        <source media="(min-width: 600px) and (max-width: 1023px)" srcset="/img/back-login-tablet.png" />
        <img src="/img/back-login-desktop.png" alt="" />
      </picture>
    </div>
    <div class= "container1">
    <h1>cakeBook</h1>
    <div class="saludo">
      <span>Regístrate para ver y compartir</span> 
      <span> deliciosas recetas con tus amigos!</span> 
    </div>
    <div class="login-google">
    <button id="btn-google-register"> 
      <div class="login-google">
        <span><img class = "logo" src = "/img/Logo2.png"></span>
        <span class="spn-google">Registrarte con Google</span>
      </div>
    </button>
    </div>
    <div class= "form-btn">
      <input class= "input-users" type="text" name="username" id="username" placeholder="Correo electrónico">
      <input class= "input-users" type="text" name="username" id="username" placeholder="Nombre y Apellido">
      <input class= "input-users" type="text" name="username" id="username" placeholder="Nombre de Usuario">
      <input class= "input-users" type="password" name="password" id="password"  placeholder="Contraseña">
      <div class="span-politica">
        <span>Al registrarte, aceptas nuestras Condiciones, la </span> 
        <span>Política de privacidad y la Política de cookies.</span>
      </div>
      <button class="log-button" id="register">REGISTRARTE</button> 
    </div>
  </div>
`;
  const linkElement = document.getElementById('link');
  linkElement.setAttribute('href', '/register.css');

  const registerContainer = document.createElement('div');
  registerContainer.classList.add('login-container');
  registerContainer.innerHTML = viewRegister;
  return registerContainer;
};

export const init = () => {};
