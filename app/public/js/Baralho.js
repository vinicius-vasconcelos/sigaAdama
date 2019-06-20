/**
    *** Classe para gerênciar o baralho (vetor de cartas)
 */
export default class Baralho {
    constructor() {
        this.vetBar = new Array();
    }

    inserirCarta(Carta) {
        this.vetBar.push(Carta);
    }

    getCarta(Carta) {
        return this.vetBar.find(Carta);
    }

    getCartas() {
        return this.vetBar;
    }

}