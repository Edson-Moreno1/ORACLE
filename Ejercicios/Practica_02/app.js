let numeroSecreto = generarNumeroSecreto();



function asignarTextoElemento(elemento,texto){
    let elementoHTML =document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return Math.floor (Math.random()*10)+1;
    return numeroSecreto;
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un númeroo del 1 a al 10');