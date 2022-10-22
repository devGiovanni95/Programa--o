//alert("Teste");

function teste1() {
  alert("Teste")

  //Redirecionar o usuário
  //window.location.href = "http://www.google.com.br"
}

function teste2(a, b, c) {
  alert(a)
  console.log(this)
}

function teste3(a) {
  console.log(a.value)
}

function teste() {
  let a = "10"
  if (a === 10) {
    console.log("é igual")
  } else {
    console.log("não é igual")
  }
}

function teste4() {
  let c = 10052
  console.log(c / 100)
  console.log(typeof c)
}

teste("a", "b", "c")
console.log(this)

teste4()

function tabuada(valor) {
  for (let index = 1; index <= valor; index++) {
    console.log(valor * index)
  }
}

tabuada(5)
