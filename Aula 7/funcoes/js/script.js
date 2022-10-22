let a = function () {
  alert("Teste")
}

/*
function a() {}

console.log(a)
console.log("Teste")*/

console.clear()
console.log("Console limpo com sucesso!!")
console.log(document)

//keyup -> quando voce solta a tecla da efetua a verificação
//keyDown -> no momento que voce preciona ja faz a verificação
document.getElementById("testFuncao").addEventListener("keydown", function (e) {
  console.log(this)
  console.log(e)

  //lista de teclas proibidas
  let teclas = ["1", "2"]
  if (teclas.indexOf(e.key) > -1) {
    alert("Não pode digitar numeros")
    e.preventDefault()
  }

  if (e.key == "Backspace") {
    console.log(e.key)
    //cancelar a acao do backspace
    e.preventDefault()
  }
})
//arow function     ()=>{}

document.addEventListener("keydown", function (e) {
  console.log(e)
  if (e.key == "F5") {
    e.preventDefault()
  }
  if (e.key == "ArrowDown") {
    e.preventDefault()
    console.log(e)
  }
})
