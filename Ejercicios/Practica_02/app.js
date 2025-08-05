let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];


function asignarTextoElemento(elemento,texto){
    let elementoHTML =document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Crack,Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez':'veces' }`);
        document.getElementById('reiniciar').removeAttribute ('disabled');
    }else {

        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }

        intentos ++;
        limpiarCaja();
    }

    return;
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
  
}


                                                                                  

function generarNumeroSecreto() {
    let numeroGenerado =Math.floor (Math.random()*10)+1;
    //si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();


    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;

    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p','Indica un númeroo del 1 a al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego() {
    //Limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    //Generar el numero aleatorio
    //Inicializar el numero intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    
}

condicionesIniciales();