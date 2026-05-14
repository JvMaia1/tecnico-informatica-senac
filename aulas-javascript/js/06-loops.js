'use strict'

console.log('Exemplo 1: While (enquanto):');
/* Lógica: enquanto uma condição for VERDADEIRA
Faça executa ações/processos */

// Varíavel de controle de repetição (contadora)

let contador = 1;

while (contador <= 5){
    console.log(`O valor da varíavel: ${contador}`);
    contador++;
}

console.log('\nExemplo 2: for (para):');
/* Lógica: Execute uma serie de ações a partir de um valor inicial até um valor final*/

for (let i = 1; i <= 10; i++){
    console.log('i vale' + i);
}

console.log('\nExemplo 3: loop para acessar array:');
// Lógica: execute ações enquanto existir dados no array
const bandas = ['Slayer', 'Nightwish', 'Rush', 'Metallica', 'Kiss'];

// começamos em zero obrigatoriamente e a condiçao de repitão de repetição é enquanto o i for menor do que a quatidade de 
for(let i = 0; i < 4; i++) {
    console.log(bandas[i]);
    
}
console.log('\n---------');

// usando .lenght para facilitar a iteração tornado-a precisa e 'automatica', acompanhando o tamanho do array
for(let i = 0; i < bandas.length; i++) {
    console.log(bandas[i]);
}

// Criando varíavel externa para que o loop nao conte a quantidade de bandas na lista a cada loop
const comprimentoBandas = bandas.length;

for(let i = 0; i < comprimentoBandas; i++) {
    console.log(bandas[i]);
}

console.log('\nExemplo 4: for/of: loop específico para ARRAY:');

const alunos = ['Marcelo', 'Alexandre', 'Emillye', 'Yuri', 'Raquel'];

for(const aluno of alunos){
    console.log(aluno+ ' Está reprovado(a)');
}

console.log('\nExemplo 5: for/on: loop específico para objetos:');

const pessoa ={
    nome: 'Seu Madruga',
    idade: 66,
    cidade: 'São Paulo',
};

for(const prop in pessoa){
    console.log(pessoa[prop]);
    // console.log(typeof(prop));
    // console.log(prop);
    
    
    
}