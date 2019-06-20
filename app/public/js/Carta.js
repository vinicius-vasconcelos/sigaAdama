/**
    *** Classe para gerênciar uma carta
    *** tipo da carta && o caminho de sua imagem
 */
export default class Carta {
    constructor(tipo, caminho) {
        this.tipo = tipo;
        this.caminho = caminho;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    getTipo() {
        return this.tipo;
    }

    setCaminho(caminho) {
        this.caminho = caminho;
    }

    getCaminho() {
        return this.caminho;
    }
}