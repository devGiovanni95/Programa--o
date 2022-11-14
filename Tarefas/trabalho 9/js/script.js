function calculaSalario() {
  let salarioDigitado = prompt("Digite o seu Salario atual: ")
  let salario = Number(salarioDigitado.replace(",", "."))

  let percentualDigitado = prompt("Digite o Percentual de aumento: ")
  let percentual = Number(percentualDigitado.replace(",", ".")) / 100

  let salarioAtualizado = salario + salario * percentual

  alert(
    "Salario atual R$" +
      salario +
      "\nPercentual de aumento " +
      percentualDigitado +
      "% \n" +
      "Seu salario atualizado é de R$" +
      salarioAtualizado
  )
}

function calculaPrecoMaca() {
  let quantidadeMaca = Number(
    prompt("Digite a quantidade de maçãs que deseja comprar: ")
  )

  if (quantidadeMaca >= 12) {
    let totalCompra = quantidadeMaca * 1
    alert("O custo total da compra é de R$ " + totalCompra)
  } else if (quantidadeMaca >= 1) {
    let totalCompra = quantidadeMaca * 1.3
    alert("O custo total da compra é de R$ " + totalCompra)
  } else {
    alert("Ops! Tente novamente")
  }
}

function numeroInteiro() {
  let numero = Number(prompt("Digite um número: "))

  let sequencia
  if (numero > 0) {
    for (let i = 0; i < numero; numero--) {
      //alert(numero)
      sequencia = sequencia + " " + numero
    }

    alert("Sequência Numérica: " + sequencia.replace("undefined", ""))
  } else {
    alert("Ops! Só é permitido numero maiores que 0 ")
  }
}

function mediaAritmetica() {
  let quantidadeAlunos = Number(prompt("Quantos alunos tem na sala ?"))
  let notaSala = Number()

  if (quantidadeAlunos > 0) {
    for (let i = 0; i < quantidadeAlunos; i++) {
      nota = Number(prompt("Digite a nota do aluno " + (i + 1) + " :"))
      notaSala = notaSala + nota
    }
    let mediaAritmetica = Number(notaSala / quantidadeAlunos)
    console.log(mediaAritmetica)
    alert("A média aritimética da sala é de " + mediaAritmetica)
  } else {
    alert("Ops! Quantidade de alunos Inválida")
  }
}

function temperaturaMedia() {
  let jan = Number(
    prompt("Digite a temperatura Média de Janeiro: ").replace(",", ".")
  )
  let fev = Number(
    prompt("Digite a temperatura Média de Fevereiro: ").replace(",", ".")
  )
  let mar = Number(
    prompt("Digite a temperatura Média de Março: ").replace(",", ".")
  )
  let abr = Number(
    prompt("Digite a temperatura Média de Abril: ").replace(",", ".")
  )
  let mai = Number(
    prompt("Digite a temperatura Média de Maio: ").replace(",", ".")
  )
  let jun = Number(
    prompt("Digite a temperatura Média de Junho: ").replace(",", ".")
  )
  let jul = Number(
    prompt("Digite a temperatura Média de Julho: ").replace(",", ".")
  )
  let ago = Number(
    prompt("Digite a temperatura Média de Agosto: ").replace(",", ".")
  )
  let set = Number(
    prompt("Digite a temperatura Média de Setembro: ").replace(",", ".")
  )
  let out = Number(
    prompt("Digite a temperatura Média de Outubro: ").replace(",", ".")
  )
  let nov = Number(
    prompt("Digite a temperatura Média de Novembro: ").replace(",", ".")
  )
  let dez = Number(
    prompt("Digite a temperatura Média de Dezembro: ").replace(",", ".")
  )
  let meses =
    jan + fev + mar + abr + mai + jun + jul + ago + set + out + nov + dez

  /*for (let i = 0; i < 12; i++) {
    meses[i] = Number(prompt("Digite a temperatura Média do mes " + (i + 1)))
  }*/
  let tempMedia = meses / 12
  let acimaMedia
  alert("A temperatura média é de " + tempMedia.toFixed(2) + " Graus")

  if (jan > tempMedia) {
    acimaMedia = "1 - Janeiro" + jan + " Graus \n"
  }
  if (fev > tempMedia) {
    acimaMedia = acimaMedia + "2 - Fevereiro " + fev + " Graus \n"
  }
  if (mar > tempMedia) {
    acimaMedia = acimaMedia + "3 - Março " + mar + " Graus \n"
  }
  if (abr > tempMedia) {
    acimaMedia = acimaMedia + "4 - Abril " + abr + " Graus \n"
  }
  if (mai > tempMedia) {
    acimaMedia = acimaMedia + "5 - Maio " + mai + " Graus \n"
  }
  if (jun > tempMedia) {
    acimaMedia = acimaMedia + "6 - Junho" + jun + " Graus \n"
  }
  if (jul > tempMedia) {
    acimaMedia = acimaMedia + "7 - Julho" + jul + " Graus \n"
  }
  if (ago > tempMedia) {
    acimaMedia = acimaMedia + "8 - Agosto" + ago + " Graus \n"
  }
  if (set > tempMedia) {
    acimaMedia = acimaMedia + "9 - Setembro" + set + " Graus \n"
  }
  if (out > tempMedia) {
    acimaMedia = acimaMedia + "10 - Outubro" + out + " Graus \n"
  }
  if (nov > tempMedia) {
    acimaMedia = acimaMedia + "11 - Novembro" + nov + " Graus \n"
  }
  if (dez > tempMedia) {
    acimaMedia = acimaMedia + "12 - Dezembro" + dez + " Graus \n"
  }

  alert(acimaMedia.replace("undefined", " "))
}

function somaMultiplicacao() {
  let a = Number(prompt("Digite o 1º numero: "))
  let b = Number(prompt("Digite o 2º numero: "))
  let c = Number(prompt("Digite o 3º numero: "))
  let d = Number(prompt("Digite o 4º numero: "))

  let soma = a + c
  let mult = b * d

  if (soma > mult) {
    alert(
      "A+C é maior que B+D\n" + "soma => " + soma + "\nmultiplicação=>" + mult
    )
  } else if (soma < mult) {
    alert(
      "A+C é menor que B+D\n" + "soma => " + soma + "\nmultiplicação=>" + mult
    )
  } else if (soma == mult) {
    alert(
      "A+C é igual que B+D\n" + "soma => " + soma + "\nmultiplicação=>" + mult
    )
  } else {
    alert("Ops! Dados incorretos")
  }
}

function fatorial() {
  let num = BigInt(prompt("Digite um Numero: "))
  let fatorial = BigInt(1)
  let aux = num
  for (num; num > 0; num--) {
    fatorial = fatorial * num
    console.log(fatorial)
  }
  alert("O fatorial de " + aux + " é " + fatorial)
}

function perdaMassa() {
  let massa = Number(prompt("Digite a massa do material: ").replace(",", "."))
  let i
  for (i = 1; massa > 0.1; i++) {
    massa = massa * 0.75
    console.log("Massa=>" + massa)
    console.log("Tempo =>" + i)
  }
  console.log("Tempo =>" + (i - 1))

  let tempo = (i - 1) * 0.5
  alert(
    "O tempo necessario para a massa atingir a 0.10 é de " + tempo + " Minutos"
  )
}
