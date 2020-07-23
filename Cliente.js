import { Conta } from "./Conta.js";

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

    comprar(produto, contaDaLoja) {
        const precoDoProduto = produto.preco;
        this._conta.transfere(precoDoProduto, contaDaLoja);
        
    }
}