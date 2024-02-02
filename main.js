const botaoDispararTabuadaConsole = document.querySelector('.btn-console');

botaoDispararTabuadaConsole.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);

    if (!isNaN(entradaUsuario)) {
        mostrarTabuadaNoConsole(entradaUsuario);
    }
    else {
        console.log("Número inválido!Digite um número válido");
    }
});

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


