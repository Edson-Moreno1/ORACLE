let numeroSecreto = generarNumeroSecreto();
let intentos = 1;



function asignarTextoElemento(elemento,texto){
    let elementoHTML =document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Crack,Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez':'veces' }`);
    }else {

        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secretro es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }

        intentos ++;
    }

    return;
}


function limpiarCaja(){
    
}


                                                                                  

function generarNumeroSecreto() {
    return Math.floor (Math.random()*10)+1;
    return numeroSecreto;
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un númeroo del 1 a al 10');