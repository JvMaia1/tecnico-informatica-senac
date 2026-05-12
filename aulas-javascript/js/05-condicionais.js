'use strict'

/*
operadores relacionais: usados para realizar comparações lógicas
== igualdade por valor
=== igualdade por valor e tipo
< Menor
> Maior
<= Menor ou igual 
>= Maior ou igual
!= Valor diferente
!== Valor e tipo diferente
*/

let a = 10;
let b = 10;
let c = 100;
let d = "100";

console.log(a>b); // false (A não é maior que B)
console.log(a>=b); // True (a é igual a b)
console.log(c!=a); // True c é diferente que a


// Comparando apenas valor (usando ==)
console.log(c == d); // True pois os valores são os mesmos

// Comparando valor e tipo de dados (usando ===)
console.log(c === d); // False pois os tipos são diferentes, apesar dos valores iguais

// Comandos condicionais
// If, else, else if
// Switch/case/default

// Condicional simples
console.log('\nExemplo 1: simples (if)');
let numero = 100;
if (numero >= 20 ){
    console.log(numero + ' é maior que 20');
};

if (numero >= 20) console.log('uma única açao');

// condicional composta
console.log('\nExemplo 2: composto (if else)');

const aluno = 'Marcelo';
const idade = 45;
const mensagem = ' é maior de idade'

if (idade >= 18) { 
    console.log(aluno + mensagem);
} else console.log(aluno + ' não' + mensagem);

// logica 2: condiçao menor que 18
if (idade < 18){
    console.log(aluno + ' não' + mensagem);
} else console.log(aluno + mensagem);

/*  Operador chamado ternário ?:
Versão curta do if/else (shorthand if/else) */

let situacao = idade >= 18 ? 'maior' : 'menor';

console.log(`${aluno} é ${situacao} de idade`);

// Condicional encadeada (if/else if/else)

/* Determinar o desempenho do aluno
de acordo com a média que teve. */

let media = 10;
let resultado = media >= 7 ? 'reprovado' : 'aprovado';

console.log(aluno +' está' +resultado);

/* Determinar o desepenho do aluno de acordo com a média que teve. Desempenho possíveis:
- média acima de 9? ótimo
- média acima de 7? bom
- média acima de 5? ruim
- média até 5? péssimo
 */

if (media > 9){
    console.log('Ótimo');   

} else if ( media > 7) {
    console.log('Bom');

} else if (media > 5){
    console.log('Ruim');    

} else console.log('Péssimo');
