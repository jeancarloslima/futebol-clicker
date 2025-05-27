const btnCliclador = document.getElementById("btn-clicador");
const elementoContador = document.getElementById("contador");
const elementoMultiplicador = document.getElementById("multiplicador");
let contador = 0;
let multiplicador = 0.1;

btnCliclador.addEventListener('click', () => {
    contador+= multiplicador;
    elementoContador.textContent = contador.toFixed(1);
})