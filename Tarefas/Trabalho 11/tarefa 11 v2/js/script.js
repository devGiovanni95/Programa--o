let listaTarefas = [
  { id: 1, tarefa: "Estudar JS", tempo: "15", feita: false },
  { id: 2, tarefa: "Estudar Botstrap", tempo: "45", feita: false },
  { id: 3, tarefa: "Estudar Engenharia de Software", tempo: "5", feita: false },
]

function limparCampos() {
  document.getElementById("tarefa").value = " "
  document.getElementById("tempo").value = " "
}

function addTarefa(tarefa) {
  const novaTarefa = document.getElementById("tarefa").value
  const tempo = document.getElementById("tempo").value.replace(",", ".")

  /*push adicionar no finalda lista */
  if (novaTarefa != "" && tempo != "") {
    listaTarefas.push(tarefa)
    renderizarTarefas()
    limparCampos()
  } else {
    alert("Ops Preencha todos os campos")
  }
}

function removerTarefa(id) {
  listaTarefas = listaTarefas.filter((tarefa) => tarefa.id !== id)
  console.log(id)
  renderizarTarefas()
}

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
}

function renderizarTarefas() {
  let campoText = document.getElementById("campoText")
  campoText.innerHTML = ""

  let campoBtn = document.getElementById("campoBtn")
  campoBtn.innerHTML = ""

  listaTarefas.map((texto) => {
    let li = document.createElement("div")
    li.classList.add("mb-4")

    let li2 = document.createElement("div")
    li2.classList.add("mb-3")

    li.innerHTML = texto.tarefa
    li.innerHTML += "   Tempo: " + texto.tempo + " Minutos  "
    console.log(texto.feita)
    if (texto.feita === false) {
      li2.innerHTML += `<button type="button"
                      class="btn btn-warning btn-sm"
                      onclick="fazerTarefa(${texto.id}, this)">
                      Fazer
                      </button>
                      `
      li2.innerHTML += `<button type="button"
                      class="btn btn-danger btn-sm"
                      onclick="removerTarefa(${texto.id})">
                      Remover
                      </button>
                      `
    } else {
      li2.innerHTML += `<button type="button"
                      class="btn btn-success btn-sm"
                      onclick="fazerTarefa(${texto.id}, this)">
                      Desfazer
                      </button>
                      `
      li2.innerHTML += `<button type="button"
                      class="btn btn-danger btn-sm"
                      onclick="removerTarefa(${texto.id})">
                      Remover
                      </button>
                      `
    }
    campoText.appendChild(li)
    campoBtn.appendChild(li2)
  })

  const somaId = listaTarefas.reduce((acumulador, item) => {
    return acumulador + Number(item.tempo)
  }, 0)

  let tempoTotal = document.getElementById("tempoTotal")
  tempoTotal.innerHTML = somaId
  console.log(somaId)

}

renderizarTarefas()
const btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", function () {
  const tarefa = document.getElementById("tarefa").value
  const tempo = document.getElementById("tempo").value

  addTarefa({
    id: listaTarefas.length + 1,
    tarefa: tarefa,
    tempo: tempo,
    feita: false,
  })
})
