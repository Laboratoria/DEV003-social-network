export default () => {
  const viewLogin = `

   <div id= "container">
   <!--<img class = "fondoLogin" src = "images/fondoLogin.png">-->
   <div id= "container1">
      <h1>cakeBook</h1>
      <input class= "usuario" type="text" placeholder="Usuario">
      <input class= "contraseña" type="text" id="contraseña"  placeholder="Contraseña">
      <button type = "submit" class="loginButton"><strong>INICIAR SESIÓN</strong></button>
      <button  class="registerButton"><strong>REGISTRARSE</strong></button>
      <p>Ingresar con:</p>
      <div class = "logo">
        <img src = "images/logo2.png">
      </div>
      </div>
    </div>
    <footer>
 <p>Copyright 2023 | Alejandra, Andry, Itza</p> 
 </footer>
  `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewLogin;

  return divElement;
};
