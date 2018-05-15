(function () {
    'use strict';

    angular
        .module('listaTelefonica')
        .factory('contatosFactory', contatosFactory)

    /** @ngInject */
    function contatosFactory($http) {
        var service = {
            getContatos: getContatos,
            addContato: addContato,
            deleteContato: deleteContato
        }

        return service;


        function getContatos() {
            return $http.get('http:localhost:3000/contatos');
        }

        function addContato(contato) {
            return $http.post('http:localhost:3000/contato', contato);
        }

        function deleteContato(contato) {
            return $http.delete('http:localhost:3000/deleteContato/' + contato.nome)
        }
    }

}());