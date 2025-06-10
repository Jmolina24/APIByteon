'use strict';
angular.module('gmi', [])
.config(function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})
.controller('loginController', ['$scope', '$http',
    function($scope, $http) {

        $scope.login = {ambiente:'',database: '',uid: '',pwd: ''};


        $scope.validaencryptCredentials = function() {
            if ($scope.login.ambiente == null || $scope.login.ambiente == '' || $scope.login.ambiente == undefined) {
                Swal.fire('APP Informa', 'Debe seleccionar el ambiente encriptar', 'warning');
            }
            else if ($scope.login.database == null || $scope.login.database == '' || $scope.login.database == undefined) {
                Swal.fire('APP Informa', 'Debe digitar el campo Database', 'warning');
            } else if ($scope.login.uid == null || $scope.login.uid == '' || $scope.login.uid == undefined) {
                Swal.fire('APP Informa', 'Debe digitar el campo UID', 'warning');
            } else if ($scope.login.pwd == null || $scope.login.pwd == '' || $scope.login.pwd == undefined) {
                Swal.fire('APP Informa', 'Debe digitar el campo PWD', 'warning');
            }
            else {
                switch($scope.login.ambiente) {
                    case ('D'):
                    $scope.nombrefiles = 'ApiConnectionBD - Ambiente Desarrollo.txt';
                    break;
                    case ('C'):
                    $scope.nombrefiles = 'ApiConnectionBD - Ambiente Calidad.txt';
                    break;
                    case ('P'):
                    $scope.nombrefiles = 'ApiConnectionBD - Ambiente Producción.txt';
                    break;                    
                    default:
                }
                $http({
                    method: 'POST',
                    url: "app/model/php/encryptCredentials.php",
                    data: { type: 'E',
                    database: $scope.login.database,
                    uid: $scope.login.uid,
                    pwd: $scope.login.pwd }
                }).then(function(response) {
                    if (response.data.codigo == 0) {
                        Swal.fire('APP Encriptador Informa', response.data.mensaje, 'success').then((result) => {
                            $scope.login = {ambiente:'',database: '',uid: '',pwd: ''};
                            $scope.$apply();
                            var element = document.createElement('a');
                            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(response.data.encryption));
                            element.setAttribute('download', $scope.nombrefiles);
                            element.style.display = 'none';
                            document.body.appendChild(element);
                            element.click();
                            document.body.removeChild(element);
                        })
                    }
                })
            }
        }




    }])