console.log("hola mundo");
alert("funciona");

const Boton = document.getElementById("Btn");
const Body = document.body;
Boton.addEventListener ("click", ()=>{
    Body.classList.toggle("dark");
});