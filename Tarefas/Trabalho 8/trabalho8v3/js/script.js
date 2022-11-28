let numId = 0

function preencherTela(data, num, namepoke) {
  //mostra a imagem do pokemon
  document.getElementById(num).src = data.sprites.front_default
  // Mostra o nome
  document.getElementById(namepoke).innerText = data.name
}

function idPokemon() {
  let idPoke = document.getElementById("idPok").value
  console.log(idPoke)
  numId++
  namepoke = numId + "a"

  if (idPoke > 0 && idPoke < 899) {
    //Chama api do pokemon
    fetch("https://pokeapi.co/api/v2/pokemon/" + idPoke)
      //converte em json
      .then((response) => response.json())
      //tratamento
      .then((data) => {
        preencherTela(data, numId, namepoke)
      })
  } else {
    alert("Ops!!! Pokemon não cadastrado ainda")
    numId--
  }
}

function limpar() {
  window.location.reload()
}
