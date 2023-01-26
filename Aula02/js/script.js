// Arquivo de script para a função ola
function ola(){
    alert('Olá Mundo!');
}

/*
Dentro da página html terá um botão com um
ID chamado btnClick. Ao clicar neste botão
será chamada a função ola. Que executa uma 
mensagem com o alert
*/
// document.getElementById('btnClick').onclick = ola;

//declaração de variáveis
var nome;
var numero1,numero2;
var resultado;
nome = "";
numero1 = 0;
numero2 = 0;
resultado = 0;

numero1 = prompt("Digite um valor");
numero2 = prompt("Digite outro valor");
resultado = numero1 * numero2;

console.log("A multiplicação entre o valor %d e %d é %d",numero1,numero2,resultado);
