console.log("================================");
console.log(" MEU PRIMEIRO NODE.JS");
console.log("================================");
console.log("Nome: Seu Nome");
console.log("Curso: Seu Curso");
console.log("Instituição: Sua Instituição");
console.log("Estou aprendendo Node.js!");

const matematica = require("./matematica");

console.log("Soma: " + matematica.soma(8, 4));
console.log("Subtração: " + matematica.subtracao(13, 2));
console.log("Multiplicação: " + matematica.multiplicacao(10, 2));
console.log("Divisão: " + matematica.divisao(12, 4));