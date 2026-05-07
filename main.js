function saludar(){
    let  nombre = document.getElementById("nombre").value
    
    document.getElementById("mensaje").innerText = "hola " + nombre
}

function sumar(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    document.getElementById("resultado").innerText = num1 + num2
}
 
let blanco = true

function cambiar(){
    blanco= !blanco
    if(blanco==true){
        document.getElementById("blanco").style.display = "none"
        document.getElementById("negro").style.display = "block" 
    }
    else{
        document.getElementById("blanco").style.display = "block"
        document.getElementById("negro").style.display = "none"
    }
}


let contador = 0
function sumador(params){
    contador = contador + params
    document.getElementById("contador").innerText = contador
}

console.log("hola mundo");
//alert("funciona");

const Boton = document.getElementById("Btn");
const Body = document.body;
Boton.addEventListener ("click", ()=>{
    Body.classList.toggle("dark");
});

