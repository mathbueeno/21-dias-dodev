let tipoDeCombustivel = parseInt(prompt("Escolha o tipo de serviço" + "\n1 - gasolina; \n2 - álcool; \n3 - calibragem de pneus;"));

switch(tipoDeCombustivel){
    case 1:
        let gasolina = parseInt(prompt("Qual o valor desejado?"));
        console.log("Você abasteceu " + gasolina / 5 + " litros de gasolina");
        break;
    case 2:
        let alcool = parseInt(prompt("Qual o valor desejado?"));
        console.log("Você abasteceu " + alcool / 3 + " litros de gasolina");
        break;
    default:
        console.log('Pneu calibrado com sucesso');
        break;
}


