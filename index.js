import { Produto } from "./Produto.js";
import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

// Cadastro de Clientes
const clienteAna = new Cliente("Ana Bim", 11122233301);
const contaDaAna = new Conta("Bradesco", 4, 1111, 5000.0);
clienteAna.conta = contaDaAna;

// Cadastro de produtos
const listaDeProdutos = new Array();
const produto1 = new Produto("Monitor", 1200);
listaDeProdutos.push(produto1);

// Lista Produtos
for(let i = 0; i < listaDeProdutos.length; i++) {
    console.log("Lista de Produtos: ");
    console.log(listaDeProdutos[i]);
}
console.log("\nQuantidade de produtos: ", Produto.codigo);

// Compra e venda de Produtos
clienteAna.comprar(produto1);