import { Conta } from "./Conta.js";

export class Loja {
    constructor(nome, cnpj) {
        this._nome = nome;
        this._cnpj = cnpj;
    }

    set conta(contaLoja) {
        if(contaLoja instanceof Conta) {            
            this._conta = contaLoja;
        }
    };

    set nome(nomeLoja) {
        this._nome = nomeLoja;
    }
    get nome() {
        return this._nome;
    }
    set cnpj(cnpjLoja) {
        this._cnpj = cnpjLoja;
    }
    get cnpj() {
        return this._cnpj;
    }
}