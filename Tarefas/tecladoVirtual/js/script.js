valor1 = document.getElementById("1").value
document.getElementById("2").value = 2

function escrever() {
  /*  document.getElementById(this).value;*/
  document.getElementById("password").value = valor1
  console.log(valor1)
  console.log(document.getElementById("password").value)
}

/*document.getElementById("password").value =document.getElementById(this).value;*/

function num(x){
 // let senha = [6]
senha = document.getElementById('visor').innerHTML;

  document.getElementById('visor').innerHTML = senha + x;

  
/*
for(let i=0; i> senha.length;i++){
}*/
}
