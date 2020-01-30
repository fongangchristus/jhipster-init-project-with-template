'use strict';

describe('Controller Tests', function() {

    describe('PgwCommissionConfigHist Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwCommissionConfigHist, MockPgwCommissionConfig;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwCommissionConfigHist = jasmine.createSpy('MockPgwCommissionConfigHist');
            MockPgwCommissionConfig = jasmine.createSpy('MockPgwCommissionConfig');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwCommissionConfigHist': MockPgwCommissionConfigHist,
                'PgwCommissionConfig': MockPgwCommissionConfig
            };
            createController = function() {
                $injector.get('$controller')("PgwCommissionConfigHistDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwCommissionConfigHistUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
