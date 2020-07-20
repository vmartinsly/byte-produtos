export class Produto {
    static codigo = 0;
    _nome;
    _preco;

    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
        Produto.codigo++;
    }

    get preco() {
        return this._preco;
    }
}