// 8. Escreva um programa que defina uma variável do tipo null para representar um valor ausente em um campo de um formulário e exiba uma mensagem de alerta no console caso o usuário deixe o campo em branco.

//    O programa deve definir uma variável do tipo null para representar um valor ausente em um campo de um formulário. Caso o usuário deixe o campo em branco, uma mensagem de alerta deve ser exibida no console.


let name1= String(prompt(`Insira seu nome`))

if (name1 == ""){
    console.log(`Informe o seu nome, por favor`)
}
else{
    console.log(`Bem-vindo`)
}