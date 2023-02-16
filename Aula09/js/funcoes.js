// function media(array_numeros){

//     let rs = 0;
//     for( var i=0; i<array_numeros.length; i++){
//         rs += rs * array_numeros[i];
//     }
//     return rs / array_numeros.length;
// }

// const media2 = function(array_numeros){

//     let rs = 0;
//     for( var i=0; i<array_numeros.length; i++){
//         rs += array_numeros [i];
//     }
//     return rs/ array_numeros.length;
// }

// const media3 = (array_numeros)=> {
//     let rs = 0;
//     for( var i=0; i<array_numeros.length; i++){
//         rs += array_numeros [i];
//     }
//     return rs / array_numeros.length;
// }

// function exibir(cli,p){

//     console.log(cli.nome);
//     console.log(cli.produtos);
// };

// /*********************************************************/



// function getUserts(){

//     return new Promise((resolve, reject) => {
        
        
//        setTimeout(() => {

    
//         resolve([
//             {user:"John", email: "John@example.com"},
//             {user:"Paulo", email: "Paulo@example.com"},
//         ]);


//     }, 2000)

//     });
// }


// function mostrar(usuarios){

//     console.clear();
//     console.log(usuarios)
// }

// const resultado = getUserts(); 
// resultado.then(mostrar);

function listarFilmes(){

    return new Promise((resolve, reject) => {

        resolve(listaFilmes);
        reject("Erro ao tentar executar");
    });
}

listarFilmes().then((x)=>{

    console.log(x);
}).cath((e)=>{

    console.log(e);
});