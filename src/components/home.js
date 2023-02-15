import { onNavigate } from '../router/utils';

export const home = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'home-container';
  const header = document.createElement('header');
  header.className = 'header-home';
  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = 'img/logo mapa de bits.png';
  const userIcon = document.createElement('img');
  userIcon.className = 'user';
  userIcon.src = 'img/user.png';
  const categoryList = document.createElement('div');
  categoryList.className = 'category-list';
  const categories = document.createElement('div');
  categories.className = 'category-container';
  const favorites = document.createElement('div');
  favorites.textContent = 'Favoritos';
  favorites.className = 'favorites';
  const trending = document.createElement('div');
  trending.textContent = 'Tendencias';
  trending.className = 'trending';
  const album = document.createElement('a'); // este botón direcciona a álbum
  album.textContent = 'Álbum';
  album.className = 'albums';
  album.setAttribute('href', 'http://localhost:5173/album');
  const artists = document.createElement('div');
  artists.textContent = 'Artistas';
  artists.className = 'artists';
  const genres = document.createElement('div');
  genres.textContent = 'Géneros';
  genres.className = 'genres';


  const buttonBack = document.createElement('button');
  buttonBack.textContent = 'Botón de Regreso';


  album.addEventListener('click', () => {
    onNavigate('/album');
  });
  buttonBack.addEventListener('click', () => {
    onNavigate('/login');
  });

  homeDiv.append(header, categoryList, buttonBack);
  header.append(logo, userIcon);
  categoryList.appendChild(categories);
  categories.append(favorites, trending, album, artists, genres);

  return homeDiv;
};

// export default () => {
//   const home = `
//   <div class="home-page">
//   <header>
//     <img class="logo" src="img/logo mapa de bits.png" alt="logo Beat !">
//     <img class="user" src="img/user.png" alt="user img">
//   </header>
//   <nav>
//     <ul>
//       <li class="category-container">
//         <a href="#favoritos" class="favorites">FAVORITOS</a>
//       </li>
//       <li class="category-container">
//         <a href="#tendencias" class="trending">TENDENCIAS</a>
//       </li>
//       <li class="category-container">
//         <a href="#albumes" class="albums">ÁLBUMES</a>
//       </li>
//       <li class="category-container">
//         <a href="#artistas" class="artists">ARTISTAS</a>
//       </li>
//       <li class="category-container">
//         <a href="#generos" class="genres">GÉNEROS</a>
//       </li>
//       <li class="category-container">
//         <a href="#canciones" class="songs">CANCIONES</a>
//       </li>
//     </ul>
//   </nav>
//   <section>
//     <div class="rec-title">
//       <h3 class="recommended">RECOMENDADOS</h3>
//       <button class="rec-arrow">
//         <img src="img/flechita.png" alt="">
//       </button>
//     </div>
//     <div class="rec-container">
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//       <div class="rec-img"> </div>
//     </div>
//   </section>
// </div>
//     `;

//   const divHome = document.createElement('div');
//   divHome.innerHTML = home;

//   return divHome;
// };
