function idPokemon(){
let idPoke = document.getElementById('idPok').value;
console.log(idPoke)
}

function preencherTela(data){
  document.getElementById('nomePokemon').innerText = data
}



 fetch('https://pokeapi.co/api/v2/pokemon/55' )
 console.log("aki" + idPoke)
    .then(response => response.json())
    .then(data => {
      document.getElementById('Pokemon').src = data.sprites.front_default;
      //preencherTela(data);
 console.log("aki" + idPoke)

    })



 /*
 fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => reponse.json())
    .then(data => {
      document.getElementById('poke').src = data.sprites.front_default;
    })*/