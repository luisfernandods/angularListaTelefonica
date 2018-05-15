// define o controller passando de callback uma function que recebe o $scope
angular.module('listaTelefonica')
    .controller('indexController', function ($scope, operadoraFactory, coresFactory, contatosFactory) {

        $scope.buscarOperadoras = buscarOperadoras;
        $scope.adicionarContato = adicionarContato;
        $scope.apagarContato = apagarContato;

        $scope.app = "Lista Telefonica";


        function buscarOperadoras() {
            return operadoraFactory.getOperadoras()
                .then(function (operadoras) {
                    $scope.operadoras = operadoras.data;
                })
                .catch(function (error) {
                })
        }

        function buscarCores() {
            return coresFactory.getCores()
                .then(function (cores) {
                    $scope.cores = cores.data;
                })
                .catch(function (error) {
                });
        }

        function buscarContatos() {
            return contatosFactory.getContatos()
                .then(function (contatos) {
                    $scope.contatos = contatos.data;
                })
                .catch(function (error) {

                })

        }

        function adicionarContato(contato) {
            return contatosFactory.addContato(contato)
                .then(function () {
                    // delete como o proprio nome diz deleta o $scope.contato após ser salvo
                    $scope.contatoForm.$setPristine();
                    delete $scope.contato;
                    buscarContatos();
                })
                .catch(function (error) {

                })
        }

        function apagarContato(contato) {
            // estudar o filter
            return contatosFactory.deleteContato(contato)
                .then(function () {
                    buscarContatos();
                })
                .catch(function (error) {

                })
        }

        buscarCores();
        buscarOperadoras();
        buscarContatos();
    });