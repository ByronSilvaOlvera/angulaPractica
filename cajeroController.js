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



});