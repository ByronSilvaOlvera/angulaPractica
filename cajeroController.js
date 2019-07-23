'use strict';

app.controller("cajeroController", function($scope){
    $scope.apellido = "Silva Olvera";
    var lista = this;
    var n = 2;
    lista.producto = [
        { id: 1, nombre: "Café", precio: 0.10 },
        { id: 2, nombre: "Agua", precio: 0.20 }
    ]

    lista.addProducto = function () {
        var nombre = lista.nombre;
        var precio = lista.precio;

        if (nombre != "" && precio != "" && !isNaN(precio)) {
            n++;
            lista.producto.push({ id: n, nombre: nombre, precio: precio });
            lista.nombre = "";
            lista.precio = "";
        }
    };

    lista.carritoCo = [];
    var nc = 0;
    lista.addAlcarrito = function(){
        nc++;
        var id = lista.productoSeleccionado;
        var cantidad = lista.cantidad;
        var producto = lista.producto.find(function (obj) {
            return obj.id == id;
        });
        if (producto != undefined && cantidad > 0) {
            lista.carritoCo.push({
                id: nc, nombre: producto.nombre, precio: producto.precio,
                cantidad: cantidad, total: producto.precio * cantidad
            })
            lista.cantidad = "";
            lista.productoSeleccionado="";
        }
    }
    
    lista.getTotalCarrito = function(){
        var total = 0; 
        lista.carritoCo.forEach(x => {total += x.total});

        return total;
    }

    function BindAngularDirectiveCtrl($scope, $compile, DTOptionsBuilder, DTColumnBuilder) {
        var vm = this;
        vm.message = '';
        vm.edit = edit;
        vm.delete = deleteRow;
        vm.dtInstance = {};
        vm.persons = {};
        vm.dtOptions = DTOptionsBuilder.fromSource('data1.json')
            .withPaginationType('full_numbers')
            .withOption('createdRow', createdRow);
        vm.dtColumns = [
            DTColumnBuilder.newColumn('id').withTitle('ID'),
            DTColumnBuilder.newColumn('firstName').withTitle('First name'),
            DTColumnBuilder.newColumn('lastName').withTitle('Last name'),
            DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
                .renderWith(actionsHtml)
        ];
    
        function edit(person) {
            vm.message = 'You are trying to edit the row: ' + JSON.stringify(person);
            // Edit some data and call server to make changes...
            // Then reload the data so that DT is refreshed
            vm.dtInstance.reloadData();
        }
        function deleteRow(person) {
            vm.message = 'You are trying to remove the row: ' + JSON.stringify(person);
            // Delete some data and call server to make changes...
            // Then reload the data so that DT is refreshed
            vm.dtInstance.reloadData();
        }
        function createdRow(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        }
        function actionsHtml(data, type, full, meta) {
            vm.persons[data.id] = data;
            return '<button class="btn btn-warning" ng-click="showCase.edit(showCase.persons[' + data.id + '])">' +
                '   <i class="fa fa-edit"></i>' +
                '</button>&nbsp;' +
                '<button class="btn btn-danger" ng-click="showCase.delete(showCase.persons[' + data.id + '])" )"="">' +
                '   <i class="fa fa-trash-o"></i>' +
                '</button>';
        }
    }
    
    //this.BindAngularDirectiveCtrl();

});