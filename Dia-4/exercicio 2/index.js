let nome = prompt('Qual seu nome?')
let idade = parseInt(prompt('Qual sua idade?'))
let carteiraDeMotorista = prompt('Possui carteira de motorista? (sim/nao)')
let carro = prompt('Possui algum carro? (sim/nao)')

if(idade < 18  || carteiraDeMotorista === 'nao'){
    console.log(nome + ", você não pode dirigir")
} 
else if (idade >= 18 && carteiraDeMotorista === 'sim' && carro === 'nao') {
    console.log(nome + ", você pode dirigir, mas não tem carro")
}
else {
    console.log(nome + ", você é motorista")
}