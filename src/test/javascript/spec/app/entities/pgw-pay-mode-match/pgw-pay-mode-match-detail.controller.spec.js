'use strict';

describe('Controller Tests', function() {

    describe('PgwPayModeMatch Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwPayModeMatch, MockPgwPortal, MockPgwPayMode, MockPgwProduct, MockPgwCommissionConfig;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwPayModeMatch = jasmine.createSpy('MockPgwPayModeMatch');
            MockPgwPortal = jasmine.createSpy('MockPgwPortal');
            MockPgwPayMode = jasmine.createSpy('MockPgwPayMode');
            MockPgwProduct = jasmine.createSpy('MockPgwProduct');
            MockPgwCommissionConfig = jasmine.createSpy('MockPgwCommissionConfig');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwPayModeMatch': MockPgwPayModeMatch,
                'PgwPortal': MockPgwPortal,
                'PgwPayMode': MockPgwPayMode,
                'PgwProduct': MockPgwProduct,
                'PgwCommissionConfig': MockPgwCommissionConfig
            };
            createController = function() {
                $injector.get('$controller')("PgwPayModeMatchDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwPayModeMatchUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
