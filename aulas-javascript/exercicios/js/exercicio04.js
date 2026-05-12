'use strict'

let qtdEmEstoque = 11
// let qtdEmEstoque = 5
// let qtdEmEstoque = 0
let estoque =  qtdEmEstoque > 10 ? 'Normal':(qtdEmEstoque === 0 ? 'Critico':'Baixo');

console.log('O nivel do estoque está ' + estoque);
