function buscarEstado(dadoCep) {}

let listaEnderecos = []

function limparCampos() {
  document.getElementById("txtCep").value = ""
}

function addEndereco(cep) {
  const novoEndereco = document.getElementById("txtCep").value

  /*push adicionar no finalda lista */
  listaEnderecos.push(cep)
  renderizarEnderecos()
  limparCampos()
}

function removerTarefa(id) {
  listaEnderecos = listaEnderecos.filter((endereco) => endereco.id !== id)
  /* console.log(id)*/
  renderizarEnderecos()
}

function renderizarEnderecos() {
  let lista = document.getElementById("ListaEndereco")
  lista.innerHTML = ""

  listaEnderecos.map((endereco) => {
    let li = document.createElement("li")
    li.classList.add("my-3")
    li.innerHTML = endereco.cep
    console.log(endereco.cep)
    if(endereco.cidade === undefined){
      li.innerHTML +=
      "&nbsp Ops CEP invalido"

    li.innerHTML += ` &nbsp &nbsp <button type="button"
                      class="btn btn-danger btn-sm"
                      onclick="removerTarefa(${endereco.id})">
                      Remover
                      </button>
                      `
    }else{
      li.innerHTML +=
      "&nbsp  |  Cidade:  " + endereco.cidade + "&nbsp  |  Estado:  " + endereco.estado

    li.innerHTML += ` &nbsp &nbsp <button type="button"
                      class="btn btn-danger btn-sm"
                      onclick="removerTarefa(${endereco.id})">
                      Remover
                      </button>
                      `
    }
    

    lista.appendChild(li)
  })
  let tempoTotal = document.getElementById("qtdCeps")
  tempoTotal.innerHTML = listaEnderecos.length
}

renderizarEnderecos()
const btnAdicionar = document.getElementById("btnAdicionar")
const txtCep = document.getElementById("txtCep")
btnAdicionar.addEventListener("click", function () {
  const tmn = document.getElementById("txtCep").value

  console.log(txtCep.length)
  if(tmn.length !== 8){
    alert("Ops verifique os numeros digitados")
  }else{
  const endereco = document.getElementById("txtCep").value
  fetch(`https://viacep.com.br/ws/${endereco}/json/`)
    .then((response) => response.json()) //
    .then((dados) => {
      addEndereco({
        id: listaEnderecos.length + 1,
        cep: endereco,
        estado: dados.uf,
        cidade: dados.localidade,
      })
    })
  }
})

