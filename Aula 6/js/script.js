function exibir(elemento){
    alert(elemento.innerText);
}

const listaAlunos = document.querySelectorAll('#listaAlunos li');
for(let i = 0; i<listaAlunos.length; i++){
    listaAlunos[i].addEventListener('click', function(){
     exibir(this)
    });
}