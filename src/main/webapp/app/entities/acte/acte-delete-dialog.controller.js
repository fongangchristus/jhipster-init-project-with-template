(function() {
    'use strict';

    angular
        .module('tierspayantApp')
        .controller('ActeDeleteController',ActeDeleteController);

    ActeDeleteController.$inject = ['$uibModalInstance', 'entity', 'Acte'];

    function ActeDeleteController($uibModalInstance, entity, Acte) {
        var vm = this;

        vm.acte = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Acte.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
