valor1 = document.getElementById("1").value
document.getElementById("2").value = 2
/*let tecla3 = document.getElementById("3")
tecla3 = 3
let tecla4 = document.getElementById("4")
tecla4 = 5
let tecla5 = document.getElementById("5")

let tecla6 = document.getElementById("6")

let tecla7 = document.getElementById("7")

let tecla8 = document.getElementById("8")

let tecla9 = document.getElementById("9")

let tecla0 = document.getElementById("0")

let teclaDeleta = document.getElementById("deletar")

let teclaLimpa = document.getElementById("apagarTudo")
/*
document.getElementById("teclado").addEventListener("click", (btn) => {
  console.log(btn)
  console.log(document)

  /* document.getElementById("resultado").innerText =
    "O resultado é R$ " + novoSalario
  const senha = ["", "", "", "", "", ""]
  let i = 0
  while (senha < i) {
    let i
    console.log(btn.value)
    senha[i] = document.getElementById(this)
    document.getElementById("visor").innerText = senha
    i++
  }
})*/

/*document.addEventListener("click", (btn) => {
  console.log(btn)
  console.log(document)

  document.getElementById("resultado").innerText =
    "O resultado é R$ " + novoSalario
  const senha = ["", "", "", "", "", ""]
  let i = 0
  while (senha < i) {
    let i
    console.log(btn.value)
    senha[i] = document.getElementById(this)
    document.getElementById("visor").innerText = senha
    i++
  }
}) */
/*
document.getElementById("visor").innerText = senha
document.addEventListener("click", (btn) => {
  console.log(btn)
  console.log(document)

  document.getElementById("resultado").innerText =
    "O resultado é R$ " + novoSalario
  const senha = ["", "", "", "", "", ""]
  let i = 0
  while (senha < i) {
    let i
    console.log(btn.value)
    senha[i] = document.getElementById(this)
    document.getElementById("visor").innerText = senha
    i++
  }
})*/

function escrever() {
  /*  document.getElementById(this).value;*/
  document.getElementById("password").value = valor1
  console.log(valor1)
  console.log(document.getElementById("password").value)
}

document.getElementById("1").addEventListener("click", escrever)
document.getElementById("2").addEventListener("click", escrever)
document.getElementById("3").addEventListener("click", escrever)
document.getElementById("4").addEventListener("click", escrever)
document.getElementById("5").addEventListener("click", escrever)
document.getElementById("6").addEventListener("click", escrever)
document.getElementById("7").addEventListener("click", escrever)
document.getElementById("8").addEventListener("click", escrever)
document.getElementById("9").addEventListener("click", escrever)
document.getElementById("0").addEventListener("click", escrever(this))

/*document.getElementById("password").value =document.getElementById(this).value;*/
