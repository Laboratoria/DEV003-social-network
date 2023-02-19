export default () => {
  const viewHome = `
      <div class="navbar"><div class="logo">Chile Solidario</div></div>
      <h1 class="llamado" > Ingresa a nuestra comunidad</h1>
      <h2 class="bajada" > Red social de colaboración, comunica tus necesidades o tu capacidad de ayudar a los damnificados</h2>
      <form id="loginForm" class="form login">
      <h3>Bienvenidos</h3> 
      <input type="text" id="userName" placeholder="Email">       
      <input type="password" id="registerPassword" placeholder="Contraseña" required>        
      <button id="registro" class="register__buttonLogin" type="submit">INICIAR SESION</button>
      <p>¿No tienes una cuenta?  <a href="#/register" class="rojo">Inscribirse</a></p>        
      </form>`;
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;

  return divElemt;
};
