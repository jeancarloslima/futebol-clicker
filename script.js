const btnCliclador = document.getElementById("btn-clicador");
const elementoContador = document.getElementById("contador");
const elementoMultiplicador = document.getElementById("multiplicador");
const melhorias = document.querySelectorAll(".container-melhorias-teste ul li button");
let contador = 0;
let multiplicador = 0.1;

function atualizaElementos() {
    elementoContador.textContent = contador.toFixed(1);
    elementoMultiplicador.textContent = "+ " + multiplicador;
}

btnCliclador.addEventListener('click', () => {
    contador += multiplicador;
    atualizaElementos();
});

melhorias.forEach(melhoria => {
    melhoria.addEventListener('click', () => {
        multiplicador += Number(melhoria.value);
        atualizaElementos();
    })
})

setInterval(() => {
    contador += multiplicador;
    atualizaElementos();
}, 1000);