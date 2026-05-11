'use strict';

// Exemplo 1: objeto com dados de uma pessoa
console.log('Exemplo: 1');
const pessoa = {
    // propriedades: valor
    nome: 'Chapolin Colorado',
    idade: 25,
    cidade: 'São Paulo',
    estado: 'SP',
    "Empresa que trabalha": 'Senac'
};

// pessoa.nome = 'tiago'
console.log(pessoa.nome);

console.log(pessoa["Empresa que trabalha"]);

console.log('\n---');

// Exemplo 2: objeto com array

console.log('\nExemplo2');

const livro ={
    titulo: 'O Senhor dos anéis',
    autor: 'J.R.R Tolkien',
    volumes: [
        'A Sociedade do anel',
        'As duas torres',
        'O Retorno do rei'
    ]
};


console.log(`a ${livro.volumes[0]} é o primeiro livro`);

console.log('\n---');

console.log("\nExemplo: 3");
const livros = [
    {
        titulo:'O Homem de giz',
        ano: 2011,
    },
    {
        titulo: 'O pequeno principe',
        ano: 1947,
    },
    {
        titulo: 'Duna',
        ano: 1965
    }
];

livros.push(livro)
console.log(livros[3].titulo);

/* Mini exercicio
Acesse adequadamente os dados do array livros e mostre a mensagem:

Os livros homem de giz e Duna são titulos famosos da literatura. respectivamente, foram lançados entre 2011 e 1965
*/

console.log(`Os livros abaixo são títulos famosos na literatura: `);
for (let livro of livros) {
    console.log(`${livro.titulo}, ano: ${livro.ano}`);
    
    
};
// console.log(`Os livros ${livros[0].titulo} e ${livros[2].titulo} são títulos famosos na literatura. Respectivamente, foram lançados em ${livros[0].ano} e ${livros[2].ano}.`);


