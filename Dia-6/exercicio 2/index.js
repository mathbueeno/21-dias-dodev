
// Não consegui resolver sem resolução

let tabuada = parseInt(prompt('Insira um número'));

for(let contador = tabuada; contador <= tabuada + 2; contador ++ ){
    console.log("tabuada: " + contador)
        for (let i = 0; i <= 10; i++){
            console.log(contador + 'x' + i + "=" + (contador * i))
        }
}