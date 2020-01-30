'use strict';

describe('Controller Tests', function() {

    describe('PgwRetroCommission Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwRetroCommission, MockPgwPortal, MockPgwRetroCommissionConfig;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwRetroCommission = jasmine.createSpy('MockPgwRetroCommission');
            MockPgwPortal = jasmine.createSpy('MockPgwPortal');
            MockPgwRetroCommissionConfig = jasmine.createSpy('MockPgwRetroCommissionConfig');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwRetroCommission': MockPgwRetroCommission,
                'PgwPortal': MockPgwPortal,
                'PgwRetroCommissionConfig': MockPgwRetroCommissionConfig
            };
            createController = function() {
                $injector.get('$controller')("PgwRetroCommissionDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwRetroCommissionUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
