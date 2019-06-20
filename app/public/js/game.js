/**
    *** Arquivo de jogo
    *** instância classes e faz verificações durante a partida
*/

import Carta from './Carta.js';
import Baralho from './Baralho.js';

const vetCards = null;

$(document).ready(() => initGame())

function initGame() {

    //instânciando os obj de Carta e Baralho
    const cardQueen = new Carta('queen', '../public/image/queen.png');
    const cardKing = new Carta('king', '../public/image/king.png');
    const cardKing2 = new Carta('king2', '../public/image/king.png');

    const vetCards = new Baralho();

    vetCards.inserirCarta(cardQueen);
    vetCards.inserirCarta(cardKing);
    vetCards.inserirCarta(cardKing2);

    $('#game').hide();
}


$('#jogar').click(() => {

    $('#principal').hide();
    $('#game').show();

    alert(JSON.stringify(vetCards));
    //let newVector =  shuffle(vetCards);

   //setTimeout(() =>  $('img').attr('src', '../public/image/card.png'), 3000);
});


























/*

function _embaralharCartas(vector) {

    
    let pos = Math.floor(Math.random() * 3);
    let aux = vector[pos];
    vector[pos] = vector[0];
    vector[0] = aux;

    return vector;
}

function sortCards() {
    let vetCards = _obj();
    vetCards = _embaralharCartas(vetCards);

    $('img').each(function(key) {
       $(this).attr('src', vetCards[key].caminho, 3000);
    });

    return vetCards;
}


$(document).ready(() => {
    

    //click
    $('img').click( function() {
        $('#card').attr('src', '../public/image/queen.png');
    });
});*/