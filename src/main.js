// Este es el punto de entrada de Beat!
import { changeView } from "./section_controller/index.js";
import { signUp } from "./lib/index.js";

const init = () => {
  window.addEventListener("hashchange", () => changeView(window.location.hash));
};

window.addEventListener("load", init);

const botonGoogle = document.getElementById("google");

botonGoogle.addEventListener("click", () => {
  console.log("registrate");
  let userName = document.getElementById("nameInput").value;
  let userEmail = document.getElementById("emailInput").value;
  let userPassword = docuemnt.getElementById("passwordInput").value;

  signUp(userName, userEmail, userPassword) //data para probar si está leyendo los datos
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
