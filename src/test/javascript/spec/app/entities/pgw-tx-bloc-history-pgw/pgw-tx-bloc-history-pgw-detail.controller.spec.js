'use strict';

describe('Controller Tests', function() {

    describe('PgwTxBlocHistory Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwTxBlocHistory, MockPgwTxBloc;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwTxBlocHistory = jasmine.createSpy('MockPgwTxBlocHistory');
            MockPgwTxBloc = jasmine.createSpy('MockPgwTxBloc');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwTxBlocHistory': MockPgwTxBlocHistory,
                'PgwTxBloc': MockPgwTxBloc
            };
            createController = function() {
                $injector.get('$controller')("PgwTxBlocHistoryPgwDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwTxBlocHistoryUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
