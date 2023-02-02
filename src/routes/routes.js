import { home, login, signup };

const rootDiv = document.getElementById('root');

export const routes = {
  '/': home,
  '/signup': signup,
  '/login': login,
};

rootDiv.innerHTML = routes[window.location.pathname];
