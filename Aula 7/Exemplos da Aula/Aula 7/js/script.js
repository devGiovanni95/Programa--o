function teste(){
    let a = 10052;
    console.log(typeof a);
    a = "Teste";
    console.log(typeof a);
    a = [];
    console.log(typeof a);
}

function tabuada(valor){
    for (let i = 1; i <= valor; i++) {
        console.log(valor * i);
    }
}

function calcular(){
    const val1 = document.getElementById('val1').value;
    const val2 = document.getElementById('val2').value;
    
    if(val1 != "" && val2 != ""){
        const operacao = document.getElementById('operacao').value;
        if(operacao == 1){

        } else if(operacao == 2){

        } else if(operacao == 3) {

        } else {

        }

        switch (operacao) {
            case 1:
                alert(val1+val2);
                break;
            case 2:
                alert(val1-val2);
                break;
            case 3:
                alert(val1*val2);
                break;
            default:
                alert(val1/val2);
                break;
        }
    }
}

function validar(campo){
    if(campo.value == ""){
        campo.style = "border: 2px solid red";
      } else {
        campo.style = "border: 2px solid green";
      }
}

document.getElementById('val1')
.addEventListener('keyup',function(){
    validar(this);
})

document.getElementById('val2').addEventListener('keyup',function(){
    validar(this);
})

validar(document.getElementById('val1'));
validar(document.getElementById('val2'));