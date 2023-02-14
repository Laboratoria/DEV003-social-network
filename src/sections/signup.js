export default () => {
  const signup = ` <section>
    <img class="logoInicio" src="img/logo mapa de bits.png" alt="logo de la aplicación">
    <form>
      <h3>SIGN UP JS</h3>
      <div>
        <label>Nombre de usuario</label>
        <input id= "nameInput" type="text">
        <br><br>
        <label>Correo eletrónico</label>
        <input id= "emailInput"  type="mail">
        <br><br>
        <label>Contraseña</label>
        <input id="passwordInput" type="password">
        <br><br>

        <div class="linea"></div>
        <hr class="featurette-divider">
        <button class="google">Inicia sesión con Google</button>
      </div>
    </form>

    <button id="google" class="enter">Enter</button>
    <div>
      <p>¿Ya tienes una cuenta?</p> 
      <a href="#">Inicia sesión acá.</a>
    </div>
  </section>`;
  const divSignUp = document.createElement("div");
  divSignUp.innerHTML = signup;

  return divSignUp;
};
