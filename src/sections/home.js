export default () => {
  const home = `
  <div class="home-page">
  <header>
    <img class="logo" src="img/logo mapa de bits.png" alt="logo Beat !">
    <img class="user" src="img/user.png" alt="user img">
  </header>
  <nav>
    <ul>
      <li class="category-container">
        <a href="#favoritos" class="favorites">FAVORITOS</a>
      </li>
      <li class="category-container">
        <a href="#tendencias" class="trending">TENDENCIAS</a>
      </li>
      <li class="category-container">
        <a href="#albumes" class="albums">ÁLBUMES</a>
      </li>
      <li class="category-container">
        <a href="#artistas" class="artists">ARTISTAS</a>
      </li>
      <li class="category-container">
        <a href="#generos" class="genres">GÉNEROS</a>
      </li>
      <li class="category-container">
        <a href="#canciones" class="songs">CANCIONES</a>
      </li>
    </ul>
  </nav>
  <section>
    <div class="rec-title">
      <h3 class="recommended">RECOMENDADOS</h3>
      <button class="rec-arrow">
        <img src="img/flechita.png" alt="">
      </button>
    </div>
    <div class="rec-container">
      <div class="rec-img"> </div>
      <div class="rec-img"> </div>
      <div class="rec-img"> </div>
      <div class="rec-img"> </div>
      <div class="rec-img"> </div>
      <div class="rec-img"> </div>
    </div>
  </section>
</div>
    `;

  const divHome = document.createElement('div');
  divHome.innerHTML = home;

  return divHome;
};
