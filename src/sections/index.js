import home from "./home.js";
import artists from "./artists.js";
import album from "./album.js";
import signup from "./signup.js";

// export const routes = {
//   SignUp: signup,
//   Home: home,
//   Álbum: album,
//   Artistas: artists,
// };
const routes = {
  "/": home,
  "/artista": artists,
  "/album": album,
};
const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  container.innerHTML = routes[pathname];
};

//const component = routes[window.location.pathname];

//container.appendChild(component());

//rootDiv.innerHTML = routes[window.location.pathname];
