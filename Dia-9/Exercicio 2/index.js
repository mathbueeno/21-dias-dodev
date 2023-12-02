// Variáveis
let confirmacao = "n"
let nome = ""
let idade = 0
let salarioAtual = 0

// Pedidos para os clientes
while(confirmacao != "s"){
    nome = prompt('Escreva seu nome')
    idade = parseInt(prompt('Escreva sua idade'))
    salarioAtual = parseFloat(prompt('Escreva seu salário'))

   console.log(`Nome: ${nome}, Idade: ${idade}, Salário Atual: ${salarioAtual}`);
   confirmacao = prompt('As informações estão corretas? (s/n)');
}


// Cálculo 
let aumentoSalarial = 0.015
console.log("Previsão de aumento para os próximos 10 anos:" )

for(let ano = 1; ano <= 10; ano++){
    salarioAtual += salarioAtual * aumentoSalarial
    aumentoSalarial *= 2
    
    console.log((2023 + ano) + "= R$ " + salarioAtual)
}
