// formulario para que el usuario ingrese correo y contraseña 15.02
export default()=>{
    const home = `
    <h2 class="texto-center">¡Bienvenido a nuestra página!</h2>
 <figure class="texto-Center>
 <img class="image" scr="http://olegif.com/bin/gifs/00/39/gif" alt="Conejo codeando"
 </figure>`

 const divElement = document.createEment("div");
// divElement.classlist.add("position")
divElement.innerHTML = home;
return  divElement;
};