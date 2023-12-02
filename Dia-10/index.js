let nomeArray = [];
let posicaoArray = 0;
let continuar = true;

while(continuar){
    let nomeInserido = prompt('Insira um nome')
    nomeArray[posicaoArray] = nomeInserido

    let desejaContinuar = prompt('Deseja continuar? (s/n)')
    if(desejaContinuar != "s"){
        continuar = false
    }
    posicaoArray++
}

console.log(nomeArray)