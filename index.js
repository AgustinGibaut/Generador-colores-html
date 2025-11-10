const boton = document.querySelector("button");
const color = document.getElementById("Color");

function ColorAleatorio() {
    let digitos = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let indice =  Math.floor(Math.random() * 16);
        color += digitos[indice];
    }
    return color;
}

boton.addEventListener("click", function(){
    let nuevoColor = ColorAleatorio();    
    color.textContent = nuevoColor;
    document.body.style.backgroundColor = nuevoColor;
});