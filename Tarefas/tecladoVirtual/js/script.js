valor1 = document.getElementById("1").value
document.getElementById("2").value = 2

function escrever() {
  /*  document.getElementById(this).value;*/
  document.getElementById("password").value = valor1
  console.log(valor1)
  console.log(document.getElementById("password").value)
}

/*document.getElementById("password").value =document.getElementById(this).value;*/
/*
function num(x) {
  let senha = document.getElementById("visor").innerHTML
  // let tam = senha.length - 75;
  let tam = senha.length - 75

  do {
    document.getElementById("visor").innerHTML = senha + x
  } while (tam > 6)

  console.log(senha.length - 75)

}*/

function num(x) {
  let senha = document.getElementById("visor").innerHTML
  document.getElementById("visor").innerHTML = senha + x
}

function tam() {
  let tamanho =
    document.getElementById(
      "visor"
    ).innerText /*para puxar corretamente o tamanho do texto tem que usar o innerText */
  console.log(tamanho.length)
  if (tamanho.length > 6) {
    document.getElementById("visor").innerHTML = tamanho.substring(
      0,
      tamanho.length - 1
    )
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
