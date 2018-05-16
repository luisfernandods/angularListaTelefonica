(function() {
  "use strict";

  angular
    .module("listaTelefonica")
    .factory("operadoraFactory", operadoraFactory);

  /** @ngInject */
  function operadoraFactory($http) {
    var service = {
      getOperadoras: getOperadoras
    };

    return service;

    function getOperadoras() {
      return $http.get("/operadoras");
    }
  }
})();
