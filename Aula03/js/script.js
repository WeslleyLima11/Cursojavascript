function troca(){

    var imagem = document.getElementById ("foto").src; // pegando a imagem que está na pasta 
    
    console.log (imagem);
     
    //Vamos pegar a quantidade de caracteres da váriavel da imagem com o comando length
        
     console.log (imagem.length);

    //Vamos utilizar o comando substring para obter o trecho para obter um trecho de texto do caminho do nome do arquivo

    console.log (imagem.substring (imagem.length - 14, imagem.length));

    var rsimg = imagem.substring (imagem.length - 14, imagem.length);
    
    rsimg = rsimg == "img/foto01.jpg" ? "img/foto02.jpg" : "img/foto01.jpg";
    
    document.getElementById ("foto").src = rsimg; // mandando a imagem que foi pega para o html

    console.log(imagem);
} 

function infoData(){

/* Vamos fazer uma instancia (cópia de um objeto de classe) da classe Date(). Esta classe 
 possui muitas funções, tais como: getDate, getMouth*/

const tempo = new Date();

var datacompleta = tempo.toLocaleDateString();
var diames = tempo.getDate();
var diasemana = tempo.getDay();
var mes = tempo.getMonth();
var hora = tempo.getHours();
var minutos = tempo.getMinutes();
var segundos = tempo.getSeconds();

// Desvio de fluxo multiplo com switch case

var dias = "";

switch (diasemana){

    case 0:
        dias = "Domingo";
        break;

        case 1:
        dias = "Segunda-feira";
        break;

        case 2:
        dias = "Terça-feira";
        break;
        
        case 3:
        dias = "Quarta-feira";
        break;
        
        case 4: dias = "Quinta-feira";
        break;
        
        case 5: dias = "Sexta-feira";
        break;
        
        case 6: dias = "Sábado";
        break;
        
        default: 
        alert ("Este dia da semana não existe"); 
        break;
}

switch (mes){

    case 0:
        m = "Janeiro";
        break;

        case 1: "Fevereiro";
        break;

        case 2: "Março";
        break;
        
        case 3: "Abril";
        break;
        
        case 4: "Maio";
        break;
        
        case 5: "Junho";
        break;
        
        case 6: "Julho";
        break;
        
        case 7: "Agosto";
        break;
        
        case 8: "Setembro";
        break;
        
        case 9: "Outubro";
        break;
        
        case 10: "Novembro";
        break;
        
        case 11: "Dezembro";
        break;
        
        default: 
            alert ("Este mes não existe");
            break;
}









console.log ("Hoje é %d de %s O dia da semana é %s", diames, m, dias);

console.log(datacompleta);


}

