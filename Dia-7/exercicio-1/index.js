let notaMedia = true;
let homens = 0;
let mulheresAcimaDe7 = 0;
let maiorNotaHomens = 0;
let contador = 1;


while(contador <= 10){
    nota = parseInt(prompt('Insira a nota do ' + contador + 'º aluno'))
    sexoAluno = prompt("Insira seu sexo (m/f)")

    if(sexoAluno == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        homens++
    }   

    if (sexoAluno == "f" && nota > 7){
        mulheresAcimaDe7++
    }

    notaMedia += nota
    contador++
}

notaMedia = notaMedia / 10
console.log("A média geral dos alunos foi: " + notaMedia)
console.log("A quantidade de homens foi: " + homens)
console.log("A quantidade de mulheres com notas acima de 7 foi: " + mulheresAcimaDe7)
console.log("A maior nota entre os homens foi: " + maiorNotaHomens)

