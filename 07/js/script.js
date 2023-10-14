//7. Escreva um programa que defina uma variável para armazenar o valor de um produto com desconto e exiba o valor original e o valor com desconto no console.

   //O programa deve receber o valor original de um produto e o desconto a ser aplicado sobre ele, calcular o valor com desconto e exibir tanto o valor original quanto o valor com desconto no console.

   let product = 2000
   let discount = ((2000*10)/100)
   let sale= product-discount

   alert(`Parcele em até 10x e pague: ${product.toLocaleString(`pt-br`, {style: `currency`, currency:`BRL`})} \t Ou pague á vista com 10% de desconto: ${sale.toLocaleString(`pt-br`, {style: `currency`, currency:`BRL`})}`)
