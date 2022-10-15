function calcular(){
    const salario = document.getElementById('salario').value;
    const aumento = document.getElementById('aumento').value;

    const novoSalario = salario * (1 + (aumento/100));
    document.getElementById('resultado').innerText = "O resultado é R$ " + novoSalario; 

}

function verificar(campo){
    if(campo.value == ""){
        alert('Campoobrigatorio');
    }
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click", calcular);//onclick="calcular()"   pode criar mais de um evento

const salario = document.getElementById('salario');
salario = document.addEventListener("click",verificar());