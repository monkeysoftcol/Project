module.controller('ConsolidaAllCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador ConsolidadosCtrl cargado!!!!");
        baseController($scope);

        $scope.userApp1 = {"name": "Oscar Andres Lopez", "user": "olopez", "pass": "test1", "email": "olopez@campolimpio.com", "ndoc": "12121", "role": "USER"};
        $scope.userApp2 = {"name": "Diana Carolina Osorio", "user": "dosorio", "pass": "test1", "email": "dosorio@campolimpio.com", "ndoc": "131313", "role": "USER"};
        $scope.userApp3 = {"name": "Andres Lopez Lopez", "user": "alopez", "pass": "test1", "email": "alopez@campolimpio.com", "ndoc": "141414", "role": "USER"};
        $scope.userApp4 = {"name": "Alam Brito Garzon", "user": "agarzon", "pass": "test1", "email": "agarzon@campolimpio.com", "ndoc": "151515", "role": "USER"};
        $scope.userApp5 = {"name": "Maria Paula Dominguez", "user": "mdominguez", "pass": "test1", "email": "mdominguez@campolimpio.com", "ndoc": "161616", "role": "USER"};

        $scope.listConsolidado = [];

        $scope.soporte1 = {"id": "1", "nombre": "factura 1.pdf"};
        $scope.soporte2 = {"id": "2", "nombre": "Cotización proyecto.doc"};
        $scope.soporte3 = {"id": "3", "nombre": "Tabla de gastos.xls"};
        $scope.listSoportes = [];
        $scope.listSoportes.push($scope.soporte1);
        $scope.listSoportes.push($scope.soporte2);
        $scope.listSoportes.push($scope.soporte3);

        //datos prueba user1
        $scope.anticipo1 = {"id": "111", "fecha": "02/01/2017", "monto": "25000", "estadop": "PAGADO", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Cundinamarca"};
        $scope.anticipo2 = {"id": "222", "fecha": "09/01/2017", "monto": "3500000", "estadop": "ANTICIPO", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo 2","mes":"Enero","municipio":"Cali"};
        $scope.anticipo3 = {"id": "333", "fecha": "16/01/2017", "monto": "7895000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Popayán"};
        $scope.listAnticipos1 = [];
        $scope.listAnticipos1.push($scope.anticipo1);
        $scope.listAnticipos1.push($scope.anticipo2);
        $scope.listAnticipos1.push($scope.anticipo3);
        $scope.consolidado1 = {"usuario": $scope.userApp1, "total": "11420000", "detalle": $scope.listAnticipos1, "sede": "Sede 1"};
        $scope.listConsolidado.push($scope.consolidado1);

        //datos prueba user2
        $scope.anticipo4 = {"id": "444", "fecha": "02/01/2017", "monto": "1000000", "estadop": "PAGADO", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Cundinamarca"};
        $scope.anticipo5 = {"id": "555", "fecha": "09/01/2017", "monto": "3500000", "estadop": "PAGADO", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo","mes":"Enero","municipio":"Cali"};
        $scope.anticipo6 = {"id": "355533", "fecha": "16/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Popayán"};
        $scope.listAnticipos2 = [];
        $scope.listAnticipos2.push($scope.anticipo4);
        $scope.listAnticipos2.push($scope.anticipo5);
        $scope.listAnticipos2.push($scope.anticipo6);
        $scope.consolidado2 = {"usuario": $scope.userApp2, "total": "7000000", "detalle": $scope.listAnticipos2, "sede": "Sede 2"};
        $scope.listConsolidado.push($scope.consolidado2);

        //datos prueba user3
        $scope.anticipo7 = {"id": "166611", "fecha": "02/01/2017", "monto": "2000000", "estadop": "PAGADO", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Cundinamarca"};
        $scope.anticipo8 = {"id": "22662", "fecha": "09/01/2017", "monto": "3500000", "estadop": "PAGADO", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo","mes":"Enero","municipio":"Cali"};
        $scope.anticipo9 = {"id": "336663", "fecha": "16/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Popayán"};
        $scope.listAnticipos3 = [];
        $scope.listAnticipos3.push($scope.anticipo7);
        $scope.listAnticipos3.push($scope.anticipo8);
        $scope.listAnticipos3.push($scope.anticipo9);
        $scope.consolidado3 = {"usuario": $scope.userApp3, "total": "8000000", "detalle": $scope.listAnticipos3, "sede": "Sede 1"};
        $scope.listConsolidado.push($scope.consolidado3);

        //datos prueba user4
        $scope.anticipo11 = {"id": "177711", "fecha": "02/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Cundinamarca"};
        $scope.anticipo12 = {"id": "227772", "fecha": "09/01/2017", "monto": "3500000", "estadop": "PAGADO", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo","mes":"Enero","municipio":"Cali"};
        $scope.anticipo13 = {"id": "377733", "fecha": "16/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Popayán"};
        $scope.listAnticipos4 = [];
        $scope.listAnticipos4.push($scope.anticipo11);
        $scope.listAnticipos4.push($scope.anticipo12);
        $scope.listAnticipos4.push($scope.anticipo13);
        $scope.consolidado4 = {"usuario": $scope.userApp4, "total": "85000000", "detalle": $scope.listAnticipos4, "sede": "Sede 3"};
        $scope.listConsolidado.push($scope.consolidado4);

        //datos prueba user5
        $scope.anticipo14 = {"id": "177711", "fecha": "02/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Cundinamarca"};
        $scope.anticipo15 = {"id": "227772", "fecha": "09/01/2017", "monto": "3500000", "estadop": "PAGADO", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo","mes":"Enero","municipio":"Cali"};
        $scope.anticipo16 = {"id": "377733", "fecha": "16/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Popayán"};
        $scope.listAnticipos5 = [];
        $scope.listAnticipos5.push($scope.anticipo14);
        $scope.listAnticipos5.push($scope.anticipo15);
        $scope.listAnticipos5.push($scope.anticipo16);
        $scope.consolidado5 = {"usuario": $scope.userApp5, "total": "8500000", "detalle": $scope.listAnticipos5, "sede": "Sede 4"};
        $scope.listConsolidado.push($scope.consolidado5);

        $scope.detalleSelected = {};
        $scope.total = 0;
        $scope.verDetalleConsolidado = function (row) {
            $scope.total = 0;
            console.log(JSON.stringify(row));
            $scope.detalleSelected = row;
            $('#modalTitulo').html('Detalle Consolidado');
            $('#modalTituloDecripcion').html('Información del consolidado');

            angular.forEach($scope.detalleSelected.detalle, function (value, key) {
                console.log(value.monto);
                $scope.sumar(parseInt(value.monto));
            });


            //$('#modalTituloContenido').html(JSON.stringify(row));
            //$('#dlgProccesing').modal();
            $('#dlgdatail').modal();
        };

        $scope.sumar = function (cantidad) {
            $scope.total += cantidad;
        };

    }]);

module.controller('AnticiposAllCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador AnticiposAllCtrl cargado!!!!");
        baseController($scope);

        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.pageChangeHandler = function (num) {
            console.log('going to page ' + num);
        };

        $scope.userApp1 = {"name": "Oscar Andres Lopez", "user": "olopez", "pass": "test1", "email": "olopez@campolimpio.com", "ndoc": "12121", "role": "USER"};
        $scope.userApp2 = {"name": "Diana Carolina Osorio", "user": "dosorio", "pass": "test1", "email": "dosorio@campolimpio.com", "ndoc": "131313", "role": "USER"};
        $scope.userApp3 = {"name": "Andres Lopez Lopez", "user": "alopez", "pass": "test1", "email": "alopez@campolimpio.com", "ndoc": "141414", "role": "USER"};
        $scope.userApp4 = {"name": "Alam Brito Garzon", "user": "agarzon", "pass": "test1", "email": "agarzon@campolimpio.com", "ndoc": "151515", "role": "USER"};
        $scope.userApp5 = {"name": "Maria Paula Dominguez", "user": "mdominguez", "pass": "test1", "email": "mdominguez@campolimpio.com", "ndoc": "161616", "role": "USER"};

        $scope.listConsolidado = [];
        $scope.listAntAprobados = [];
        $scope.listAntPagados = [];
        $scope.listAntLegalizar = [];

        $scope.soporte1 = {"id": "1", "nombre": "factura 1.pdf"};
        $scope.soporte2 = {"id": "2", "nombre": "Cotización proyecto.doc"};
        $scope.soporte3 = {"id": "3", "nombre": "Tabla de gastos.xls"};
        $scope.listSoportes = [];
        $scope.listSoportes.push($scope.soporte1);
        $scope.listSoportes.push($scope.soporte2);
        $scope.listSoportes.push($scope.soporte3);

        //datos prueba user1
        $scope.anticipo1 = {"id": "111", "fecha": "02/01/2017", "monto": "25000", "estadop": "PAGADO", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Cundinamarca"};
        $scope.listAntPagados.push($scope.anticipo4);
        $scope.anticipo2 = {"id": "222", "fecha": "09/01/2017", "monto": "3500000", "estadop": "ANTICIPO", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo","mes":"Enero","municipio":"Cali"};
        $scope.listAntAprobados.push($scope.anticipo2);
        $scope.anticipo3 = {"id": "333", "fecha": "16/01/2017", "monto": "7895000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Popayan"};
        $scope.listAntLegalizar.push($scope.anticipo3);
        $scope.listAnticipos1 = [];
        $scope.listAnticipos1.push($scope.anticipo1);
        $scope.listAnticipos1.push($scope.anticipo2);
        $scope.listAnticipos1.push($scope.anticipo3);
        $scope.consolidado1 = {"usuario": $scope.userApp1, "total": "11420000", "detalle": $scope.listAnticipos1, "sede": "Sede 1"};
        $scope.listConsolidado.push($scope.consolidado1);

        //datos prueba user2
        $scope.anticipo4 = {"id": "444", "fecha": "02/01/2017", "monto": "1000000", "estadop": "PAGADO", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Cundinamarca"};
        $scope.listAntPagados.push($scope.anticipo4);
        $scope.anticipo5 = {"id": "555", "fecha": "09/01/2017", "monto": "3500000", "estadop": "PAGADO", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo","mes":"Enero","municipio":"Medellin"};
        $scope.listAntPagados.push($scope.anticipo5);
        $scope.anticipo6 = {"id": "355533", "fecha": "16/01/2017", "monto": "2500000", "estadop": "ANTICIPO", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Neiva"};
        $scope.listAntAprobados.push($scope.anticipo6);
        $scope.listAnticipos2 = [];
        $scope.listAnticipos2.push($scope.anticipo4);
        $scope.listAnticipos2.push($scope.anticipo5);
        $scope.listAnticipos2.push($scope.anticipo6);
        $scope.consolidado2 = {"usuario": $scope.userApp2, "total": "7000000", "detalle": $scope.listAnticipos2, "sede": "Sede 2"};
        $scope.listConsolidado.push($scope.consolidado2);

        //datos prueba user3
        $scope.anticipo7 = {"id": "166611", "fecha": "02/01/2017", "monto": "2000000", "estadop": "PAGADO", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Popayan"};
        $scope.listAntPagados.push($scope.anticipo7);
        $scope.anticipo8 = {"id": "22662", "fecha": "09/01/2017", "monto": "3500000", "estadop": "ANTICIPO", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo","mes":"Enero","municipio":"Cali"};
        $scope.listAntAprobados.push($scope.anticipo8);
        $scope.anticipo9 = {"id": "336663", "fecha": "16/01/2017", "monto": "2500000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Pasto"};
        $scope.listAntLegalizar.push($scope.anticipo9);
        $scope.listAnticipos3 = [];
        $scope.listAnticipos3.push($scope.anticipo7);
        $scope.listAnticipos3.push($scope.anticipo8);
        $scope.listAnticipos3.push($scope.anticipo9);
        $scope.consolidado3 = {"usuario": $scope.userApp3, "total": "8000000", "detalle": $scope.listAnticipos3, "sede": "Sede 1"};
        $scope.listConsolidado.push($scope.consolidado3);

        //datos prueba user4
        $scope.anticipo11 = {"id": "177711", "fecha": "02/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Cundinamarca"};
        $scope.listAntPagados.push($scope.anticipo11);
        $scope.anticipo12 = {"id": "227772", "fecha": "09/01/2017", "monto": "3500000", "estadop": "ANTICIPO", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo","mes":"Enero","municipio":"Medellin"};
        $scope.listAntAprobados.push($scope.anticipo12);
        $scope.anticipo13 = {"id": "377733", "fecha": "16/01/2017", "monto": "2500000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Popayan"};
        $scope.listAntLegalizar.push($scope.anticipo13);
        $scope.listAnticipos4 = [];
        $scope.listAnticipos4.push($scope.anticipo11);
        $scope.listAnticipos4.push($scope.anticipo12);
        $scope.listAnticipos4.push($scope.anticipo13);
        $scope.consolidado4 = {"usuario": $scope.userApp4, "total": "85000000", "detalle": $scope.listAnticipos4, "sede": "Sede 3"};
        $scope.listConsolidado.push($scope.consolidado4);

        //datos prueba user5
        $scope.anticipo14 = {"id": "177711", "fecha": "02/01/2017", "monto": "2500000", "estadop": "PAGADO", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "1", "actividad":"Actividad demo","mes":"Enero","municipio":"Medellin"};
        $scope.listAntPagados.push($scope.anticipo14);
        $scope.anticipo15 = {"id": "227772", "fecha": "09/01/2017", "monto": "3500000", "estadop": "ANTICIPO", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "2", "actividad":"Actividad demo","mes":"Enero","municipio":"Popayan"};
        $scope.listAntAprobados.push($scope.anticipo15);
        $scope.anticipo16 = {"id": "377733", "fecha": "16/01/2017", "monto": "2500000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "3", "actividad":"Actividad demo","mes":"Enero","municipio":"Cundinamarca"};
        $scope.listAntLegalizar.push($scope.anticipo16);
        $scope.listAnticipos5 = [];
        $scope.listAnticipos5.push($scope.anticipo14);
        $scope.listAnticipos5.push($scope.anticipo15);
        $scope.listAnticipos5.push($scope.anticipo16);
        $scope.consolidado5 = {"usuario": $scope.userApp5, "total": "8500000", "detalle": $scope.listAnticipos5, "sede": "Sede 4"};
        $scope.listConsolidado.push($scope.consolidado5);

        $scope.detalleSelected = {};
        $scope.total = 0;
        $scope.verDetalleConsolidado = function (row) {
            $scope.total = 0;
            console.log(JSON.stringify(row));
            $scope.detalleSelected = row;
            $('#modalTitulo').html('Detalle Anticipo');
            $('#modalTituloDecripcion').html('Información solicitud de anticipo');

            $('#dlgdatail').modal();
        };

        $scope.totalSolcitudes = 0;
        $scope.totalAprobados = 0;
        $scope.totalLegalizar = 0;
        $scope.calcularTotales = function () {
            $scope.totalSolcitudes = 0;
            $scope.totalAprobados = 0;
            $scope.totalLegalizar = 0;

            angular.forEach($scope.listAntAprobados, function (value, key) {
                console.log(value.monto);
                $scope.totalSolcitudes += parseInt(value.monto);
            });

            angular.forEach($scope.listAntPagados, function (value, key) {
                if (value && value.monto !== "undefined") {
                    console.log(value.monto);
                    $scope.totalAprobados += parseInt(value.monto);
                }

            });

            angular.forEach($scope.listAntLegalizar, function (value, key) {
                if (value && value.monto !== "undefined") {
                    console.log(value.monto);
                    $scope.totalLegalizar += parseInt(value.monto);
                }
            });
        };
        $scope.calcularTotales();


        $scope.sumar = function (cantidad) {
            $scope.total += cantidad;
        };

        $scope.anticipoSelected;
        $scope.dlgconfirmarAprobacion = function (row) {
            $scope.total = 0;
            $scope.anticipoSelected = row;
            //$('#modalTitulo').html('Confirmación');
            //$('#modalTituloDecripcion').html('Confirmación aprobación solicitud');
            //$('#modalTituloContenido').html("Está seguro de realizar la aprobación del Anticipo seleccionado");
            $('#dlconfirmacionAprobacion').modal();
        };

        $scope.aceptarAprobacionAnticipo = function () {
            if ($scope.anticipoSelected) {
                $('#dlconfirmacionAprobacion').modal('hide');
                $('#modalexitocontenido').html("La solicitud de anticipo se aprobó exitosamente. Ahora proceder a realizar el pago solicitado.");
                $('#dlgExito').modal();
            }
        };

        $scope.dlgconfirmarRechazo = function (row) {
            $scope.total = 0;
            $scope.anticipoSelected = row;
            $('#dlconfirmacionRechazo').modal();
        };

        $scope.aceptarRechazoAnticipo = function () {
            if ($scope.anticipoSelected) {
                $('#dlconfirmacionRechazo').modal('hide');
                $('#modalexitocontenido').html("La solicitud se ha rechazado exitosamente. Se envió un Email de notificación al usuario");
                $('#dlgExito').modal();
            }
        };

    }]);

module.controller('LegalizacionAllCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador LegalizacionAllCtrl cargado!!!!");
        baseController($scope);

        $scope.currentPage = 1;
        $scope.pageSize = 5;
        $scope.pageChangeHandler = function (num) {
            console.log('going to page ' + num);
        };

        $scope.verlist = true;
        $scope.verdetails = false;

        $scope.userApp1 = {"name": "Oscar Andres Lopez", "user": "olopez", "pass": "test1", "email": "olopez@campolimpio.com", "ndoc": "12121", "role": "USER"};
        $scope.userApp2 = {"name": "Diana Carolina Osorio", "user": "dosorio", "pass": "test1", "email": "dosorio@campolimpio.com", "ndoc": "131313", "role": "USER"};
        $scope.userApp3 = {"name": "Andres Lopez Lopez", "user": "alopez", "pass": "test1", "email": "alopez@campolimpio.com", "ndoc": "141414", "role": "USER"};
        $scope.userApp4 = {"name": "Alam Brito Garzon", "user": "agarzon", "pass": "test1", "email": "agarzon@campolimpio.com", "ndoc": "151515", "role": "USER"};
        $scope.userApp5 = {"name": "Maria Paula Dominguez", "user": "mdominguez", "pass": "test1", "email": "mdominguez@campolimpio.com", "ndoc": "161616", "role": "USER"};

        $scope.soporte1 = {"id": "1", "nombre": "factura 1.pdf"};
        $scope.soporte2 = {"id": "2", "nombre": "Cotización proyecto.doc"};
        $scope.soporte3 = {"id": "3", "nombre": "Tabla de gastos.xls"};
        $scope.listSoportes = [];
        $scope.listSoportes.push($scope.soporte1);
        $scope.listSoportes.push($scope.soporte2);
        $scope.listSoportes.push($scope.soporte3);

        $scope.listAntA = [];
        $scope.listAntP = [];

        $scope.soporte1 = {"id": "1", "nombre": "factura 1.pdf"};
        $scope.soporte2 = {"id": "2", "nombre": "Cotización proyecto.doc"};
        $scope.soporte3 = {"id": "3", "nombre": "Tabla de gastos.xls"};
        $scope.listSoportes = [];
        $scope.listSoportes.push($scope.soporte1);
        $scope.listSoportes.push($scope.soporte2);
        $scope.listSoportes.push($scope.soporte3);

        $scope.detalle1 = {"id": "1", "fecha": "23/01/2017", "justificacion": "Gasto numero 1 debido a las necesidades de la empresa", "soporte": $scope.soporte1, "monto": "1500000"};
        $scope.detalle2 = {"id": "2", "fecha": "23/01/2017", "justificacion": "Gasto numero 2 debido a las necesidades de la empresa", "soporte": $scope.soporte2, "monto": "2500000"};
        $scope.detalle3 = {"id": "3", "fecha": "23/01/2017", "justificacion": "Gasto numero 3 debido a las necesidades de la empresa", "soporte": $scope.soporte3, "monto": "1850000"};
        $scope.listDetalles = [];
        $scope.listDetalles.push($scope.detalle1);
        $scope.listDetalles.push($scope.detalle2);
        $scope.listDetalles.push($scope.detalle3);

        //datos prueba user1
        $scope.anticipo3 = {"id": "333", "fecha": "16/01/2017", "monto": "7895000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp1, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3", "legalizacion": $scope.listDetalles, "actividad":"Actividad demo","mes":"Enero","municipio":"Medellin"};
        $scope.listAntA.push($scope.anticipo3);

        //datos prueba user2
        $scope.anticipo4 = {"id": "444", "fecha": "02/01/2017", "monto": "1000000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp2, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1", "legalizacion": $scope.listDetalles, "actividad":"Actividad demo","mes":"Enero","municipio":"Medellin"};
        $scope.listAntA.push($scope.anticipo4);

        //datos prueba user3
        $scope.anticipo7 = {"id": "166611", "fecha": "02/01/2017", "monto": "2000000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "1", "legalizacion": $scope.listDetalles, "actividad":"Actividad demo","mes":"Enero","municipio":"Medellin"};
        $scope.listAntA.push($scope.anticipo7);
        $scope.anticipo9 = {"id": "336663", "fecha": "16/01/2017", "monto": "2500000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp3, "justificacion": "Prueba", "soportes": $scope.listSoportes, "semana": "3", "legalizacion": $scope.listDetalles, "actividad":"Actividad demo","mes":"Enero","municipio":"Medellin"};
        $scope.listAntA.push($scope.anticipo9);

        //datos prueba user4
        $scope.anticipo13 = {"id": "377733", "fecha": "16/01/2017", "monto": "2500000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp4, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "3", "legalizacion": $scope.listDetalles, "actividad":"Actividad demo","mes":"Enero","municipio":"Medellin"};
        $scope.listAntA.push($scope.anticipo13);

        //datos prueba user5
        $scope.anticipo16 = {"id": "377733", "fecha": "16/01/2017", "monto": "2500000", "estadop": "POR_LEGALIZAR", "user": $scope.userApp5, "justificacion": "Prueba de justificacion", "soportes": $scope.listSoportes, "semana": "3", "legalizacion": $scope.listDetalles, "actividad": "Actividad demo", "mes": "Enero", "municipio": "Medellin"};
        $scope.listAntA.push($scope.anticipo16);


        $scope.detalleSelected = {};
        $scope.total = 0;
        $scope.verDetalleConsolidado = function (row) {
            $scope.total = 0;
            console.log(JSON.stringify(row));
            $scope.detalleSelected = row;
            $scope.verlist = false;
            $scope.verdetails = true;
            //$('#modalTitulo').html('Detalle Anticipo');
            //$('#modalTituloDecripcion').html('Información solicitud de anticipo');

            //$('#dlgdatail').modal();
        };

        $scope.volver = function () {
            $scope.verlist = true;
            $scope.verdetails = false;
            $scope.detalleSelected = {};
        };

        $scope.totalSolcitudes = 0;
        $scope.totalAprobados = 0;
        $scope.totalLegalizar = 0;
        $scope.calcularTotales = function () {
            $scope.totalSolcitudes = 0;
            $scope.totalAprobados = 0;
            $scope.totalLegalizar = 0;

            angular.forEach($scope.listAntAprobados, function (value, key) {
                console.log(value.monto);
                $scope.totalSolcitudes += parseInt(value.monto);
            });

            angular.forEach($scope.listAntPagados, function (value, key) {
                if (value && value.monto !== "undefined") {
                    console.log(value.monto);
                    $scope.totalAprobados += parseInt(value.monto);
                }

            });

            angular.forEach($scope.listAntLegalizar, function (value, key) {
                if (value && value.monto !== "undefined") {
                    console.log(value.monto);
                    $scope.totalLegalizar += parseInt(value.monto);
                }
            });
        };
        $scope.calcularTotales();


        $scope.sumar = function (cantidad) {
            $scope.total += cantidad;
        };

        $scope.anticipoSelected;
        $scope.dlgconfirmarAprobacion = function (row) {
            $scope.total = 0;
            $scope.anticipoSelected = row;
            //$('#modalTitulo').html('Confirmación');
            //$('#modalTituloDecripcion').html('Confirmación aprobación solicitud');
            //$('#modalTituloContenido').html("Está seguro de realizar la aprobación del Anticipo seleccionado");
            $('#dlconfirmacionAprobacion').modal();
        };

        $scope.aceptarAprobacionAnticipo = function () {
            if ($scope.anticipoSelected) {
                $('#dlconfirmacionAprobacion').modal('hide');
                $('#modalexitocontenido').html("La solicitud de anticipo se aprobó exitosamente. Ahora proceder a realizar el pago solicitado.");
                $('#dlgExito').modal();
            }
        };

        $scope.dlgconfirmarRechazo = function (row) {
            $scope.total = 0;
            $scope.anticipoSelected = row;
            $('#dlconfirmacionRechazo').modal();
        };

        $scope.aceptarRechazoAnticipo = function (param) {
            if(param===1){
                $('#modalexitocontenido').html("La solicitud se ha devuelto exitosamente. Se envió un Email de notificación al usuario");
            }
            if(param===2){
                $('#modalexitocontenido').html("La solicitud se ha rechazado exitosamente. Se envió un Email de notificación al usuario");
            }
            if(param===3){
                $('#modalexitocontenido').html("La solicitud se ha aprobado exitosamente. Se envió un Email de notificación al usuario");
            }
            
            $('#dlgExito').modal();
            $scope.volver();

        };


    }]); 


module.controller('ProfileCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador ProfileCtrl cargado!!!!");
        baseController($scope);
        
        

  }]); 
