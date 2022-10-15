function adicionar(){
    //recebe a quantidade de cadastro para fazer
    let qtdAdd = prompt('Quantos Cadastros Deseja Fazer ?');
    //converte em numero o que foi recebido pelo prompt de comando
    qtdAdd = Number(qtdAdd);

    //Laço de repetição para repetir o cadastro de acordo com o numero 
     //de vezes que o usuario quizer
    for(let i = 0; i < qtdAdd; qtdAdd --){

        //recebe e atribui a variavel
        const nome = prompt('Digite o nome do cliente');
        const email = prompt('Digite o e-mail do cliente');
        const telefone = prompt('Digite o telefone do cliente');
    
        //relacionando com o id da tabela
        const clientes = document.getElementById('clientes');

        //criando uma nova linha na tabela
        const tr = document.createElement('tr');

        //criando novas colunas na linha criada acima
        const tdNome = document.createElement('td');
        tdNome.innerText = nome;
        const tdEmail = document.createElement('td');
        tdEmail.innerText = email;
        const tdTelefone = document.createElement('td');
        tdTelefone.innerText = telefone;
    
        //Adicionando ao final da lista(pai)-TR  como filhos(dependentes)-TD
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefone);

        tdNome.addEventListener('click',function(){
            alterar(this);
        });
        tdEmail.addEventListener('click',function(){
            alterar(this);
        });
        tdTelefone.addEventListener('click',function(){
            alterar(this);
        });
    
        //Juntando Tudo
        clientes.appendChild(tr);
    }
}


function alterar(td){
    td.innerText = prompt('Digite o novo valor do campo');
   /* td2.innerText = prompt('Digite o nome do e-mail');
    td3.innerText = prompt('Digite o nome do telefone');*/


}

//Atribuindo um evento no click
document.getElementById('add').addEventListener('click',adicionar);

const itensTabela = document.querySelectorAll('#clientes td');
for(let i=0; i<itensTabela.length;i++){
    itensTabela[i].addEventListener('click',function(){
        alterar(this);
    })
}