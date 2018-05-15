var massaContatos = require('../massa/contatos'),
    massaCores = require('../massa/cores'),
    massaOperadoras = require('../massa/operadoras');

module.exports = function (app) {

    app.get('/operadoras', function (req, res) {

        res.json(massaOperadoras.operadoras);
    });

    app.get('/cores', function (req, res) {

        res.json(massaCores.cores);
    });

    app.get('/contatos', function (req, res) {

        res.json(massaContatos.contatos);
    });

    app.post('/contato', function (req, res) {
        var contato = req.body;
        massaContatos.contatos.push(contato);
        res.json("ok");
    });

    app.delete('/deleteContato/:nome', function (req, res) {
        var nome = req.params.nome;
        var novosContatos = massaContatos.contatos.filter(function (contato) {
            return contato.nome !== nome;
        });

        massaContatos.contatos = novosContatos;
        res.json('ok')
    })
}