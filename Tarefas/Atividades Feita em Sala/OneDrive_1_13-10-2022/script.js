const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');

function preencher(campo, msg){
    campo.value = prompt(msg);
    if(campo.value == ""){
        campo.value = "Não informado";
    }
}

preencher(nome,'Informe seu nome');
preencher(email,'Informe seu email');
preencher(telefone,'Informe seu telefone');

// nome.style = "border: 2px solid red"

// Funções
function limparCampos(){    
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('telefone').value = "";
    alert('Sucesso!');
}