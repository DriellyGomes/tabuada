const botaoDispararTabuadaConsole = document.querySelector('.btn-console');
const caixaEntradaTabuada= document.querySelector('#tabuada-number');


botaoDispararTabuadaConsole.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);

    if (!isNaN(entradaUsuario)) {
        mostrarTabuadaNoConsole(entradaUsuario);
    }
    else {
        console.log("Número inválido!Digite um número válido");
    }
});
// //mostrar a tabuada quando o evento clicar no enter acontecer
// caixaEntradaTabuada.addEventListener('keyup', (e)=> {
//     if (e.key === 'Enter') {
//         validarentrada(caixaEntradaTabuada.value);
//         mostrarTabuadaNoConsole(caixaEntradaTabuada.value);
//         mostrarTabuadaDom(caixaEntradaTabuada.value);
//     }
// })

caixaEntradaTabuada.addEventListener('keyup',verificarTecla);

//Associando uma variável a um elemento e adicionando um evento, teremos disponiveis os dados do evento em si e os dados do elemento

function verificarTecla(e){
    if (e.key === 'Enter') {
        validarentrada(this.value);
        mostrarTabuadaNoConsole(this.value);
        mostrarTabuadaDom(this.value);
    }
}

function mostrarTabuadaNoConsole(numero) {

    if (!isNaN(numero)) {
        console.log(`mostrando a tabuada do ${numero}`);
        let contador = 0;
        while (contador <= 10) {
            console.log(`${numero} X ${contador} = ${numero * contador}`);
            contador++;
        }
        return
    }

    console.log("Número inválido!Digite um número válido");
}

const botaoDispararTabuadaDom = document.querySelector('.btn-dom');

botaoDispararTabuadaDom.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);
    mostrarTabuadaDom(entradaUsuario);
});

function validarentrada(numero) {
    if(isNaN(numero)){
        return "Numero Invalido! digite um numero valido"
    }
}

function mostrarTabuadaDom(numero) {

    const ulTabuada = document.querySelector('.tabuada');

    if (!isNaN(numero)) {
        
        ulTabuada.innerHTML = "";
        let contador = 0;

        while (contador <= 10) {
            const linhaTabuada = document.createElement('li');
            linhaTabuada.innerHTML = `${numero} X ${contador} = ${numero * contador}`;
            contador++;
            ulTabuada.appendChild(linhaTabuada);
        }
       return 
    }

    ulTabuada.innerHTML = "Número inválido!Digite um número válido";

}


