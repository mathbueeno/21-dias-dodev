let numeroUm = parseInt(prompt("Diga o primeiro número"));
let numeroDois = parseInt(prompt("Diga o segundo número"));
let operacao = parseInt(prompt("Qual a operação desejada?" + "\n1 - soma; \n2 - subtração; \n3 - divisão; \n4 - multiplicação; "));



switch(operacao){
    
    case 1 :
        console.log(numeroUm + numeroDois);
        break;
    case 2 :
        console.log(numeroUm - numeroDois);
        break;
    case 3 :
        console.log(numeroUm / numeroDois);
        break;
    case 4 :
        console.log(numeroUm * numeroDois);
        break;
    default :
        console.log('Calculo inválido')
        break;
     
}
