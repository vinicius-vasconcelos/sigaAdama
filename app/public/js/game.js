function _obj() {
    return objJogo = [
        {
            caminho: '../public/image/queen.png',
            tipo: 'queen',
        },
        {
            caminho: '../public/image/king.png',
            tipo: 'king',
        },
        {
            caminho: '../public/image/king.png',
            tipo: 'king2',
        },
    ]
}

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
}


$(document).ready(() => {
    //preparando a tela principal do jogo
    $('#game').hide();

    //renderidando a view do game
    $('#jogar').click(() => {
        $('#principal').hide();
        $('#game').show();

        //sorteando as cartas
        sortCards();
    });

    //click
    $('img').click( function() {
        $('#card').attr('src', '../public/image/queen.png');
    });
});


