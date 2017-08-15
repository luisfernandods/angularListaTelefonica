       // o [] representa os modulos que importaremos do angular
       angular.module('listaTelefonica', []);

       // define o controller passando de callback uma function que recebe o $scope
       angular.module('listaTelefonica').controller('listaTelefonicaCrtl', function ($scope) {
           $scope.app = "Lista Telefonica";



           $scope.operadoras = [{
                   nome: "Oi",
                   codigo: 14,
                   categoria: "Celular"
               },
               {
                   nome: "Vivo",
                   codigo: 15,
                   categoria: "Celular"
               },
               {
                   nome: "Tim",
                   codigo: 41,
                   categoria: "Celular"
               },
               {
                   nome: "GVT",
                   codigo: 25,
                   categoria: "Fixo"
               },
               {
                   nome: "Embratel",
                   codigo: 21,
                   categoria: "Fixo"
               }
           ];

           $scope.cores = [{
                   nome: "Vermelho",
                   valor: "red"
               },
               {
                   nome: "Azul",
                   valor: "blue"
               },
               {
                   nome: "Verde",
                   valor: "green"
               },
               {
                   nome: "Rosa",
                   valor: "pink"
               }
           ];

           $scope.contatos = [{
                   nome: "Luis",
                   telefone: "9999-9999",
                   operadora: {
                       nome: $scope.operadoras[0].nome
                   },
                   cor: {
                       valor: $scope.cores[0].valor
                   }
               },
               {
                   nome: "Joao",
                   telefone: "9999-8888",
                   operadora: {
                       nome: $scope.operadoras[2].nome
                   },
                   cor: {
                       valor: $scope.cores[1].valor
                   }
               },
               {
                   nome: "Paulo",
                   telefone: "9999-7777",
                   operadora: {
                       nome: $scope.operadoras[1].nome
                   },
                   cor: {
                       valor: $scope.cores[2].valor
                   }
               },
               {
                   nome: "Maria",
                   telefone: "9999-6666",
                   operadora: {
                       nome: $scope.operadoras[3].nome
                   },
                   cor: {
                       valor: $scope.cores[3].valor
                   }
               },
           ];

           $scope.adicionarContato = function (contato) {
               // o angular.copy cria uma copia do objeto contato e salva em memoria
               $scope.contatos.push(angular.copy(contato));
               // delete como o proprio nome diz deleta o $scope.contato após ser salvo
               $scope.contatoForm.$setPristine();
               delete $scope.contato;
           }

           $scope.apagarContatos = function (contatos) {
               // estudar o filter
               $scope.contatos = contatos.filter(function (contato) {
                   if (!contato.selecionado) {
                       return contato;
                   }
               });
           }

           $scope.isSelecionado = function (contatos) {
               return contatos.some(function (contato) {
                   return contato.selecionado;
               });
           }
       });