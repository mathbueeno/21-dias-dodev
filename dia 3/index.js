// var let e const 
// let é uma variável que podemos alterar
// const é uma constante que não pode ser substituida depois
// undefined - 
// null - 


// let meuNome = 'Matheus de Abreu Bueno'
// console.log(meuNome)
// meuNome = 'Matheus Bueno' 



// Operadores Aritméticos
// Multiplicação "*"
// Divisão "/"
// Adição "+"
// Subtração "-"
// Módulo "%" - resto da divisão 
// Concatenação de textos - caso a variável esteja em texto, ao invés de somar, irá juntar. "Olá," + nome


// let numUm = 2;
// let numDois = 2;
// let soma = numUm + numDois;
// console.log(soma);

// Prompt - Abre uma janela para o usuário inserir seus dados
// Ele está guardando em uma variável a resposta do usuário
// parseInt() = tenta converter para número inteiro
// Number = Tenta converter pegando as casas decimais, diferente do int que pega inteiro

// let entradaDoUsuario = prompt("Escreva sua idade");
// let entradaDoUsuarioEmInt = Number(entradaDoUsuario)
// console.log(2000 + entradaDoUsuarioEmInt)



// Variáveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0


//Conversões e preenchimento pelo usuário
nome = prompt("Me diga seu nome");  
idade = parseInt(prompt("Me diga sua idade"));
altura = parseFloat(prompt("Me diga sua altura"));
peso = parseInt(prompt("Me diga seu peso"));

//Cálculo do ano do nascimento
let anoDeNascimento = 0
anoDeNascimento = 2023 - idade;

// Cálculo do IMC
let imc = 0
imc = peso / (altura * altura);



converterAnoDeNascimento = toString(anoDeNascimento) 



console.log("Olá " + nome + ", você tem " + idade + "anos, nasceu em " + anoDeNascimento + ", tem " + altura + "de altura, pesa " + peso + "kg seu IMC é " + imc + "Kg/m2");
