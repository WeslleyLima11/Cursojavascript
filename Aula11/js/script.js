af.onclick = ()=>{

    if(document.querySelector("nav").style.left == "0px"){ 

        document.querySelector("nav").style.left = "-200px";
        document.querySelector("#af").innerHTML = "&equiv;";
        document.querySelector("#conteudo").style.marginLeft = "50px";
    }
    else{

        document.querySelector("nav").style.left = "0px";
        document.querySelector("#af").innerHTML = "&times;";
        document.querySelector("#conteudo").style.marginLeft = "210px";
    }    
};

let cm = "https://image.tmdb.org/t/p/w500";

function carregar(pagina){

    var url = `https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-br&page=${pagina}`;
    fetch(url)
    .then((response) => response.json())
    .then((resultado) =>{
        console.log(resultado.results);
        
        resultado.results.map((filme,index)=>{
            
            var caixa = document.createElement("div");
            caixa.setAttribute("class","caixa");
            
            var img = document.createElement("img");
            img.setAttribute("src",cm+filme.poster_path);
            
            var textos = document.createElement("class", "textos");

            var h2 = document.createElement("h2");
            h2.innerHTML = filme.title;

            var p1 = document.createElement("p");
            p1.setAttribute("class", "sinopse");
            p1.innerHTML = filme.overview;

            textos.appendChild(h2);
            textos.appendChild(p1);

            caixa.appendChild(img);
            caixa.appendChild(textos);

            document.querySelector("#conteudo").appendChild(caixa);

            


        })
    })
    .catch((erro)=>console.error(erro));
}

window.document.body.onload = ()=>{

    carregar(1);
}

/* Função que só é executada depois de algum tempo */
window.setTimeout(() =>{

    document.querySelector("#carregando").style.opacity = "0";
    document.querySelector("#carregando").style.display = "none";
    document.querySelector("#conteudo").style.opacity = "1";

} ,2000);

