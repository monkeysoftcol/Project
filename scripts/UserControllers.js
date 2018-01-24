module.controller('ConsolidadosCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador ConsolidadosCtrl cargado!!!!");
        baseController($scope);
        $scope.appName();
        $scope.consolidado = [];
        $scope.listadoLegalizado = [];
        $scope.ultimosMontosAprobados = [];
        
        $scope.mostrarMensaje = mostrarMensaje;
        $scope.verDetalle = verDetalle;
        $scope.verMas = verMas;
        //REGISTRADO, APROBADO, ANULADO, RECHAZO, PAGADO, POR_LEGALIZAR
        $scope.datosTabla1 = {
            "id": "1",
            "monto": "10000",
            "actividad": "Compra",
            "estado": "REGISTRADO",
            "fechaAprobacion": "null",
            "observacion": "null"
        };
        $scope.datosTabla2 = {
            "id": "2",
            "monto": "2000",
            "actividad": "Arriendo",
            "estado": "APROBADO",
            "fechaAprobacion": "06/07/2017",
            "observacion": "null"
        };
        $scope.datosTabla3 = {
            "id": "3",
            "monto": "5000",
            "actividad": "Compra",
            "estado": "POR_LEGALIZAR",
            "fechaAprobacion": "null",
            "observacion": "null"
        };
        $scope.datosTabla4 = {
            "id": "4",
            "monto": "15000",
            "actividad": "Transporte",
            "estado": "RECHAZADO",
            "fechaAprobacion": "10/12/2017",
            "observacion": "Observación el porque del rechazo"
        };
        $scope.datosTabla5 = {
            "id": "5",
            "monto": "20000",
            "actividad": "Servicios públicos",
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
        
        function verDetalle(id){
            if(id === "1"){
               $scope.mostrarMensaje($scope.datosTabla1); 
            }
            if(id === "2"){
               $scope.mostrarMensaje($scope.datosTabla2); 
            }
            if(id === "3"){
               $scope.mostrarMensaje($scope.datosTabla3); 
            }
            if(id === "4"){
               $scope.mostrarMensaje($scope.datosTabla4); 
            }
            if(id === "5"){
               $scope.mostrarMensaje($scope.datosTabla5); 
            }
        };
        
        function verMas(){
            $scope.mostrarMensaje($scope.ultimosMontosAprobados);
        };

        function mostrarMensaje(row) {
            console.log(JSON.stringify(row));
            $('#modalTitulo').html('Detalle');
            $('#modalTituloDecripcion').html('Información del consolidado');
            $('#modalTituloContenido').html(JSON.stringify(row));
            $('#verDetDlg').modal();
        }
        ;

        $scope.detalleSelected = {};
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
        $scope.nuevoRegistro = {};
        $scope.id = 1;

        $scope.solicitar = solicitar;
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
        
        $scope.meses = [
            {id:"1", nombre:"Enero"},
            {id:"2", nombre:"Febrero"},
            {id:"3", nombre:"Marzo"},
            {id:"4", nombre:"Abril"},
            {id:"5", nombre:"Mayo"},
            {id:"6", nombre:"Junio"},
            {id:"7", nombre:"Julio"},
            {id:"8", nombre:"Agosto"},
            {id:"9", nombre:"Septiembre"},
            {id:"10", nombre:"Octubre"},
            {id:"11", nombre:"Noviembre"},
            {id:"12", nombre:"Diciembre"}
        ];
        
        $scope.semanas = [
            {id:"1", nombre:"1"},
            {id:"2", nombre:"2"},
            {id:"3", nombre:"3"},
            {id:"4", nombre:"4"},
            {id:"5", nombre:"5"},
            {id:"6", nombre:"6"},
            {id:"7", nombre:"7"},
            {id:"8", nombre:"8"},
            {id:"9", nombre:"9"},
            {id:"10", nombre:"10"},
            {id:"11", nombre:"11"},
            {id:"12", nombre:"12"}
        ];
        
        $scope.conceptos = [
            {id:"1", nombre:"Compra"},
            {id:"2", nombre:"Arriendo"},
            {id:"3", nombre:"Transporte"},
            {id:"4", nombre:"Personal"}
        ];

        $scope.municipios = [
            {id:"1", nombre:"Cundinamarca"},
            {id:"2", nombre:"Risaralda"},
            {id:"3", nombre:"Meta"},
            {id:"4", nombre:"Valle"}
        ];

        $scope.datos1 = {
            "id": "1",
            "mes":"Enero",
            "semana":"3",
            "actividad": "Transporte personal",
            "concepto": "Transporte",
            "municipio": "Risaralda",
            "valor": "1500000",
            "estado": "2"
        };

        $scope.datosTabla.push($scope.datos1);

        function solicitar() {
            $scope.errores = {};
            var error = false;
            if (!$scope.datosFormulario.mes) {
                error = true;
                $scope.errores.mes = 'Campo obligatorio';
            }
            if (!$scope.datosFormulario.semana) {
                error = true;
                $scope.errores.semana = 'Campo obligatorio';
            }
            if (!$scope.datosFormulario.actividad) {
                error = true;
                $scope.errores.actividad = 'Campo obligatorio';
            }
            if (!$scope.datosFormulario.concepto) {
                error = true;
                $scope.errores.concepto = 'Campo obligatorio';
            }
            if (!$scope.datosFormulario.municipio) {
                error = true;
                $scope.errores.municipio = 'Campo obligatorio';
            }
            if (!$scope.datosFormulario.valor) {
                error = true;
                $scope.errores.valor = 'Campo obligatorio';
            }
            if (!error) {
                $scope.newsoporte.id = $scope.id + 1;
                $scope.newsoporte.mes = $scope.datosFormulario.mes.nombre;
                $scope.newsoporte.semana = $scope.datosFormulario.semana.nombre;
                $scope.newsoporte.actividad = $scope.datosFormulario.actividad;
                $scope.newsoporte.concepto = $scope.datosFormulario.concepto.nombre;
                $scope.newsoporte.municipio = $scope.datosFormulario.municipio.nombre;
                $scope.newsoporte.valor = $scope.datosFormulario.valor;
                $scope.newsoporte.estado = "1";
                $scope.datosTabla.push($scope.newsoporte);
                $scope.mostrarMensaje("El registro se guardo de forma exitosa");
                $scope.newsoporte = {};
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
        }
        ;

        function mostrarFormulario() {
            $scope.verSolicitud = false;
            $scope.verFormulario = true;
            $scope.datosFormulario = {};
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

        function legalizado() {
            $('#modalTitulo').html('Información');
            $('#modalTituloContenido').html('El registro ha sido legalizado');
            $('#legaDlg').modal();
        }
        ;

        function mostrarMensaje() {
            $('#modalTitulo').html('Legalización');
            $('#modalTituloContenido').html("El registro ya fue legalizado");
            $('#legaDlg').modal();
        }
        ;
    }]);


module.controller('PerfilUserCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador PerfilUserCtrl cargado!!!!");
        baseController($scope);
        $scope.appName();
        $scope.verPerfil = true;
        
}]);
