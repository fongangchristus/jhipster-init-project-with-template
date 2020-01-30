'use strict';

describe('Controller Tests', function() {

    describe('PgwTxItemHistory Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwTxItemHistory, MockPgwTxItem;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwTxItemHistory = jasmine.createSpy('MockPgwTxItemHistory');
            MockPgwTxItem = jasmine.createSpy('MockPgwTxItem');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwTxItemHistory': MockPgwTxItemHistory,
                'PgwTxItem': MockPgwTxItem
            };
            createController = function() {
                $injector.get('$controller')("PgwTxItemHistoryPgwDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwTxItemHistoryUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
