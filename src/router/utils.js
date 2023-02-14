import { routes } from './routes';

export const onNavigate = (pathname) => {
  const root = document.getElementById('root');
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};
