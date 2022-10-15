const a = 10;
const b = 30;

//faz uma operaçao matematica
const resultado = a * b;/* +, -, /, *   */

//compara com estrutura de decisao
if(resultado == 200){
    //escreve na tela
    document.write(resultado);
}else if(resultado == 300){
    document.write(resultado + " !!!");
}else{
    //Pulando linha com document,write
    document.write('<br>Resuldo diferente de 200 e 300');
}
