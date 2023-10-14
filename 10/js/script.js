// 10. Escreva um programa que defina uma variável para armazenar a temperatura em graus Celsius e converta-a para Fahrenheit. Exiba a temperatura em ambas as escalas no console.

//    O programa deve receber a temperatura em graus Celsius como entrada, convertê-la para Fahrenheit utilizando a fórmula adequada e exibir a temperatura em ambas as escalas no console.

let celsius = parseFloat(prompt(`Insira aqui a temperatura em °C e converta para Fahrenheit`))

let fahrenheit = ((celsius * 1.8)+32)


alert(`A temperatura Fahrenheit é de ${fahrenheit}°F`)