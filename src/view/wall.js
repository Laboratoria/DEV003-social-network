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

      <div class="inputComment" id='textComment'> 
        <input id="newComment" type="text" placeholder="Nuevo Comentario">
      </div>
      <div class="btnPost">
        <button class="post" id="buttonPost" onclick="post()">Publicar</button>
      </div>

     </section>
    </main>
    <div class="container2"> 
      <ul id="comments" class="comments"></ul>
    </div>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewWall;

  function cerrar() {
    firebase.auth().signOut().then(() => {
      // console.log('cerrar');
    })

      .catch((error) => {
        // console.log(error);
      });

    const button = document.getElementById('buttonPost');
    const commentList = document.getElementById('comments');
    const input = document.getElementById('newComment');

    button.addEventListener('click', () => {
      const newComment = document.createElement('li');
      newComment.innerText = input.value;
      commentList.appendChild(newComment);
      input.value = '';
    });
  }

  return divElemt;
};

/*

// Función para guardar un comentario en firebase, eliminando los espacios en blanco
  function post() {
    const newCommentInput = document.getElementById('newComment');
    const newCommentText = newCommentInput.value.trim();

    // Si el input está vacío, no se hace nada
    if (!newCommentText) {
      return;
    }
    // Obtener una referencia a la colección de comentarios en Firebase
    const commentsCollection = firebase.firestore().collection('comments');

    // Crear un nuevo documento en la colección de comentarios con el texto del comentario
    commentsCollection.add({
      text: newCommentText,
      createdAt: new Date(),
    })

      .then(() => {
      // Limpiar el input después de guardar el comentario
        newCommentInput.value = '';
      })

      .catch((error) => {
        console.error('Error al guardar comentario:', error);
      });

// Crear objeto de datos para enviar a Firebase
    const postData = {
      comment: newComment,
      timestamp: Date.now(),
    };

    // Crear nueva referencia a un nodo en la base de datos de Firebase
    const newPostRef = database.ref().child('comentarios').push();

    // Guardar los datos en la base de datos de Firebase
    newPostRef.set(postData);

    // Limpiar el valor del input de comentario
    document.getElementById('newComment').value = ''; */
