//let notas = [10,7,9,2];
//console.log(notas[1]);

const destaques = document.getElementsByClassName('destaque');// pelo nome da classe
const destaquesDois = document.querySelectorAll('body ul .destaque');// tem mais opcoes
console.log(destaques);
console.log(destaquesDois);


//destaques[2].style = " color : blue";

//inicio, fim e o incremento
for (let i = 0; i <= 10; i++) {
    document.write(i);
}

for (let index = 0; index < destaques.length; index++) {
    destaques[index].style = "color: yellow";
    
}

const tempoProducao = 5;
let tempoDisponivel = 100;
let produto = 0;

while(tempoDisponivel > 0){
    tempoDisponivel = tempoDisponivel - tempoProducao;
    produto++;
}

console.log(produto);

function adicionar(){
   // alert('deu certo');
   const lista = document.getElementById('lista');//seleciona a listan ja criada
   const novoLi = document.createElement('li');//adicionando
   novoLi.style = "color: green";
   novoLi.innerText = prompt('Digite o item');
   lista.appendChild(novoLi);
}

document.getElementById('add').addEventListener('click', adicionar);
