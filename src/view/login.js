import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default () => {
  const viewLogin = `
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
        <input class= "input-users" type="email" name="userEmail" id="userEmail" placeholder="Correo electrónico" required>
        <input class= "input-users" type="password" name="password" id="password"  placeholder="Contraseña" required>
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
  const buttonLogin = document.getElementById('form-login');
  const buttonRegister = document.getElementById('register');

  buttonLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('password').value;
    console.log(email, password);

    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = '/cakebook';
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        console.log(errorCode);
        if (errorCode == "auth/wrong-password"){
        alert('Contraseña inválida');
        };
        if (errorCode == "auth/user-not-found"){
        alert('Correo no registrado');
        };
      });
  });

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/register';
  });
};
