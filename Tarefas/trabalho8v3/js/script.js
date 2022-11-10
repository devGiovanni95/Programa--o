function preencherTela(data) {
  //mostra a imagem do pokemon
  let pokemon = (document.src = data.sprites.front_default)
  const tr = document.createElement("tr")

  const img = document.createElement("img")
  img.document.src = data.sprites.front_default

 // const tabelaPokemon = document.getElementById.getElementById("listaPokemons")

  //const td = document.createElement("td")
 // td.innerHTML = pokemon

  // Mostra o nome
 // document.getElementById("nomePokemon").innerText = data.name

  tr.appendChild(img)
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
