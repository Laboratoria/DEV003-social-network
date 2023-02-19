export default () => {
  const viewRegister = `<form id="loginForm" class="form login">
        <h3>Bienvenidos</h3> 
        <input type="text" id="userName" placeholder="Nombre de Usuario">
        <input type="text" id="registerEmail" placeholder="Correo Electrónico" required>        
        <input type="password" id="registerPassword" placeholder="Contraseña" required>        
        <button id="registro" class="register__buttonRegister" type="submit">Registro</button>
        <p> <a href="#/home" class="rojo">Home</a></p>
      </form>`;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewRegister;

  return divElemt;
};
