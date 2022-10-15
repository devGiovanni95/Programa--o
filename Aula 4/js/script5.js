//funcao para enviar dados 
function enviar(){
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    
    if(nome.value != '' && email.value != '' && telefone.value != ''){
        alert('Enviado Com Sucesso!!!');
        limparCampos();
    }else{
        alert('Preencha todos os campos!!! ');
    }
}

//funcao para verificar se estavam preenchidos
function verificar(campo){
    if(campo.value == ""){
        alert('Campo obrigatorio');
    }
}

//Função para limpar campos
function limparCampos(){
    const nome = document.getElementById('nome').value = "";
    const email = document.getElementById('email').value = "";
    const telefone = document.getElementById('telefone').value = "";
    alert('Campo Limpo comn sucesso! ');
}

//Criando um evento para cada ID-Botao/campo  
const btnLimpar = document.getElementById('btnLimpar');
//Definindo o evento de ação e a função associado ao evento
btnLimpar.addEventListener("click", limparCampos);

const btnEnviar= document.getElementById('btnEnviar');
btnEnviar.addEventListener("click", enviar);//onclick="calcular()"   pode criar mais de um evento
document.getElementById('nome').addEventListener("change",function(){
    verificar(this);
});
document.getElementById('email').addEventListener("change",function(){
    verificar(this);
});
document.getElementById('telefone').addEventListener("change",function(){
    verificar(this);
});

