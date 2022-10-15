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
    destaques[index].style = "color: red";
    
}
/*
const tempoProducao = 5;
let tempoDisponivel = 100;
let produto = 0;

while(tempoDisponivel > 0){
    tempoDisponivel = tempoDisponivel - tempoProducao;
    produto++;
}

console.log(produto);
/*
function adicionar(){
   // alert('deu certo');
   const lista = document.getElementById('lista');//seleciona a listan ja criada
   const novoLi = document.createElement('li');//adicionando
   novoLi.style = "color: green";
   novoLi.innerText = prompt('Digite o item');
   novoLi.addEventListener('click', function(){
    alterar(this);
})
lista.appendChild(novoLi);
}*/

function adicionar(){
    const lista = document.getElementById('lista');
    const novoLi = document.createElement('li');
    novoLi.style = "color: red";
    novoLi.innerText = prompt('Digite o item');

    novoLi.addEventListener('click',function(){
        alterar(this);
    });
    lista.appendChild(novoLi);
}

/*
function alterar(){
    const lista = document.getElementById('lista');//seleciona a listan ja criada
   const novoLi = document.createElement('li');//adicionando
   novoLi.style = "color: green";
   novoLi.innerText = prompt('Digite o item');
}*/
function alterar(elemento){
    elemento.innerText = prompt('Qual o novo texto?')
}

document.getElementById('add').addEventListener('click', adicionar);

const itemsLista = document.querySelectorAll('#lista li');
for( let i=0; i<itemsLista.length;i++){
    itemsLista[i].addEventListener('click', function(){
        alterar(this);
    })
}