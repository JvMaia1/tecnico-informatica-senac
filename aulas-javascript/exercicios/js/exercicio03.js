'use strict'

const aluno = {
    nomeCompleto: 'Fulano de tal da silva santana santos',
    dataNascimento: '10/08/1997',
    listaTelefones:[
        '(11) 4002-8922',
        '(11) 95568-4589'
    ],
    endereco:{
        rua: 'Capixaba',
        numero: 45,
        bairro: 'Chique-Chique'
    }
};

console.log('-------------------------------------');

console.log(`Dados do aluno: \nNome: ${aluno.nomeCompleto.split(' ', 3).join(' ')}\nTelefone celular: ${aluno.listaTelefones[1]}\nBairro: ${aluno.endereco.bairro}`);

console.log('-------------------------------------');