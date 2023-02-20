// importamos la funcion que vamos a testear
import { signUp } from '../src/components/signup.js';
// import { signUpFirebase } from '../src/lib-firebase/index.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });
});

// describe('Autenticación', () => {
//   it('firebase auth', () => {
//     expect(signUpFirebase()
//       .then(() => {
//         'obj1',
//         'obj2',
//         'obj3',
//       })).toEqual();
//   });
// });
