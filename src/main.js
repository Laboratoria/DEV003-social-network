// Este es el punto de entrada de Beat!
import { changeView } from "./section_controller/index.js";
import { signUp } from "./lib/index.js";
import { register } from "./sections/signup.js";

// const init = () => {
//   window.addEventListener("hashchange", () => changeView(window.location.hash));
// };

// window.addEventListener("load", init);
const init = () => {
  window.addEventListener("click", () => {
    onNavigate("/login");
  });
  div.append(register);
};

const botonGoogle = document.getElementById("google");
botonGoogle.addEventListener("click", () => {
  const userEmail = document.getElementById("emailInput").value;
  const userPassword = document.getElementById("passwordInput").value;

  signUp(userEmail, userPassword) //data para probar si está leyendo los datos
    .then((userCredential) => {
      //de acá para abajo es código copiado de la pag de firebase
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
