export default () => {
  const viewLogin = `
   <div id= "container">
    <!--<img class = "fondoLogin" src = "images/fondoLogin.png">-->
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

  const divElement = document.getElementById('main');
  divElement.innerHTML = viewLogin;

  return divElement;
};
