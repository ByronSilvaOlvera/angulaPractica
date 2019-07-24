//(function(angular) {
'use.strict';

angular.module('tabla-web').component('tabla-web',{
    templateUrl: 'table-model/tableView.html',
    controller: ['$http', function agTitulo($http) {
        var self = this;
        self.titulo = "Pagina Table";        
    }]

});

function agregaTitulo ($scope) {
    var v = this;
    v.titulo = "Diseño de DataTable";     
}



//})(window.angular);