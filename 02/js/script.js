//2. Escreva um programa que defina uma variável com o nome de um produto e exiba seu nome no console.

//  O programa deve definir uma variável com o nome de um produto, atribuir um valor a ela e exibir o valor da variável no console.

let product= `capacete`;
let price= 2000

console.log(`O produto escolhido foi: ${product} no valor de ${price.toLocaleString(`pt-BR`,{style:`currency`, currency:`BRL`})}`)


