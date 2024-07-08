let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
    return;
}

function  verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ?'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        }else{
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
   //si ya se sortearon todos los números
   if(listaNumerosSorteados.length == numeroMaximo){
     asignarTextoElemento('p', 'ya se sortearon todos los números posibles');      
   }else{
     //Si esta en la lista realizo una acción 
    if(listaNumerosSorteados.includes(numeroGenerado)){
       return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto v2!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de número
    //Generar el número aletarrio
    //Inicializar el número de intentos
    condicionesIniciales();
    //desabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();