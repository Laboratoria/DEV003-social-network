export default () => {
  const album = `
    <div id="container">
    <h1 id="title-menu-album">Lista de álbumes</h1>
    <div class="container-album">
      <div id="title-option-album">Álbumes</div>
         
        <div id="container-items">
            <div id="item-album">
              <img id="img-album" >
              <div id="item-album-description">
              <label id="nameAlbum"> Nombre de álbum </label>
              <img id="img-chat-bubble" src="img/chat-bubble.png">
              <img id="img-heart" src="img/Vector.png">
              <img id="moreOptions" src="img/more-vert.png">
              </div>
            </div>  
            <div id="item-album">
              <img id="img-album" >
              <label id="nameAlbum"> Nombre de álbum </label>
              <img id="img-chat-bubble" src="img/chat-bubble.png">
              <img id="img-heart" src="img/Vector.png">
              <img id="moreOptions" src="img/more-vert.png">
            </div>  
        </div>
    </div>
  </div>
     `;

  const divAlbum = document.createElement('div');
  divAlbum.innerHTML = album;

  return divAlbum;
};
