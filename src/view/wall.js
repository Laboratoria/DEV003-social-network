/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
export default () => {
  const viewWall = `<from>
      <div class="navbar"><div class="logo">Chile Solidario</div>  
      <div class="iconos" <p><a class="volver" href="#/register"><img src="./css/img/how_to_reg_FILL0_wght400_GRAD0_opsz48.svg" alt="reg"> </a></p></div>        
       </div>
      </form>
   
      <div class="section-title">
        <h3>
          <i class="fa-solid fa-comments"></i>
            Sistema de mensajería
        </h3>
      </div>
      
    <main class="container">
     <section class="body-chat">
      <div class="users">
         <img src="./css/img/andrea-piacquadio.jpg" alt="foto">
        
      </div>
      <div class="input-coment"> 
        <input id="newComent" type="text" placeholder="Nuevo Comentario">
          <div class="btnPost">
            <button class="post" onclick"post()">Publicar</button>
          </div>
      </div>
     </section>
    </main>
      <ul id="coments" class="container2"></ul>`;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewWall;

  function cerrar() {
    firebase.auth().signOut().then(() => {
      // console.log('Salir');
    })
      .catch((error) => {
        // console.log(error);
      });
  }
  // eslint-disable-next-line no-unused-vars
  function post() {
    const ul = document.createElement('ul');
    const valoringresado = document.getElementById('newComent').value;
    const text = document.createTextNode(valoringresado);
    ul.appendChild(text);

    if (valoringresado === '') {
      alert('Ingrese un comentario');
    } else {
      document.getElementById('coments').appendChild(ul);
    }
    document.getElementById('newComent').value = '';
    ul.className = 'coment';
  }

  return divElemt;
};
