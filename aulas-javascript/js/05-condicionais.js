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


