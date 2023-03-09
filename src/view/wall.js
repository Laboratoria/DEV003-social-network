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
        <input id="comments" type="text" placeholder="Nuevo Comentario">
      </div>
      <div class="btnPost">
        <button class="post" id="buttonPost">Publicar</button>
      </div>
     </section>
    </main> 
    </div>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewWall;

  /*  function cerrar() {
    firebase.auth().signOut().then(() => {
      // console.log('cerrar');
    });

     .catch((error) => {
        // console.log(error);
      }); */

  const post = divElemt.querySelector('#buttonPost');
  post.addEventListener('click', (e) => {
    e.preventDefault();
    const message = document.querySelector('#comments').value;
    // console.log(post);
    console.log(message);
  });
  // crear un objeto con las propiedades
  const usuarios = {
    email: '',
    name: '',
  };
  // agregar el objeto a una colección en Firestore
  addDoc(dbRef, usuarios)
    .then(docRef => {
      console.log('Comentario agregado con ID:', docRef.id);
      commentInput.value = ''; // limpia el input de comentarios
    })
    .catch((error) => {
      console.error('Error al agregar comentario:', error);
    });
  return divElemt;
};
