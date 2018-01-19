module.controller('ConsolidaAllCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador ConsolidadosCtrl cargado!!!!");
        baseController($scope);

        $scope.userApp1 = {"name": "Oscar Andres Lopez", "user": "olopez", "pass": "test1", "email": "olopez@campolimpio.com", "ndoc": "12121", "role": "USER"};
        $scope.userApp2 = {"name": "Diana Carolina Osorio", "user": "dosorio", "pass": "test1", "email": "dosorio@campolimpio.com", "ndoc": "131313", "role": "USER"};
        $scope.userApp3 = {"name": "Andres Lopez Lopez", "user": "alopez", "pass": "test1", "email": "alopez@campolimpio.com", "ndoc": "141414", "role": "USER"};
        $scope.userApp4 = {"name": "Alam Brito Garzon", "user": "agarzon", "pass": "test1", "email": "agarzon@campolimpio.com", "ndoc": "151515", "role": "USER"};
        $scope.userApp5 = {"name": "Maria Paula Dominguez", "user": "mdominguez", "pass": "test1", "email": "mdominguez@campolimpio.com", "ndoc": "161616", "role": "USER"};

        $scope.listConsolidado = [];
        
        $scope.soporte1={"id":"1", "nombre":"factura 1.pdf"};
        $scope.soporte2={"id":"2", "nombre":"Cotización proyecto.doc"};
        $scope.soporte3={"id":"3", "nombre":"Tabla de gastos.xls"};
        $scope.listSoportes =[];
        $scope.listSoportes.push($scope.soporte1);
        $scope.listSoportes.push($scope.soporte2);
        $scope.listSoportes.push($scope.soporte3);
        
        //datos prueba user1
        $scope.anticipo1 = {"id": "111", "fecha": "02/01/2017", "monto": "25000", "estadop": "PAGADO", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1"};
        $scope.anticipo2 = {"id": "222", "fecha": "09/01/2017", "monto": "3500000", "estadop": "APROBADO", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "2"};
        $scope.anticipo3 = {"id": "333", "fecha": "16/01/2017", "monto": "7895000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3"};
        $scope.listAnticipos1 = [];
        $scope.listAnticipos1.push($scope.anticipo1);
        $scope.listAnticipos1.push($scope.anticipo2);
        $scope.listAnticipos1.push($scope.anticipo3);
        $scope.consolidado1 = {"usuario": $scope.userApp1, "total": "11420000", "detalle": $scope.listAnticipos1,"sede":"Sede 1"};
        $scope.listConsolidado.push($scope.consolidado1);
        
        //datos prueba user2
        $scope.anticipo4 = {"id": "444", "fecha": "02/01/2017", "monto": "1000000", "estadop": "PAGADO", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1"};
        $scope.anticipo5 = {"id": "555", "fecha": "09/01/2017", "monto": "3500000", "estadop": "PAGADO", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "2"};
        $scope.anticipo6 = {"id": "355533", "fecha": "16/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3"};
        $scope.listAnticipos2 = [];
        $scope.listAnticipos2.push($scope.anticipo4);
        $scope.listAnticipos2.push($scope.anticipo5);
        $scope.listAnticipos2.push($scope.anticipo6);
        $scope.consolidado2 = {"usuario": $scope.userApp2, "total": "6000000", "detalle": $scope.listAnticipos2,"sede":"Sede 2"};
        $scope.listConsolidado.push($scope.consolidado2);
        
         //datos prueba user3
        $scope.anticipo7 = {"id": "166611", "fecha": "02/01/2017", "monto": "2000000", "estadop": "PAGADO", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1"};
        $scope.anticipo8 = {"id": "22662", "fecha": "09/01/2017", "monto": "3500000", "estadop": "PAGADO", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "2"};
        $scope.anticipo9 = {"id": "336663", "fecha": "16/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3"};
        $scope.listAnticipos3 = [];
        $scope.listAnticipos3.push($scope.anticipo7);
        $scope.listAnticipos3.push($scope.anticipo8);
        $scope.listAnticipos3.push($scope.anticipo9);
        $scope.consolidado3 = {"usuario": $scope.userApp3, "total": "80000000", "detalle": $scope.listAnticipos3 ,"sede":"Sede 1"};
        $scope.listConsolidado.push($scope.consolidado3);
        
        //datos prueba user4
        $scope.anticipo11 = {"id": "177711", "fecha": "02/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "1"};
        $scope.anticipo12 = {"id": "227772", "fecha": "09/01/2017", "monto": "3500000", "estadop": "PAGADO", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "2"};
        $scope.anticipo13 = {"id": "377733", "fecha": "16/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "3"};
        $scope.listAnticipos4 = [];
        $scope.listAnticipos4.push($scope.anticipo11);
        $scope.listAnticipos4.push($scope.anticipo12);
        $scope.listAnticipos4.push($scope.anticipo13);
        $scope.consolidado4 = {"usuario": $scope.userApp4, "total": "85000000", "detalle": $scope.listAnticipos4 ,"sede":"Sede 3"};
        $scope.listConsolidado.push($scope.consolidado4);
        
        //datos prueba user5
        $scope.anticipo14 = {"id": "177711", "fecha": "02/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "1"};
        $scope.anticipo15 = {"id": "227772", "fecha": "09/01/2017", "monto": "3500000", "estadop": "PAGADO", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "2"};
        $scope.anticipo16 = {"id": "377733", "fecha": "16/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "3"};
        $scope.listAnticipos5 = [];
        $scope.listAnticipos5.push($scope.anticipo14);
        $scope.listAnticipos5.push($scope.anticipo15);
        $scope.listAnticipos5.push($scope.anticipo16);
        $scope.consolidado5 = {"usuario": $scope.userApp5, "total": "85000000", "detalle": $scope.listAnticipos5,"sede":"Sede 4"};
        $scope.listConsolidado.push($scope.consolidado5);


    }]);

