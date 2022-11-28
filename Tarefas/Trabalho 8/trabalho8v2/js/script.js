function preencherTela(data) {
  //mostra a imagem do pokemon
  document.getElementById("Pokemon").src = data.sprites.front_default;
 // Mostra o nome
  document.getElementById("nomePokemon").innerText = data.name;
}


function idPokemon() {
  let idPoke = document.getElementById("idPok").value;
  console.log(idPoke);

  //Chama api do pokemon
  fetch("https://pokeapi.co/api/v2/pokemon/" + idPoke)
    //converte em json
    .then((response) => response.json())
    //tratamento 
    .then((data) => {
      preencherTela(data);
    });
}


