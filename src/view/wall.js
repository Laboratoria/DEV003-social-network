export default () => {
  const viewWall = `<from>
      <div class="navbar"><div class="logo">Chile Solidario</div>  
      <p><a class="volver" href="#/register"><img src="./css/img/how_to_reg_FILL0_wght400_GRAD0_opsz48.svg" alt="reg"> </a></p></div>        
      </form>
     <section class="body-chat">
      <div class="section-title">
        <h3>
          <i class="fa-solid fa-comments"></i>
            Sistema de mensajería
        </h3>
      </div>
      
      <div class="users">
        <div class="avatar">
         <img src="./css/img/andrea-piacquadio.jpg" alt="foto">
          <div class="data">
              <span>Nombre de usuario</span>
          </div>
        </div>  
      </div>
      
      <input class="textUser" type="text" v-model="textUser">
      <button class="enviar" @click="textUser">Enviar</button>
      <div class="chat"></div>

      <button onclick="cerrar()"> CERRAR SESION</button>

      </section>`;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewWall;

  function cerrar() {
    firebase.auth().signOut().then(() => {
      console.log('Salir');
    })
      .catch((error) => {
        console.log(error);
      });
  }

  return divElemt;
};
