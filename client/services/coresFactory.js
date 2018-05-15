(function () {
    'use strict';

    angular
        .module('listaTelefonica')
        .factory('coresFactory', coresFactory)

    /** @ngInject */
    function coresFactory($http) {
        var service = {
            getCores: getCores
        }

        return service;

        function getCores() {
            return $http.get('http:localhost:3000/cores');
        }
    }

}());