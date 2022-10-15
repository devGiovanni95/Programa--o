function limparCampos(){
    const nome = document.getElementById('nome').value = "";
    const email = document.getElementById('email').value = "";
    const telefone = document.getElementById('telefone').value = "";
    alert('Sucesso! ');
}


function verificar(campo){
    if(campo.value == ""){
        alert('Campo obrigatorio');
    }
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click", calcular);//onclick="calcular()"   pode criar mais de um evento

const btnLimpar = document.getElementById('btnLimpar');
btnLimpar = document.addEventListener("click",limparCampos);

