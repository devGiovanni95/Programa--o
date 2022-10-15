function adicionar(){
    const nome = prompt('Digite o nome do cliente');
    const email = prompt('Digite o e-mail do cliente');
    const telefone = prompt('Digite o telefone do cliente');

    const clientes = document.getElementById('clientes');
    const tr = document.createElement('tr');

    const tdNome = document.createElement('td');
    tdNome.innerText = nome;

    const tdEmail = document.createElement('td');
    tdEmail.innerText = email;

    const tdTelefone = document.createElement('td');
    tdTelefone.innerText = telefone;

    tr.appendChild(tdNome);//adicionando como filhos
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);

    clientes.appendChild(tr);

}

document.getElementById('add').addEventListener('click',adicionar);