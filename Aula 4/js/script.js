/*var a = 10;//jeito generico pouco usado hoje em dia, mas pode ser encontrada em muitos projetos antigos

let b = 10;//Permite alteração 

const c = 10;//Não Permite alteração */
/*const d = prompt("Digite um valor");
alert(d);
document.write(d);*/
/*
const campo = document.getElementById('nome');
campo.value
campo.value = "Outro teste"*/
/*const nome = document.getElementById('nome');

const resultado = document.getElementById('resultado');

resultado.innerText = "";
resultado.style = "border:2px solid red";

resultado.innerText = "";*/

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');

//Função para fazer o preenchimento dos dados  
function preencher(campo, msg){
    campo.value == prompt(msg);
    if(campo.value == ""){
       campo.value = "Não informado";
    }
}

function verificar(campo){
    console.log(campo.value);

}


/*
nome.value = prompt("Informe o seu nome");
if(nome.value == ""){
    nome.value = "Não informado";
}
email.value = prompt("Informe o seu email");
if(email.value == ""){
    email.value = "Não informado";
}
telefone.value = prompt("Informe o seu telefone");
if(telefone.value == ""){
    telefone.value = "Não informado";
}*/
//Ficou assim com funções
preencher(nome,"Informe o seu nome");
preencher(email,"Informe o seu email");
preencher(telefone,"Informe o seu telefone");



//Funções
function limparCampos(){
    const nome = document.getElementById('nome').value = "";
    const email = document.getElementById('email').value = "";
    const telefone = document.getElementById('telefone').value = "";
    alert('Sucesso! ');
   /* nome.value = prompt("");
    email.value = prompt("");
    telefone.value = prompt("");*/
}





