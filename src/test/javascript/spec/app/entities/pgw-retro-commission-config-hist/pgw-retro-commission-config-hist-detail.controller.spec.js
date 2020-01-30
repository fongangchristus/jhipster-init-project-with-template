'use strict';

describe('Controller Tests', function() {

    describe('PgwRetroCommissionConfigHist Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwRetroCommissionConfigHist, MockPgwRetroCommissionConfig;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwRetroCommissionConfigHist = jasmine.createSpy('MockPgwRetroCommissionConfigHist');
            MockPgwRetroCommissionConfig = jasmine.createSpy('MockPgwRetroCommissionConfig');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwRetroCommissionConfigHist': MockPgwRetroCommissionConfigHist,
                'PgwRetroCommissionConfig': MockPgwRetroCommissionConfig
            };
            createController = function() {
                $injector.get('$controller')("PgwRetroCommissionConfigHistDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwRetroCommissionConfigHistUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
