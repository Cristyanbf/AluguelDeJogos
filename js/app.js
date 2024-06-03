let jogosAlugados = 0;
function contarExibirJogosAlugados(){
    console.log(`Há um total de ${jogosAlugados} jogos alugados.`)
}

function alterarStatus(id){
let gameClicado = document.getElementById(`game-${id}`);
let imagem = gameClicado.querySelector('.dashboard__item__img');
let botao = gameClicado.querySelector('.dashboard__item__button');
let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

 if (imagem.classList.contains('dashboard__item__img--rented')){
    imagem.classList.remove('dashboard__item__img--rented')
    botao.classList.remove('dashboard__item__button--return')
    botao.textContent = "Alugar"
    jogosAlugados--;
 } else{ 
    imagem.classList.add('dashboard__item__img--rented')
    botao.classList.add('dashboard__item__button--return')
    botao.textContent = "Devolver"
    jogosAlugados++;
 }
 contarExibirJogosAlugados ()
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('dashboard__item__img--rented').length+1;
    contarExibirJogosAlugados()
})
