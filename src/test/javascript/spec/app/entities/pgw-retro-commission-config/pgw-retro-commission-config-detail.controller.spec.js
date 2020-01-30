'use strict';

describe('Controller Tests', function() {

    describe('PgwRetroCommissionConfig Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwRetroCommissionConfig, MockPgwPortal;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwRetroCommissionConfig = jasmine.createSpy('MockPgwRetroCommissionConfig');
            MockPgwPortal = jasmine.createSpy('MockPgwPortal');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwRetroCommissionConfig': MockPgwRetroCommissionConfig,
                'PgwPortal': MockPgwPortal
            };
            createController = function() {
                $injector.get('$controller')("PgwRetroCommissionConfigDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwRetroCommissionConfigUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
