//Variáveis
let nome = prompt('Insira seu nome')
let idade = parseInt(prompt('Insira sua idade'))
let peso = prompt('Insira seu peso em kg')
let altura = prompt('Insira sua altura (separando por vírgula metros de centímetros)')
let profissao = prompt('Insira sua profissão')

if(idade  >= 18){
    console.log(`Olá ${nome}, você tem ${idade}, é ${profissao}, tem ${altura}M de altura e pesa ${peso} kg. Está liberado para beber` );
    
}
else{
    console.log(`Olá ${nome}, você tem ${idade}, é ${profissao}, tem ${altura}M de altura e pesa ${peso} kg. Não tem gelada para você` );
    
}


let meses = idade * 12
let dias = idade * 365 
let semanas = idade * 52

console.log('Seus meses são:' + meses)
console.log('Seus dias são:' + dias)
console.log('Suas semanas são:' + semanas)



// Exercício de IMC

let imc = peso / (altura * altura)

if (imc < 18.5){
    console.log("Seu indice de IMC é Magreza")
} else if (imc >= 18.5 && imc <= 24.9){
    console.log("Seu indice de IMC é Normal")
} else if (imc >= 25 && imc <= 30){
    console.log("Seu indice de IMC é Sobrepeso")
} else {
    console.log("Seu indice de IMC é Obesidade")
}
