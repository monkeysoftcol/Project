module.controller('ConsolidadosCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador ConsolidadosCtrl cargado!!!!");
        baseController($scope);
        $scope.appName();
        $scope.consolidado = [];
        $scope.listadoLegalizado = [];
        $scope.ultimosMontosAprobados = [];
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
        
        $scope.legalizado1 = {
            "proyecto": "datos del proyecto",
            "monto": "20000",
            "fechaRegistro": "10/01/2018",
            "legalizado": "1"
        };
        
        $scope.legalizado2 = {
            "proyecto": "datos del proyecto",
            "monto": "20000",
            "fechaRegistro": "10/01/2018",
            "legalizado": "1"
        };
        
        $scope.legalizado3 = {
            "proyecto": "datos del proyecto",
            "monto": "20000",
            "fechaRegistro": "10/01/2018",
            "legalizado": "2"
        };
        
        $scope.legalizado4 = {
            "proyecto": "datos del proyecto",
            "monto": "20000",
            "fechaRegistro": "10/01/2018",
            "legalizado": "2"
        };
        
        $scope.legalizado5 = {
            "proyecto": "datos del proyecto",
            "monto": "20000",
            "fechaRegistro": "10/01/2018",
            "legalizado": "1"
        };
        
        $scope.legalizado6 = {
            "proyecto": "datos del proyecto",
            "monto": "20000",
            "fechaRegistro": "10/01/2018",
            "legalizado": "2"
        };
        
        $scope.listadoLegalizado.push($scope.legalizado1);
        $scope.listadoLegalizado.push($scope.legalizado2);
        $scope.listadoLegalizado.push($scope.legalizado3);
        $scope.listadoLegalizado.push($scope.legalizado4);
        $scope.listadoLegalizado.push($scope.legalizado5);
        $scope.listadoLegalizado.push($scope.legalizado6);
        
        $scope.montoAprobado1 = {
            "monto": "20000",
            "fechaAprobado": "10/01/2018"
        };
        $scope.montoAprobado2 = {
            "monto": "20000",
            "fechaAprobado": "10/01/2018"
        };
        $scope.montoAprobado3 = {
            "monto": "20000",
            "fechaAprobado": "10/01/2018"
        };
        $scope.montoAprobado4 = {
            "monto": "20000",
            "fechaAprobado": "10/01/2018"
        };
        $scope.montoAprobado5 = {
            "monto": "20000",
            "fechaAprobado": "10/01/2018"
        };
        $scope.montoAprobado6 = {
            "monto": "20000",
            "fechaAprobado": "10/01/2018"
        };
        
        $scope.ultimosMontosAprobados.push($scope.montoAprobado1);
        $scope.ultimosMontosAprobados.push($scope.montoAprobado2);
        $scope.ultimosMontosAprobados.push($scope.montoAprobado3);
        $scope.ultimosMontosAprobados.push($scope.montoAprobado4);
        $scope.ultimosMontosAprobados.push($scope.montoAprobado5);
        $scope.ultimosMontosAprobados.push($scope.montoAprobado6);
        
        $scope.totalAsignado = function (){
            $scope.totalAsignado = "20000000";
        };
        
        $scope.totalGastado = function (){
            $scope.totalGastado = "10000000";
        };
        
        $scope.totalRestante = function (){
            $scope.totalRestante = "10000000";
        };
        
    }]);

