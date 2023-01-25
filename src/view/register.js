export default () => {
  const viewRegister = `<h2 class= text-center>Cakebook</h2>
  <div class="inputContainer">
  <label for="">Email:</label>
  <input class="inputRegister" type="email" name="email" value="email">
</div>
<div class="inputContainer">
  <label for="">Contraseña:</label>
  <input class="inputRegister" type="password" name="password" value="password">
</div>
<div class="inputContainer">
  <label for="">Confirmar Contraseña:</label>
  <input class="inputRegister" type="password" name="passwordRepeat"
      value="passwordRepeat">
</div>
<input type="submit" class="btn-register" value="Registrar">`

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegister;

  return divElement;
};