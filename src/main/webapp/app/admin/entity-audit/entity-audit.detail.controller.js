(function() {
    'use strict';

    angular
        .module('tierspayantApp')
        .controller('AuditDetailModalCtrl', AuditDetailModalCtrl);

    AuditDetailModalCtrl.$inject = ['$scope', '$uibModalInstance', 'ObjectDiff', 'diff', 'audit'];

    function AuditDetailModalCtrl($scope, $uibModalInstance, ObjectDiff, diff, audit) {
        var vm = this;
        
        vm.diffValue = ObjectDiff.toJsonView(diff);
        vm.diffValueChanges = ObjectDiff.toJsonDiffView(diff);
        vm.audit = audit;
        vm.cancel = cancel;

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };
    };
})();
