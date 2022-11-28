function calcular() {
    const salario = document.getElementById('salario').value;
    const aumento = document.getElementById('aumento').value;

    const novoSalario = salario * (1 + (aumento/100));
    document.getElementById('resultado').innerText = "O resultado é R$"+novoSalario;
}

function verificar(){
    const salario = document.getElementById('salario');
    if(salario.value == ""){
        salario.style = "border: 2px solid red";
    }
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click",calcular); // onclick="calcular()"

const salario = document.getElementById('salario');
salario.addEventListener("change",verificar);