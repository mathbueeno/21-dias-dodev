let nomesArray = []
let notasArray = []
let continuar = true
let contador = 0


// Loop
while(continuar){
    let nome = prompt("Digite o nome do " + (contador + 1) + " aluno");
    let nota = parseInt(prompt("Digite a nota do aluno"));
    nomesArray[contador] = nome
    notasArray[contador] = nota
    contador++
    let resposta = prompt('Deseja inserir informações sobre outro aluno? (s/n)' )
    if(resposta == "n"){
        continuar = false
    }
  
}

// Informações
console.log("Notas dos alunos: ");
for (let i = 0; i < nomesArray.length; i++){
    console.log(nomesArray[i] + " - " + notasArray[i])
}

let somaNotas = 0
for (let i = 0; i < notasArray.length; i++){
    somaNotas += notasArray[i]
}

let media = somaNotas / nomesArray.length
console.log("A soma das notas foram:" + somaNotas)
console.log("A média da turma foi:" +  media)