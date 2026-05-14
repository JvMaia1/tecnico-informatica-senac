'use strict'

const clientes = [
    {
        nome: 'Dio',
        identificador: 1
    },
    
    {
        nome: 'Ozzy',
        identificador: 2    
    },
    
    {
        nome: 'Ian',
        identificador: 3
    }
];

for (let cliente of clientes){
    console.log(`- Cliente: ${cliente.nome} id: ${cliente.identificador}`);
}