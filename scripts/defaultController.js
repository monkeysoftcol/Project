module.controller('defaultCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador default cargado!!!!");
        baseController($scope);
        $scope.appName();
        $scope.cambiarUsuario(1);

    }]);

