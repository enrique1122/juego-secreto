let numeroSecreto = 0;
let intentos      = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;
//FUNCION PARA ASIGNAR MULTIPLES ELEMENTOS DEL DOM
function asignarTextoElemento(elemento, texto){
    let elementoHTML       = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento(){
    console.log(numeroSecreto);
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1? 'vez': 'veces'}`);
        document.querySelector("#reiniciar").removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es mayor');
        }else{
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;
}

function reiniciarJuego(){
    // 1) limpiar la caja 
    limpiarCaja();
    // 2) Mensaje de Intervalos 
    // 3) Generar aleatorio
    // 4) reiniciar intentos
    condicionesIniciales();
    // 4) Deshabilitar el boton del nuevo juego
    document.querySelector("#reiniciar").setAttribute('disabled','true');
    
}
// FUNCION PARA GENERAR UN NUMERO ALEATORIO ENTRE EL 1 Y EL 10
function numeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
        // Si el numero generado está incluido está en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return numeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

condicionesIniciales();
