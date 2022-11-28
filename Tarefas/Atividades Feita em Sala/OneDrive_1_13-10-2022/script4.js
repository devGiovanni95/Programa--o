function enviar(){
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');

    if(nome.value != '' && email.value != '' && telefone.value != ''){
        alert('Enviado com sucesso!');
    } else {
        alert('Preencha todos os campos!');
    }
}

function verificar(campo){
    if(campo.value == ""){
        campo.style = "border: 2px solid red";
    } else {
        campo.style = "border: 2px solid green";
    }
}

const btnEnviar = document.getElementById('btnEnviar');
btnEnviar.addEventListener("click",enviar);

document.getElementById('nome').addEventListener("change",function(){
    verificar(this);
});
document.getElementById('email').addEventListener("change",function(){
    verificar(this);
});
document.getElementById('telefone').addEventListener("change",function(){
    verificar(this);
});