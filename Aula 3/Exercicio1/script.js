//Variaveis dos valores a serem recebido
let salario;
let percentualAumento;
let salarioAtualizado;

//Recebe o valor de salario
salario = prompt('Bem Vindo ao calculador de salário atualizado, Digite o Salário Atual: ');
//recebe o valor do percentual
percentualAumento = prompt('Agora o ajuste pecentual, digite somente o numero');

//Converte os valores de string para numerico
salario = Number(salario);
percentualAumento = Number(percentualAumento);

//calcula o valor ja reajustado 
salarioAtualizado = (salario*(percentualAumento/100))+salario;


//informa na tela para o usuario com o vbalor atualizado
alert('Seu salário atualizado é de ' + salarioAtualizado);


/*******Ou******** */
//Variaveis dos valores a serem recebido


//Recebe o valor de salario
const salario1 = prompt('Bem Vindo ao calculador de salário atualizado, Digite o Salário Atual: ');
//recebe o valor do percentual
const percentualAumento1 = prompt('Agora o ajuste pecentual, digite somente o numero');

//Converte os valores de string para numerico
/*salario1 = Number(salario1);
percentualAumento1 = Number(percentualAumento1);*/

//calcula o valor ja reajustado 
const salarioAtualizado1 = (salario1*(percentualAumento1/100))+salario1;


//informa na tela para o usuario com o vbalor atualizado
alert('Seu salário atualizado é de ' + salarioAtualizado1);