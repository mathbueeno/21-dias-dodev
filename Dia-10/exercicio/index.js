const array = [];
const indices = [];
let indiceContador = 0

const numero = parseInt(prompt("Digite o número a ser procurado:"));

for (i = 0; i < 10; i++ ) {
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}`));
    array[i] = elemento
}

for (let i = 0; i < 10; i++){
    if(array[i] === numero){
        indices[indiceContador] = i
        indiceContador++
    }
}

console.log(`O número ${numero} foi encontrado nos índices: ${indices}`);