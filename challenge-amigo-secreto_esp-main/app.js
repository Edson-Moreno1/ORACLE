// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //Array para almacenar los amigos ingresados


//Funcion agregar amigo debe tener 4 funcionalidades
//1.Capturar el nombre del amigo
//2.Validar que el amigo no este vacio
//3.Actualizar el array amigos 
//4.Limpiar el campo de entrada
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;

    if(amigo === ""){
        alert("Por favor ingresa un amigo");
    }else if(amigos.includes(amigo)){
        alert("Ese amigo ya existe , por favor agrega otro");
        limpiarCampoDeEntrada();
    }else{
        amigos.push(amigo);
        console.log(amigo);
        ActualizarListaDeAmigos();
        limpiarCampoDeEntrada();
    }
    }
    

function ActualizarListaDeAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(i = 0; i < amigos.length; i++){
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

    



function limpiarCampoDeEntrada(){
    document.querySelector("#amigo").value = "";   
}

