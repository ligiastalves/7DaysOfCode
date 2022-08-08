
    var nome = prompt('Qual é o seu nome?');
    var idade = prompt('Qual a sua idade?');
    var linguagem = prompt('Qual linguagem de programação você está estudando?');
    document.write(`Olá, <strong>${nome}</strong>! Voce tem <strong>${idade}</strong> anos e já está aprendendo <strong>${linguagem}</strong>!`);
    
    setTimeout(() => {
        var resposta = prompt(`Voce gosta de estudar ${linguagem}? Responda [1] para Sim ou [2] para não: `, resposta);
    
    }, 5000);
    
    if (resposta == 1){
        alert('Muito bom! Continue estudando e você terá muito sucesso.');    }
    else{
        alert('Ahh que pena...');
    }
    

