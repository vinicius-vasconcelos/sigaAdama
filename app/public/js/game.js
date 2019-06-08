function __obj() {
    return objJogo = [
        {
            caminho: '../public/image/king.png',
            tipo: 'king',
        },
        {
            caminho: '../public/image/queen.png',
            tipo: 'queen',
        },
        {
            caminho: '../public/image/king.png',
            tipo: 'king2',
        },

    ]
}

function sortCards() {
    let vetCards = __obj().sort();

    $('img').each(function(key) {
       $(this).attr('src', vetCards[key].caminho);
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
        $(this).attr('src', '../public/image/queen.png');
    })
});


