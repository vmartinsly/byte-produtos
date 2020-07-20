export class Conta {
    _banco;
    _agencia;
    _numeroDaConta;
    _saldoDaConta;

    constructor(banco, agencia, numeroDaConta, saldoDaConta) {
        this._banco = banco;
        this._agencia = agencia;
        this._numeroDaConta = numeroDaConta;
        this._saldoDaConta = saldoDaConta;
    }
}