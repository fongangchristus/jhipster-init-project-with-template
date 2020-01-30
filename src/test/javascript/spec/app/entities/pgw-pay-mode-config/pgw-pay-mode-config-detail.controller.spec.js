'use strict';

describe('Controller Tests', function() {

    describe('PgwPayModeConfig Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwPayModeConfig, MockPgwPayMode, MockPgwCompte;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwPayModeConfig = jasmine.createSpy('MockPgwPayModeConfig');
            MockPgwPayMode = jasmine.createSpy('MockPgwPayMode');
            MockPgwCompte = jasmine.createSpy('MockPgwCompte');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwPayModeConfig': MockPgwPayModeConfig,
                'PgwPayMode': MockPgwPayMode,
                'PgwCompte': MockPgwCompte
            };
            createController = function() {
                $injector.get('$controller')("PgwPayModeConfigDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwPayModeConfigUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
