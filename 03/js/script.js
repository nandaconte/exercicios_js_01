//3. Escreva um programa que defina uma variável booleana para representar se um usuário está logado em um aplicativo. Exiba uma mensagem de boas-vindas personalizada no console, dependendo do valor da variável.

// O programa deve definir uma variável booleana para representar se o usuário está logado ou não. Dependendo do valor da variável, o programa deve exibir uma mensagem de boas-vindas personalizada no console.

let login = prompt(`Insira o seu usuário`)

if (login === `@nandaconte`){
    alert(`Seja bem-vindo`)
}
else{
    alert(`Por favor, faça o login para acessar o login`)
}