import { authSesion } from "../lib/functionFirebase";
// formulario para que el usuario ingrese correo y contraseña 15.02
export default () => {
  const login = `
  <header>
    <nav>
    </nav>
  </header>
  <div class="cajaLogin">
      <div class = "logoLogin">
       </div>

        <div class="formularioLogin">
          <p id="correo">CORREO</p>
          <input class="texto" id="email1"></input>
          <p  id="contraseña">CONTRASEÑA</p>
          <input class="texto" id="contraseña1"></input>
        </div>

       <div class="button"> 
       <a href="#/muro" type="button"  id="botonInic">INICIAR SESION</a>
       <a href="#/registro" type="button"  id="botonCrear">CREAR CUENTA</a>
       </div>
  </div>
  `;
  const divElement = document.createElement("div");
  divElement.innerHTML = login;

  //   divElement.classlist.add("position")
  divElement.innerHTML = login;
  // buttonInicicar.addEventListener("click",())
  const botonIngreso = divElement.querySelector("#botonInic");
  botonIngreso.addEventListener("click", () => {
    const email = document.querySelector("#email1").value;
    const contraseña = document.querySelector("#contraseña1").value;
    // console.log(email, 'email');
    // console.log(contraseña, 'contraseña');
    authSesion(email, contraseña);
    const expresionContraseña =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ])+$/;
    const valid = expresionContraseña.test(email);
    if (valid === true) {
    } else {
      alert("contraseña no valida");
    }
  });
  return divElement;
};
