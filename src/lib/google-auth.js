import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function handleError() {
  const msgError = 'Error, intente nuevamente.';
  alert(msgError);
}

function autenticGoogle() {
  history.pushState(null, null, '/cakebook');
}

function loginWithGoogle(e) {
  e.preventDefault();
  console.log('sign google');
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider).then(autenticGoogle).catch(handleError);
}

export { loginWithGoogle };
