import { components } from "../sections/index.js";

// eslint-disable-next-line consistent-return
export const changeView = (route) => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  switch (route) {
    case "#/signup": {
      return container.appendChild(components.SignUp());
    }
    case "#/": {
      return container.appendChild(components.Home());
    }
    case "#/album": {
      return container.appendChild(components.Álbum());
    }
    case "#/artists": {
      return container.appendChild(components.Artistas());
    }

    default:
      break;
  }
};
