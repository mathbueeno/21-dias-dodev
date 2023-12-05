let nomes = [];
let senhas = [];
let contador = 0;
let continuar = true;

// TODO: Corrigir erros
while(continuar){
let opcao = prompt("O que deseja? 1- Cadastro / 2 - Login / 3 - Excluir / 4 - Encerrar")

    switch(opcao){
        case "1":
            nomes[contador] = prompt("Qual seu nome?");
            senhas[contador] = prompt("Qual sua senha?");
            contador++

            break;

        case "2":
            let name = prompt("Qual seu nome?");
            let password = prompt("Qual sua senha?");
            let loginValido = true; 
            
            for (let i = 0; i < nomes.length; i++){
                if(name == nomes[i] && password == senhas[i]){
                    loginValido = true
                }
            }

            if(loginValido){
                alert("Login feito com sucesso")
            } else {
                alert("Login ou senha incorretos")
            }

            break;

            case "3":
                let nomeExcluir = "Qual nome deseja excluir?";
                let nomeAux = [];
                let senhaExcluir = [];
                let contadorExcluir = 0;
                    for(i = 0; i < contador; i++){
                        if(nomeExcluir == nomes[i]){
                            alert("Cadastro excluido com sucesso")
                        }
                        else{
                            nomeAux[contadorExcluir]= nomes[i] 
                            senhaExcluir[contadorExcluir]= senhas[i] 
                            contadorExcluir++
                        }
                    }

                    nomes = nomeAux
                    senhas = senhaExcluir
                    contador--

                    break;

            case "4":
                continuar = false
                break;

            default:
                console.log("Escolha uma opção válida")    
                break;    
    }
};
