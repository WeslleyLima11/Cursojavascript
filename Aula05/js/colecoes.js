// Criação do array decidades
const cidades = ["Guarulhos", "Campinas", "Atibaia", "São Paulo"];

// Criação do array de objetos produtos
const produtos = [
    {

        idproduto:01,
        nomeproduto:"Mouse",
        marca:"Microsoft",
        preco: 100.53
    },
    {

        idproduto:02,
        nomeproduto:"Teclado",
        marca:"Microsoft",
        preco: 150.90
    },
    {

        idproduto:03,
        nomeproduto:"SSD 480",
        marca:"SanDisk",
        preco: 430.00
    },
];

// Criando um array de objetos clientes

const clientes = [

    {   idcliente: 15,
        nome: "Pedro",
        idade: 38,

    },

    {
        idcliente: 16,
        nome: "Vanessa",
        idade: 22,

    }

];

// Criando um array de objetos vendas

const vendas = [

    {
        idvenda: 1010,
        data: "02/02/2023",
        idcliente: 15,
        produtos:[
            {

                idproduto: 01,
                quantidade: 3,
            },

            {

                idproduto: 02,
                quantidade: 3,
            }
        ]
    }

];