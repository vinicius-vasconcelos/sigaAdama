/**
    *** Arquivo de jogo
    *** instância classes e faz verificações durante a partida
*/

import Carta from './Carta.js';
import Baralho from './Baralho.js';

var objBar = null;

$(document).ready(() => initGame())

async function initGame() {
    //instânciando os obj de Carta e Baralho
    const cardQueen = new Carta('queen', 'image/queen.png');
    const cardKing = new Carta('king', 'image/king.png');
    const cardKing2 = new Carta('king2', 'image/king.png');

    objBar = new Baralho();

    objBar.inserirCarta(cardQueen);
    objBar.inserirCarta(cardKing);
    objBar.inserirCarta(cardKing2);

    await shuffleQuenn()
    showCards();
}

//função para embaralhar rainha
function shuffleQuenn() {
    let pos = Math.floor(Math.random() * 3);
    let aux = objBar.vetBar[pos];
    
    objBar.vetBar[pos] = objBar.vetBar[0];
    objBar.vetBar[0] = aux;

    let imgs = $('img');

    for (let i = 0; i < objBar.vetBar.length; i++) {
        imgs[i*2].src = objBar.vetBar[i].caminho;
        imgs[i*2].id = objBar.vetBar[i].tipo;
        imgs[i*2+1].src = 'image/card.png';
        imgs[i*2+1].id = objBar.vetBar[i].tipo;
    }
}

//função para embaralhar o vetor de cartas
function shuffle() {
    
    for (let i = 0; i < 25; i++) {
        let pos = Math.floor(Math.random() * 3);
        let pos2 = Math.floor(Math.random() * 3);
        let aux = objBar.vetBar[pos];
        
        objBar.vetBar[pos] = objBar.vetBar[pos2];
        objBar.vetBar[pos2] = aux;
    }

    let imgs = $('img');

    for (let i = 0; i < objBar.vetBar.length; i++) {
        imgs[i*2].src = objBar.vetBar[i].caminho;
        imgs[i*2].id = objBar.vetBar[i].tipo;
        imgs[i*2+1].src = 'image/card.png';
        imgs[i*2+1].id = objBar.vetBar[i].tipo;
    }
}

//função para exibir cartas na tela
function showCards() {
    setTimeout(() =>  $('.card').trigger( 'click' ).flip(), 1000);
}

$('.card').flip();

$('.card img').click( async function() {
    await shuffle();

    if(this.id != 'queen') 
        alert('Haahahahhahahahahahah');

    setTimeout(() =>  window.location.href = '/', 1000);
});