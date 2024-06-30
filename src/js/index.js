const btnAvancar = document.getElementById("btn-avancar");

const btnVoltar = document.getElementById("btn-voltar");

let dadoAtual = 0;

const dados = document.querySelectorAll(".dado");

btnAvancar.addEventListener("click", function (){
    const ehUltimoDado = dadoAtual === dados.length - 1
    if(ehUltimoDado) return;

    esconderDadoSelecionado();

    dadoAtual++;
    mostrarDado();
});

btnVoltar.addEventListener("click", function (){
    const ehPrimeiroDado =dadoAtual === 0
    if(ehPrimeiroDado) return;

    esconderDadoSelecionado();

    dadoAtual--;
    mostrarDado();
})

function mostrarDado() {
    dados[dadoAtual].classList.add("selecionado");
}

function esconderDadoSelecionado() {
    const dadoSelecionado = document.querySelector(".selecionado");
    dadoSelecionado.classList.remove("selecionado");
}
