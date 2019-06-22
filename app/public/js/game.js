/**
    *** Arquivo de jogo
    *** instância classes e faz verificações durante a partida
*/

import Carta from './Carta.js';
import Baralho from './Baralho.js';

var objCards = null;

$(document).ready(() => initGame())

async function initGame() {
    //instânciando os obj de Carta e Baralho
    const cardQueen = new Carta('queen', 'image/queen.png');
    const cardKing = new Carta('king', 'image/king.png');
    const cardKing2 = new Carta('king2', 'image/king.png');

    objCards = new Baralho();

    objCards.inserirCarta(cardQueen);
    objCards.inserirCarta(cardKing);
    objCards.inserirCarta(cardKing2);

    showCards(await shuffle(objCards));
}

//função para embaralhar o vetor de cartas
function shuffle(objBar) {
    let pos = Math.floor(Math.random() * 3);
    let aux = objBar.vetBar[pos];
    
    objBar.vetBar[pos] = objBar.vetBar[0];
    objBar.vetBar[0] = aux;
    return objBar;
}

//função para exibir cartas na tela
function showCards(objBar) {
    let imgs = $('img');

    for (let i = 0; i < objBar.vetBar.length; i++) {
        imgs[i*2].src = objBar.vetBar[i].caminho;
        imgs[i*2+1].src = 'image/card.png';
    }


    

    setTimeout(() =>  $('.card').trigger( "click" ).flip(), 3000);
}
$('.card').flip();