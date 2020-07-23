export class Produto {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
        Produto.codigo++;
    }
    static codigo = 0;

// Getters and Setters    
    set nome(nomeProduto) {
        this._nome = nomeProduto;
    }
    get nome() {
        return this._nome;
    }

    set preco(precoProduto) {
        this._preco = precoProduto;
    }
    get preco() {
        return this._preco;
    }
}