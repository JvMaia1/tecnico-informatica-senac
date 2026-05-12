'use strict'

let desconto;
let valorCompra = 301;

if ( valorCompra > 300) {
    desconto = 0.2;
} else if (valorCompra > 200) {
    desconto = 0.1
} else desconto = 0;

let descontoSimplificado = `${desconto*100}%`;
let valorFinal = valorCompra - valorCompra * desconto;

if (desconto > 0){ 
    console.log(`Com o valor de ${valorCompra} você recebe ${descontoSimplificado} de desconto. Valor final ${valorFinal}`);
} else console.log(`O valor de ${valorCompra} não recebe desconto. Adicione mais itens para aproveitar nossa promoção`);

