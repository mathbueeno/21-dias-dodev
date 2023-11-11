// == igual | != diferente | <> maior e menor | <= >= menor e maior ou igual
// === é igual o valor e tipo | !== diferente o valor e o tipo
// Escopo - É aquilo que fazemos dentro do código. Ex. if é um escopo menor, dentro de um escopo maior.
// Variáveis  criadas em escopos menores não podem ser utilizadas em escopos menores
// && - E  - Pode validar mais de uma condição. AS DUAS PRECISAM SER VERDADEIRAS. 
// || - OU - Pode validar mais de uma condição. UMA DAS DUAS PRECISAM SER VERDADEIRAS.


const seTemfome = prompt("Está com fome? (sim/nao)")
const seTemDinheiro = prompt("Você tem dinheiro? (sim/nao)")
const restauranteAberto = prompt("O restaurante está aberto? (sim/nao)")

if(seTemfome === 'nao' || seTemDinheiro === 'nao') {
    console.log("Hoje a janta será em casa")
}
else if (seTemfome === 'sim' && seTemDinheiro === 'sim' && restauranteAberto === 'nao'  ) {
    console.log("Hoje a janta será delivery")
} 
else {
    console.log("Hoje o jantar será no seu restaurante preferido!")
}



