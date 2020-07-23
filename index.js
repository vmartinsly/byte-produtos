import { Produto } from "./Produto.js";
import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { Loja } from "./Loja.js";

//Cadastro da Loja
const loja1 = new Loja("Loja de Aparelhos Eletrônicos", 111222333000101);

// Cadastro da conta da Loja
const contaDaLoja1 = new Conta("Bradesco", 4, 2222, 0);
loja1.conta = contaDaLoja1;

// Cadastro de produtos da Loja1
const produto1 = new Produto("Monitor", 1200);
console.log("\nQuantidade de produtos: ", Produto.codigo);

// Cadastro de Clientes
const clienteAna = new Cliente("Ana Bim", 11122233301);
const contaDaAna = new Conta("Bradesco", 4, 1111, 5000.0);
clienteAna.conta = contaDaAna;

// Compra e venda de Produtos - Passar produto desejado e conta da Loja
clienteAna.comprar(produto1, contaDaLoja1);

console.log(loja1);
console.log(clienteAna);