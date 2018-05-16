(function() {
  "use strict";

  angular.module("listaTelefonica").factory("contatosFactory", contatosFactory);

  /** @ngInject */
  function contatosFactory($http) {
    var service = {
      getContatos: getContatos,
      addContato: addContato,
      deleteContato: deleteContato
    };

    return service;

    function getContatos() {
      return $http.get("/contatos");
    }

    function addContato(contato) {
      return $http.post("/contato", contato);
    }

    function deleteContato(contato) {
      return $http.delete("/deleteContato/" + contato.nome);
    }
  }
})();
