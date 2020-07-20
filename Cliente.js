import { Conta } from "./Conta.js";
import { Produto } from "./Produto.js";

export class Cliente {
    _nome;
    _cpf;
    _conta;

    constructor(nome, cpf, contaCliente) {
        this._nome = nome;
        this._cpf = cpf;
    };

    set conta(contaCliente) {
        if(contaCliente instanceof Conta) {            
            this._conta = contaCliente;
        }
    };

    comprar(produto) {
        const precoDoProduto = produto.preco;
        console.log(precoDoProduto);
    }
}