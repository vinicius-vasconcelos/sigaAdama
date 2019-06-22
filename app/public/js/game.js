/**
    *** Arquivo de jogo
    *** instância classes e faz verificações durante a partida
*/

import Carta from './Carta.js';
import Baralho from './Baralho.js';

var vetCards = null;


$(document).ready(() => initGame())

function initGame() {

    //instânciando os obj de Carta e Baralho
    const cardQueen = new Carta('queen', '../public/image/queen.png');
    const cardKing = new Carta('king', '../public/image/king.png');
    const cardKing2 = new Carta('king2', '../public/image/king.png');

    vetCards = new Baralho();

    vetCards.inserirCarta(cardQueen);
    vetCards.inserirCarta(cardKing);
    vetCards.inserirCarta(cardKing2);

    $('#game').hide();
}

function shuffle(vector) {
    let pos = Math.floor(Math.random() * 3);
    let aux = vector.vetBar[pos];
    
    vector.vetBar[pos] = vector.vetBar[0];
    vector.vetBar[0] = aux;
    return vector;
}

$('#jogar').click(() => {
    $('#principal').hide();
    $('#game').show();

    shuffle(vetCards)

   setTimeout(() =>  $('img').attr('src', '../public/image/card.png'), 3000);
});


























/*



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