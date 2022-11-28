//let novaTabela = document.createElement("table")

function preencherTela(data) {
  //const img = document.createElement("img")
  const img = new Image(200,200)

  img.src = data.sprites.front_default

  //document.getElementById("Pokemon").src = data.sprites.front_default
}

function idPokemon() {
  let idPoke = document.getElementById("idPok").value
  console.log(idPoke)

  //Chama api do pokemon
  fetch("https://pokeapi.co/api/v2/pokemon/" + idPoke)
    //converte em json
    .then((response) => response.json())
    //tratamento
    .then((data) => {
      preencherTela(data)
    })
}
