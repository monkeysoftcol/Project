'use strict';

/* Controllers */
var module = angular.module('CampoLimpio.controllers', []);

var aceptoDeclaracion = false;
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
var alfanumericoEspacio = /^[0-9a-záéíóúñA-ZÑÁÉÍÓÚüÜ\s]+$/;
var unNumero = /^(\d{1})$/;
var numero = /^[0-9]{0,15}$/;

var infoPlataforma = "La plataforma no esta disponible, consulte con el administrador";
var infoNoAcceso = "Usted no esta autorizado para ingresar a esta funcionalidad";
var msjForm = "Debe ingresar la información en todos los campos marcados como obligatorios (*)";
var dataUser;

/**
 * Controladores app demo CampoLimpio
 * @author ccepeda
 * @company MonkeySoft
 */
function baseController($scope) {
//    $.getJSON('./webresources/parametrosServices/infoUser', function (data) {
//        console.log(data);
//    });

    $scope.msjExito = function (mensaje) {
        new PNotify({
            title: 'Transacción exitosa',
            text: mensaje,
            type: 'success'
        });
    };
    $scope.msjError = function (mensaje) {
        new PNotify({
            title: 'Oh No!',
            text: mensaje,
            type: 'error'
        });
    };
    $scope.msjInfo = function (mensaje) {
        new PNotify({
            title: 'Información',
            text: mensaje,
            type: 'info'
        });
    };

    $scope.validaWs = function (status) {
        if (status === 401) {
            window.location.href = './login.html#/login';
        }
    };

    $scope.appName = function () {
        $scope.appName = "Anticipos y Gestión Contable";
    };

    $scope.user = {
        "name": "Sandra",
        "user": "sandra",
        "pass": "test1",
        "email": "sandra@campolimpio.com",
        "ndoc": "111111",
        "role": "USER"
    };

    $scope.user2 = {
        "name": "Administrador",
        "user": "administrador",
        "pass": "test2",
        "email": "admin@campolimpio.com",
        "ndoc": "123789",
        "role": "ADMIN"
    };

    $scope.userGlobal = {};
    $scope.listMenuGlobal = [];

    $scope.listMenuUser = [
        {"titulo": "Anticipos", "url": "#Anticipos", "new":"true","submenu":"null"},
        {"titulo": "Legalizacion", "url": "#Legalizar", "new":"false","submenu":"null"},
        {"titulo": "Consolidado", "url": "#MiConsolidado", "new":"false","submenu":"null"},
        {"titulo": "Perfil", "url": "#MiPerfil", "new":"false","submenu":"null"}
    ];

    $scope.listMenuAdmin = [
        {"titulo": "Ver Anticipos", "url": "#VerAnticipos", "new":"true","submenu":"null"},
        {"titulo": "Aprobar Legalizacion", "url": "#VerLegalizacion", "new":"true","submenu":"null"},
        {"titulo": "Ver Consolidados", "url": "#Consolidado", "new":"true","submenu":"null"},
        {"titulo": "Perfil", "url": "#MiPerfil", "new":"true","submenu":"null"},
        {"titulo": "Usuarios", "url": "#VerUsuarios", "new":"false","submenu":"null"}
    ];

    //REGISTRADO, APROBADO, ANULADO, RECHAZO, PAGADO, POR_LEGALIZAR
    $scope.anticipo={
        "id":"null",
        "fecha":"fecha",
        "monto":"12555",
        "estadop":"REGISTRADO", 
        "user":$scope.userGlobal,
        "justificacion":"Prueba",
        "soportes":"[]",
        "semana":"1"
    };
    
    $scope.legalizar={
        "monto":"111",
        "fecha":"",
        "anticipo":$scope.anticipo,
        "mensaje":"observacion del administrador"
    };
    
    $scope.listAnticipos=[];
    $scope.listLegalizacion=[];
    
    $scope.cambiarUsuario = function (tipo) {
        
        if (tipo === 1) {
            $scope.userGlobal = $scope.user;
            $scope.listMenuGlobal =$scope.listMenuUser;
        } else {
            $scope.userGlobal = $scope.user2;
            $scope.listMenuGlobal =  $scope.listMenuAdmin;
        }
        
        $scope.listAnticipos.push($scope.anticipo);
        $scope.listLegalizacion.push($scope.legalizar);
    };
}

//module.controller('InfoUserCtrl', ['$scope', '$http', function ($scope, $http) {
//        $scope.dataUser = {};
//        $scope.infoUser = {};
//        $scope.listMenu = [];
//        baseController($scope);
//    }]);

module.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
        console.log("Controlador home cargado!!!!");

        baseController($scope);
        //baseController($scope);
        $scope.cancel = function () {
            window.location.href = './login.html#/login';
        };

        $scope.cerrarSesion = function () {
            $http.get('./webresources/autenticateServices/logout', {}
            ).success(function (data, status, headers, config) {
                $scope.msjExito("Sesión terminada exitosamente. <br> Vuelva pronto!!.");
                window.location.href = './login.html';
            }).error(function (data, status, headers, config) {
                $scope.msjInfo(infoPlataforma);
                $scope.validaWs(status);
            });
        };
    }]);



