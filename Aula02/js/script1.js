function corFundo(){
    var cor = document.getElementById("txtCor").value;
    cor = cor.toLowerCase();

    var vcor = "";

    if(cor == "red"){
        vcor = "#f00";
    }
    else if(cor == "black"){
        vcor = "#000";
    }
    else if(cor == "green"){
        vcor = "#0f0";
    }
    else{
        vcor = "#fff";
        alert("A cor não existe na paleta");
    }
    document.body.style.backgroundColor = vcor;
    
}


function textoClaro(){
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("label")[0].style.color = "white";
}

function textoEscuro(){
    document.getElementsByTagName("h1")[0].style.color = "darkred";
    document.getElementsByTagName("label")[0].style.color = "darkred";
}
