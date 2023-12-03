let modelos = []
let valores = []
let anos = []
let continuar = true
let contador = 0

while(continuar){
    let modelo = prompt("Digite o modelo de carro")
    modelos[contador] = modelo
    let ano = prompt("Digite o ano do carro")
    anos[contador] = ano
    let valor = parseFloat(prompt("Digite o valor"))
    valores[contador] = valor
    contador++

    let resposta = prompt('Deseja incluir mais veículos? (s/n)')
    if(resposta == "n"){
        continuar = false
    }
    

}

console.log("Carros cadastrados:")
for (let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + "-" + anos[i] + "-" + valores[i])
}


for (let i = 0; i < valores.length - 1; i++){
    for (let j = 0; j < valores.length - i - 1; j++){
        if (valores[j] > valores[j + 1]){
            
            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let MaiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores[j + 1] = MaiorValor            
        }
    }
}

console.log("Carros ordenados por preço: ");
for (let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + "-" + anos[i] + "-" + valores[i])
}