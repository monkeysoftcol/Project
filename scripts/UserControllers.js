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

    }]);
module.controller('AnticiposCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador AnticiposCtrl cargado!!!!");
        $scope.datosFormulario = {};
        $scope.newsoporte = {};
        baseController($scope);
        $scope.appName();
        $scope.verSolicitud = false;
        $scope.verFormulario = true;
        $scope.totalAsignadoAno = '20000000';
        $scope.montoGastado = '10000000';
        $scope.montoRestante = '10000000';
        $scope.datosTabla = [];

        $scope.conceptos = conceptos;
        $scope.mostrarMensaje = mostrarMensaje;
        $scope.mostrarTabla = mostrarTabla;
        $scope.mostrarFormulario = mostrarFormulario;
        $scope.registrarDato = registrarDato;

        function mostrarMensaje(row) {
            console.log(JSON.stringify(row));
            $('#modalTitulo').html('Detalle Consolidado');
            $('#modalTituloDecripcion').html('Información del consolidado');
            $('#modalTituloContenido').html(JSON.stringify(row));
            $('#myModal').modal();
        }
        ;

        $scope.datos1 = {
            "id": "1",
            "monto": "1000000",
            "concepto": "COMPRA",
            "fechaSolicitud": "20/01/2018",
            "estado": "Registrado",
            "legalizado": "1",
            "observacion": "Solicitud para la compra de ..."
        };

        $scope.datos2 = {
            "id": "2",
            "monto": "newsoporte.datosFormulario.valor",
            "concepto": "newsoporte.datosFormulario.concepto",
            "fechaSolicitud": new Date(),
            "estado": "Registrado",
            "legalizado": "1",
            "observacion": "newsoporte.datosFormulario.observacion"
        };


        $scope.datosTabla.push($scope.datos1);
        $scope.datosTabla.push($scope.datos2);

        function conceptos() {
            $scope.errores = {};
            var error = false;
            if (!$scope.datosFormulario.concepto) {
                error = true;
                $scope.errores.concepto = 'Campo obligatorio';
            }
            if (!$scope.datosFormulario.valor) {
                error = true;
                $scope.errores.valor = 'Campo obligatorio';
            }
            if (!$scope.datosFormulario.observacion) {
                error = true;
                $scope.errores.observacion = 'Campo obligatorio';
            }
            if (!error) {
                $scope.newsoporte.concepto = $scope.datosFormulario.concepto;
                $scope.newsoporte.valor = $scope.datosFormulario.valor;
                $scope.newsoporte.observacion = $scope.datosFormulario.observacion;
                $scope.mostrarMensaje($scope.newsoporte);
            }
            ;
        }
        ;

        function registrarDato() {
            $scope.newsoporte.concepto = $scope.datosFormulario.concepto;
            $scope.newsoporte.valor = $scope.datosFormulario.valor;
            $scope.newsoporte.observacion = $scope.datosFormulario.observacion;
            $scope.mostrarTabla($scope.newsoporte);
        }
        ;

        function mostrarTabla(newsoporte) {
            $scope.verSolicitud = true;
            $scope.verFormulario = false;
            $scope.datos2(newsoporte);
        }
        ;

        function mostrarFormulario() {
            $scope.verSolicitud = false;
            $scope.verFormulario = true;
        }
        ;

    }]);

module.controller('LegalizacionUserCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador LegalizacionUserCtrl cargado!!!!");
        baseController($scope);
        $scope.appName();
        $scope.datosTabla = [];
        $scope.verFormulario = false;
        $scope.verTabla = true;
        $scope.datosFormulario = {};
        $scope.newsoporte = {};
        //Funciones
        $scope.legalizar = legalizar;
        $scope.mostrarMensaje = mostrarMensaje;
        $scope.mostrarFormulario = mostrarFormulario;
        $scope.mostrarTabla = mostrarTabla;
        $scope.legalizado = legalizado;

        $scope.dato1 = {
            "id": "1",
            "monto": "1000000",
            "fechaRegistro": "01/11/2017",
            "observacion": "COMPRA DE MATERIALES",
            "legalizado": "1"
        };
        $scope.dato2 = {
            "id": "2",
            "monto": "5000000",
            "fechaRegistro": "20/11/2017",
            "observacion": "COMPRA DE MATERIALES",
            "legalizado": "2"
        };
        $scope.dato3 = {
            "id": "3",
            "monto": "1500000",
            "fechaRegistro": "01/12/2017",
            "observacion": "COMPRA DE MATERIALES",
            "legalizado": "1"
        };
        $scope.dato4 = {
            "id": "4",
            "monto": "8000000",
            "fechaRegistro": "20/12/2017",
            "observacion": "COMPRA DE MATERIALES",
            "legalizado": "2"
        };
        $scope.dato5 = {
            "id": "5",
            "monto": "100000",
            "fechaRegistro": "01/01/2018",
            "observacion": "COMPRA DE MATERIALES",
            "legalizado": "1"
        };

        $scope.datosTabla.push($scope.dato1);
        $scope.datosTabla.push($scope.dato2);
        $scope.datosTabla.push($scope.dato3);
        $scope.datosTabla.push($scope.dato4);
        $scope.datosTabla.push($scope.dato5);

        function legalizar(id) {
            if (id !== "1") {
                $scope.mostrarMensaje();
            } else {
                $scope.newsoporte = $scope.datosTabla;
                $scope.mostrarFormulario($scope.newsoporte);
            }
        }
        ;

        function  mostrarFormulario(datos) {
            $scope.verFormulario = true;
            $scope.verTabla = false;
        }
        ;

        function mostrarTabla() {
            $scope.verFormulario = false;
            $scope.verTabla = true;

        }
        ;
        
        function legalizado (){
            $('#modalTitulo').html('Información');
            $('#modalTituloContenido').html('El registro ha sido legalizado');
            $('#legaDlg').modal();
        };

        function mostrarMensaje() {
            $('#modalTitulo').html('Legalización');
            $('#modalTituloContenido').html("El registro ya fue legalizado");
            $('#legaDlg').modal();
        }
        ;
    }]);

        