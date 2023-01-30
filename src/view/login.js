export default () => {
  const viewLogin = /* html */ `
    <div class="img-container">
      <picture>
        <source media="(max-width: 599px)" srcset="/img/back-login.png" />
        <source media="(min-width: 600px) and (max-width: 1023px)" srcset="/img/back-login-tablet.png" />
        <img src="/img/back-login-desktop.png" alt="" />
      </picture>
    </div>
    <div class= "container1">
      <h1>cakeBook</h1>
      <form class= "form-login" id="form-login">
        <input class= "input-users" type="text" name="username" id="username" placeholder="Usuario">
        <input class= "input-users" type="password" name="password" id="password"  placeholder="Contraseña">
        <button class="log-button" id="login">INICIAR SESIÓN</button>
        <button type="button" class="log-button" id="register">REGISTRARSE</button>
        <div class="login-google">
          <button type="button" id="btn-google-register"> 
            <div class="login-google">
              <span><img class = "logo" src = "/img/Logo2.png"></span>
              <span class="spn-google">Ingresar con Google</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  `;
  const linkElement = document.getElementById('link');
  linkElement.setAttribute('href', '/login.css');

  const loginContainer = document.createElement('div');
  loginContainer.classList.add('login-container');
  loginContainer.innerHTML = viewLogin;
  return loginContainer;
};

export const init = () => {
  const formLogin = document.getElementById('form-login');

  formLogin.addEventListener('submit', e => {
    e.preventDefault();
    console.log('submiting');
  });
};
