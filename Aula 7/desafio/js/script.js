document.getElementById("corpo").addEventListener("keydown", (tecla) => {
  console.log(this)

  console.log(tecla)

  if (tecla.key == "ArrowUp") {
    //console.log("Entrou")
    document.body.style =
      "display: flex; justify-content: center; align-items:flex-start"
  } else if (tecla.key == "ArrowDown") {
    //console.log("Entrou")
    document.body.style =
      "display: flex; justify-content:center; align-items: flex-end"
  } else if (tecla.key == "ArrowRight") {
    //console.log("Entrou")
    document.body.style =
      "display: flex; justify-content: flex-end; align-items:center"
  } else if (tecla.key == "ArrowLeft") {
    //console.log("Entrou")
    document.body.style =
      "display: flex; justify-content:flex-start; align-items: center"
  } else {
    document.body.style =
      "display: flex; justify-content:center; align-items: center"
  }
})
