valor1 = document.getElementById("1").value
document.getElementById("2").value = 2

function escrever() {
  /*  document.getElementById(this).value;*/
  document.getElementById("password").value = valor1
  console.log(valor1)
  console.log(document.getElementById("password").value)
}

/*document.getElementById("password").value =document.getElementById(this).value;*/

function num(x) {
  let senha = document.getElementById("visor").innerHTML
 // let tam = senha.length - 75;
 let tam = (senha.length - 75)
 do{
    document.getElementById("visor").innerHTML = senha + x
    tam++
 }while(tam < 6)
 

  console.log(senha.length-75)

  //console.log(aux)
  /*  if (senha.length > 6) {
    limpar()
  }*/
}

function tam1() {
  let tamanho = document.getElementById("visor").innerHTML
  document.getElementById("visor").innerHTML = tamanho.substring(
    6,
    tamanho.length - 1
  )
  console.log(tamanho)
  console.log(tmn)
}

function tam() {
  let tamanho = document.getElementById("visor").innerHTML
  if (tamanho.length == 7) {
    document.getElementById("visor").innerHTML = tamanho.substring(
      0,
      tamanho.length - 1
    )
    limpar()
  }
}

function limparTudo() {
  document.getElementById("visor").innerHTML = ""
}
function limpar() {
  let senha = document.getElementById("visor").innerHTML
  document.getElementById("visor").innerHTML = senha.substring(
    0,
    senha.length - 1
  )
}
/*
for(let i=0; i> senha.length;i++){
}*/
