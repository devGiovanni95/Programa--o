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
