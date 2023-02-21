// importamos la funcion que vamos a testear
import { signUp } from '../src/components/signup.js';
// import { signUpFirebase } from '../src/lib-firebase/index.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
});

describe('Error', () => {
  it('firebase error', () => {
    document.body.append(signUp());
    document.getElementById('signUpBtn').click();

    expect(document.getElementById('errorContent').innerHTML).toEqual('Llena todos los campos');
  });
});
