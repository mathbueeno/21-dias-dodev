let continuar = false;
let transacao = 0;
let somaValorInserido = 0;
let maiorValorInserido = 0;
let saldoCliente = 10000;

do{
    const nome = prompt('Insira seu nome')
    const cpf = prompt('Insira seu CPF')
    const valor = prompt('Insira o valor da transação: ')
    const operacao = prompt('Qual operação deseja?  S / D' )

    if(valor < 0){
        console.log('Valor inválido. Tente novamente ou insira um valor válido')
    } else if (operacao == "S" && valor > saldo){
        console.log('Saldo insuficiente. Tente novamente depois')
    } else if (operacao == "S"){
        console.log("Olá  ${nome} ${cpf}  seu novo saldo é de ${saldo}." );
        saldoCliente -= valor;
        transacao++;
        somaValorInserido += valor;
        
        if(valor > maiorValorInserido){
            maiorValorInserido = valor;
        }
        console.log("Transação realizada com sucesso. Seu saldo atual é de ${saldo}")
    } else {
        console.log("Olá  ${nome} (${cpf})  seu novo saldo é de ${saldo}." );
        saldoCliente += valor;
        transacao++;
        somaValorInserido += valor;
        if(valor > maiorValorInserido){
            maiorValorInserido = valor;
            }
            console.log("Transação realizada com sucesso. Seu saldo atual é de ${saldo}")
    }

    const opcao = prompt("Deseja continuar? 1-continue / 2- parar");
    if(opcao === "1"){
        continuar = true;
    } else if (opcao === "2"){
        continuar = false;
    } else {
        console.log("Opção inválida. Escolha uma opção válida");
        continuar = false
    }
    

} 

while (continuar) {
    console.log(`Saldo final: R$${saldo}`)
    console.log(`Maior valor inserido: R$${maiorValorInserido}`)
    console.log(`Média dos valores: R$${(somaValorInserido / transacao)}`)
}