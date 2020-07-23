export class Conta {
    constructor(banco, agencia, numeroDaConta, saldoDaConta) {
        this._banco = banco;
        this._agencia = agencia;
        this._numeroDaConta = numeroDaConta;
        this._saldoDaConta = saldoDaConta;
    }

    saca(valor) {
        this._saldoDaConta -= valor;
    }

    deposita(valor) {
        this._saldoDaConta += valor;
    }

    transfere(valor, contaDestino) {
        this.saca(valor);
        contaDestino.deposita(valor);
    }
}