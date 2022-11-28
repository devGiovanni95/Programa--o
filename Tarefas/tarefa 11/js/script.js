let listaTarefas = [
  { id: 1, tarefa: "Estudar JS", tempo: "15", feita: false },
  { id: 2, tarefa: "Estudar Botstrap", tempo: "45", feita: false },
  { id: 3, tarefa: "Estudar Engenharia de Software", tempo: "5", feita: false },
]

const somaId = listaTarefas.reduce((acumulador, item) => {
  return acumulador + Number(item.tempo)
}, 0)

function addTarefa(tarefa) {
  const novaTarefa = document.getElementById("tarefa").value
  const tempo = document.getElementById("tempo").value

  /*push adicionar no finalda lista */
  if (novaTarefa != "" && tempo != "") {
    listaTarefas.push(tarefa)
    renderizarTarefas()
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
  let listaUl = document.getElementById("listaUl") /*Pegando a lista feita */
  listaUl.innerHTML = "" /*Esvazia a lista */
  listaTarefas.map((texto) => {
    let li = document.createElement("li")
    li.classList.add("my-3") //|Espaçamento com uma margem
    //li.classList.add("d-flex")
    li.innerHTML = texto.tarefa /*+ "(" + texto.feita + ")"*/
    li.innerHTML += "   Tempo: " + texto.tempo + " Minutos  "
    console.log(texto.feita)
    if (texto.feita === false) {
      li.innerHTML += `<button type="button"
                      class="btn btn-warning btn-sm"
                      onclick="fazerTarefa(${texto.id}, this)">
                      Fazer
                      </button>
                      `
      li.innerHTML += `<button type="button"
                      class="btn btn-danger btn-sm"
                      onclick="removerTarefa(${texto.id})">
                      Remover
                      </button>
                      <hr>`
    } else {
      li.innerHTML += `<button type="button"
                      class="btn btn-success btn-sm"
                      onclick="fazerTarefa(${texto.id}, this)">
                      Desfazer
                      </button>
                      `
      li.innerHTML += `<button type="button"
                      class="btn btn-danger btn-sm"
                      onclick="removerTarefa(${texto.id})">
                      Remover
                      </button>
                      <hr>`
    }

    listaUl.appendChild(li)
  })

  const somaId = listaTarefas.reduce((acumulador, item) => {
    return acumulador + Number(item.tempo)
  }, 0)

  let tempoTotal = document.getElementById("tempoTotal")
  tempoTotal.innerHTML = somaId
  console.log(somaId)
}

renderizarTarefas()
//addTarefa({ id: 4, tarefa: "Tarefa 4", feita: false })

//Pegando o evento de clique no botao e pegando o valor do input
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
