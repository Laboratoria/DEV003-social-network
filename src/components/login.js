import { onNavigate } from "../router/utils";
import { signIn as signInFirebase } from "../lib-firebase";

export const logIn = () => {
  const divLogin = document.createElement("div");
  divLogin.className = "login-container";
  const button = document.createElement("button");
  const inputEmail = document.createElement("input");
  const buttonBack = document.createElement("button");

  // LOGO
  const logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "img/logo mapa de bits.png";

  // Login form
  const loginForm = document.createElement("div");
  loginForm.className = "login-form";

  // TITULO
  const title = document.createElement("h2");
  title.textContent = "Sign In";
  title.className = "sign-in-title";

  // Email
  const email = document.createElement("h4");
  email.className = "email-address";
  email.textContent = "Correo electrónico";
  inputEmail.id = "emailInput";
  inputEmail.type = "mail";
  inputEmail.required = true;
  inputEmail.className = "input-email";

  //Password
  const password = document.createElement("h4");
  password.className = "password";
  password.textContent = "Constraseña";
  password.required = true;
  const inputPass = document.createElement("input");
  inputPass.id = "passwordInput";
  inputPass.type = "password";
  inputPass.required = "true";
  inputPass.className = "input-password";
  inputPass.minLength = 6;

  // Boton login
  const buttonLogin = document.createElement("button");
  buttonLogin.className = "sign-in-button";
  // Flechita
  const arrow = document.createElement("img");
  arrow.className = "arrow";
  arrow.src = "img/flechita.png";

  // Event Listener y conexión a Firebase
  buttonLogin.addEventListener("click", () => {
    const userEmail = document.getElementById("emailInput").value;
    const userPassword = document.getElementById("passwordInput").value;
    signInFirebase(userEmail, userPassword) // data para probar si está leyendo los datos
      .then((userCredential) => {
        // de acá para abajo es código copiado de la pag de firebase
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    // onNavigate('/login');
  });

  button.addEventListener("click", () => {
    onNavigate("/home");
  });
  buttonBack.addEventListener("click", () => {
    onNavigate("/");
  });
  button.textContent = "Botón de LogIn";
  buttonBack.textContent = "Botón de Regreso";
  divLogin.append(logo, loginForm, buttonLogin);
  loginForm.append(
    title,
    email,
    inputEmail,
    password,
    inputPass,
    button,
    buttonBack
  );
  buttonLogin.appendChild(arrow);

  return divLogin;
};
