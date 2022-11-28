function calcular(){
    const valor1 = Number(document.getElementById('valor1').value);
    const valor2 = Number(document.getElementById('valor2').value);

    let resultado = Number(document.getElementById('resultado'));//parseInt/parseFloat

    const op = document.getElementById('operacao').value;
  
    console.log(valor1);
    console.log(valor2);

   
    if(valor1 <= 0 || valor2 <= 0){

      console.log(valor1);
    console.log(valor2);
    alert('Preencha todos os dados');

     }else {      
         if(op == 1){
            resultado = valor1 + valor2;
         }else if(op == 2){
            resultado = valor1 - valor2;
         }else if(op == 3){
            resultado = valor1 / valor2;
         }else {
            resultado = valor1 * valor2;
         }  

         if(isNaN(resultado)){
            alert('Apenas valores Numericos' );
      
         }else{
            document.getElementById('resultado').value = resultado;
      
         }
   } 

 /*    if(valor1 == undefined && valor2 == undefined || valor1 == '0' && valor2 == '0'){

      console.log(valor1)
    console.log(valor2)
    alert('Preencha todos os dados')
         
      document.getElementById('resultado').value = resultado;

     }else if(valor1 != undefined && valor2 != undefined || valor1 != '0' && valor2 != '0'){
      
      if(op == 1){
         resultado = valor1 + valor2;
       }else if(op == 2){
          resultado = valor1 - valor2;
       }else if(op == 3){
          resultado = valor1 / valor2;
       }else {
          resultado = valor1 * valor2;
       }

    
   } 
   alert('Preencha todos os dados')
     console.log(valor1+'saiu')
     console.log(valor2)*/
 /* if(valor1.value == null && valor2.value != ""){
      alert('Preencha o primeiro campo')

      }else  if(valor1.value == "" || valor2.value == ""){
         alert('Preencha o segundo campo')
   
         }else{

      if(op == 1){
         resultado = valor1 + valor2;
       }else if(op == 2){
          resultado = valor1 - valor2;
       }else if(op == 3){
          resultado = valor1 / valor2;
       }else {
          resultado = valor1 * valor2;
       }
document.getElementById('resultado').value = resultado;
     }
     
   //  console.log(resultado)   |*/
  
}

const btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener("click", calcular);