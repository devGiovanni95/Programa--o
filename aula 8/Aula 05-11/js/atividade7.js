function digitarSenha(num){
    const senha = document.getElementById("senha");
    if(senha.innerText.length < 4){
        senha.innerText += num;
    }
}

function limparSenha(){
    const senha = document.getElementById("senha");
    senha.innerText = "";
}

function apagarUltimoDigito(){
    const senha = document.getElementById("senha");
    senha.innerText = senha.innerText.slice(0, -1);
}

const limpar = document.getElementById("limpar");
limpar.addEventListener("click", limparSenha);

const todosBotoes = document.querySelectorAll("#botoes button");
todosBotoes.forEach(function(botao){
    botao.addEventListener("click", function(){
        digitarSenha(botao.innerText);
    });
});