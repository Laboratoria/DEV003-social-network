export const album = () => {
  const sectionAlbum = document.createElement('div');
  sectionAlbum.className = 'main-container-album';

  const titleMenuAlbum = document.createElement('h1');
  titleMenuAlbum.className = 'title-menu-album';
  titleMenuAlbum.textContent = 'Lista de álbumes';

  const containerAlbum = document.createElement('div');
  containerAlbum.className = 'container-album';

  const titleOptionAlbum = document.createElement('div');
  titleOptionAlbum.className = 'title-option-album';
  titleOptionAlbum.textContent = 'Álbumes';

  const containerItemAlbum = document.createElement('div');
  containerItemAlbum.className = 'container-items-album';

  const itemAlbum = document.createElement('div');
  itemAlbum.className = 'item-album';

  const imgAlbum = document.createElement('div');
  imgAlbum.className = 'img-album';

  const nameAlbum = document.createElement('p');
  nameAlbum.className = 'name-Album';
  nameAlbum.textContent = 'Nombre';

  const itemAlbumIcons = document.createElement('div');
  itemAlbumIcons.className = 'item-album-icons';

  const imgChatBuble = document.createElement('img');
  imgChatBuble.className = 'img-chat-bubble';
  imgChatBuble.src = 'img/chat-bubble.png';
  imgChatBuble.type = 'button';

  const imgHeart = document.createElement('img');
  imgHeart.className = 'img-heart';
  imgHeart.src = 'img/Vector.png';

  const moreOptions = document.createElement('img');
  moreOptions.className = 'moreOptions';
  moreOptions.src = 'img/more-vert.png';

  sectionAlbum.append(titleMenuAlbum, containerAlbum);
  containerAlbum.append(titleOptionAlbum, containerItemAlbum);
  containerItemAlbum.append(itemAlbum);
  itemAlbum.append(imgAlbum, nameAlbum, itemAlbumIcons);
  itemAlbumIcons.append(imgChatBuble, imgHeart, moreOptions);

  return sectionAlbum;
};
