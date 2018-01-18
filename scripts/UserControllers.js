module.controller('ConsolidadosCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador ConsolidadosCtrl cargado!!!!");
        baseController($scope);
        $scope.appName();
        $scope.consolidado = [];
        //REGISTRADO, APROBADO, ANULADO, RECHAZO, PAGADO, POR_LEGALIZAR
        $scope.datosTabla1 = {
            "id": "1",
            "monto": "10000",
            "fechaRegistro": "01/01/2017",
            "estado": "REGISTRADO",
            "fechaAprobacion": "null",
            "observacion": "null"
        };
        $scope.datosTabla2 = {
            "id": "2",
            "monto": "2000",
            "fechaRegistro": "05/07/2017",
            "estado": "APROBADO",
            "fechaAprobacion": "06/07/2017",
            "observacion": "null"
        };
        $scope.datosTabla3 = {
            "id": "3",
            "monto": "5000",
            "fechaRegistro": "11/11/2017",
            "estado": "POR_LEGALIZAR",
            "fechaAprobacion": "null",
            "observacion": "null"
        };
        $scope.datosTabla4 = {
            "id": "4",
            "monto": "15000",
            "fechaRegistro": "01/12/2017",
            "estado": "RECHAZADO",
            "fechaAprobacion": "10/12/2017",
            "observacion": "Observación el porque del rechazo"
        };
        $scope.datosTabla5 = {
            "id": "5",
            "monto": "20000",
            "fechaRegistro": "10/01/2018",
            "estado": "PAGADO",
            "fechaAprobacion": "18/01/2018",
            "observacion": "null"
        };
        $scope.consolidado.push($scope.datosTabla1);
        $scope.consolidado.push($scope.datosTabla2);
        $scope.consolidado.push($scope.datosTabla3);
        $scope.consolidado.push($scope.datosTabla4);
        $scope.consolidado.push($scope.datosTabla5);
        
    }]);

