let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafio";

function clickEnConsole(){
    console.log("El boton fue clicado");
}

function clickEnPrompt(){
    let ciudad= prompt ('Ingresa una ciudad de brasil');
    alert(`Estuve en ${ciudad} y me acorde de ti`);

}

function clickEnAlert(){
    alert('Yo amo JS');
}

function clickEnSuma(){
    
    let numero1= prompt('Ingresa 1er numero');
    let numero2= prompt('Ingresa 2nd numero');

    numero1=parseFloat(numero1);
    numero2= parseFloat(numero2);

    let suma= numero1+numero2;

    alert(`La suma del ${numero1} y del ${numero2}, da como resultado ${suma}`);

}