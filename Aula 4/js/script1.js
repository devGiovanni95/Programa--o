function abrirFecharLoja(){

    const loja = document.getElementById('status');

    if(loja.innerText == "Loja Aberta"){
        console.log('Loja esta Aberta -> fechando.......');
        loja.innerText = "Loja Fechada";
        loja.style = "font-size: 75px; text-align: center; background-color: red; width: 100%S; height: 200px;";
    } else{
        console.log('Loja esta Fechada -> Abrindoo.......');
        loja.innerText = "Loja Aberta";
        loja.style = "font-size: 75px; text-align: center; background-color: green; width: 100%S; height: 200px;";
    }
    console.log(loja);
}