/*
function buscarCep(dadoCep) {
  fetch(`https://viacep.com.br/ws/${dadoCep}/json/`)
    .then((response) => response.json()) //
    .then((dados) => {
      console.table(dados)
      endereco = dados
      cep = dados.cep
      cidade = dados.localidade
      estado = dados.uf
      document.write(cep, cidade, estado)
      return this
    })
}*/
/*
function buscarCidade(dadoCep) {
  fetch(`https://viacep.com.br/ws/${dadoCep}/json/`)
    .then((response) => response.json()) //
    .then((dados) => {
      return (cidade = dados.localidade)
      // console.log("teste novo " + dados.localidade)
    })
}*/

function buscarEstado(dadoCep) {}

let listaEnderecos = []

function limparCampos() {
  document.getElementById("txtCep").value = ""
  //document.getElementById("tempo").value = " "
}

function addTarefa(tarefa) {
  const novaTarefa = document.getElementById("txtCep").value

  /*push adicionar no finalda lista */
  if (novaTarefa != "") {
    listaEnderecos.push(tarefa)
    renderizarEnderecos()
    limparCampos()
  } else {
    alert("Ops Preencha todos os campos")
  }
}

function removerTarefa(id) {
  listaEnderecos = listaEnderecos.filter((tarefa) => tarefa.id !== id)
  console.log(id)
  renderizarEnderecos()
}
/*
function fazerTarefa(id, botao) {
  listaTarefas = listaTarefas.map((tarefa) => {
    if (tarefa.id == id) {
      tarefa.feita = !tarefa.feita
    }
    return tarefa
  })

  if (botao.innerText == "Fazer") {
    botao.innerText = "Desfazer"
    botao.classList.remove("btn-warning")
    botao.classList.add("btn-success")
  } else {
    botao.innerText = "Fazer"
    botao.classList.remove("btn-success")
    botao.classList.add("btn-warning")
  }

  console.log(listaTarefas)
}*/

function renderizarEnderecos() {
  let lista = document.getElementById("listaUl")
  lista.innerHTML = ""

  listaEnderecos.map((endereco) => {
    let li = document.createElement("li")
    li.classList.add("my-3")
    li.innerHTML = endereco.cep
    console.log(endereco.cep)

    li.innerHTML +=
      "   Cidade " + endereco.cidade + " Estado:  " + endereco.estado

    li.innerHTML += `<button type="button"
                      class="btn btn-danger btn-sm"
                      onclick="removerTarefa(${endereco.cep})">
                      Remover
                      </button>
                      `

    lista.appendChild(li)
    /*campoBtn.appendChild(li2)*/
  })
}

renderizarEnderecos()
const btnAdicionar = document.getElementById("btnAdicionar")
const txtCep = document.getElementById("txtCep")
btnAdicionar.addEventListener("click", function () {
  const endereco = document.getElementById("txtCep").value
  fetch(`https://viacep.com.br/ws/${endereco}/json/`)
    .then((response) => response.json()) //
    .then((dados) => {
      addTarefa({
        cep: endereco,
        estado: dados.uf,
        cidade: dados.localidade,
      })
    })
})
