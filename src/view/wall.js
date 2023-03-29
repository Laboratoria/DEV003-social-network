import { publication } from '../lib/firebase';

export default () => {
  const viewWall = `<div class="banner">
      <div class="navbar2">
        <div class="logo">Chile Solidario</div>  
          <div class="iconos"> 
            <p><a class="volver" href="#/register"><img src="./css/img/how_to_reg_FILL0_wght400_GRAD0_opsz48.svg" alt="reg"> </a></p>
          </div>
      </div>         
  </div>
   
      <div class="section-title">
        <h3>
        
          <i class="fa-solid fa-comments"></i>
            Sistema de mensajería
        </h3>
      </div>
      
  <main class="container">
     <section class="bodyChat">
      <div class="users">
         <img src="./css/img/andrea-piacquadio.jpg" alt="foto">
           
      </div>
      <div class="comments" id='textComment'> 
        <p id="email" type="text" placeholder="Email"></p>
        <input id="comments" type="text" placeholder="Nuevo Comentario">
      </div>
      <div class="btnPost">
        <button class="post" id="buttonPost">Publicar</button>
      </div> 
     </section> 
    </main>
    <div class="chatUl">
    <ul id="chatUl"></ul></div>
    </div>`;

  // Crear un elemento HTML y agregarle el contenido de la vista de mensajería
  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewWall;

  const post = divElemt.querySelector('#buttonPost'); // #ID que identifica un elemnto del DOM
  post.addEventListener('click', (e) => {
    e.preventDefault();
    // const email = document.querySelector('#email').value;
    const message = document.querySelector('#comments').value;
    console.log(message);
    publication(message);
    divElemt.querySelector('#comments').value = ''; // limpia el input de comentarios
  });

  return divElemt;
};
