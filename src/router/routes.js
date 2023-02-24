import { signUp } from '../components/signup.js';
import { logIn } from '../components/login.js';
import { home } from '../components/home.js';
import { album } from '../components/album.js';
import { reviews } from '../components/review.js';

export const routes = {
  '/': signUp,
  '/login': logIn,
  '/home': home,
  '/album': album,
  '/review': reviews,
};
