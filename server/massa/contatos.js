var massaCores = require('./cores'),
    massaOperadoras = require('./operadoras');

module.exports = {
    contatos: [{
        nome: "Luis",
        telefone: "9999-9999",
        operadora: {
            nome: massaOperadoras.operadoras[0].nome
        },
        cor: {
            valor: massaCores.cores[0].valor
        }
    },
    {
        nome: "Joao",
        telefone: "9999-8888",
        operadora: {
            nome: massaOperadoras.operadoras[2].nome
        },
        cor: {
            valor: massaCores.cores[1].valor
        }
    },
    {
        nome: "Paulo",
        telefone: "9999-7777",
        operadora: {
            nome: massaOperadoras.operadoras[1].nome
        },
        cor: {
            valor: massaCores.cores[2].valor
        }
    },
    {
        nome: "Maria",
        telefone: "9999-6666",
        operadora: {
            nome: massaOperadoras.operadoras[3].nome
        },
        cor: {
            valor: massaCores.cores[3].valor
        }
    },
    ]
}