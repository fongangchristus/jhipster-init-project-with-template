'use strict';

describe('Controller Tests', function() {

    describe('PgwPayMode Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwPayMode, MockPgwPayServiceFacade;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwPayMode = jasmine.createSpy('MockPgwPayMode');
            MockPgwPayServiceFacade = jasmine.createSpy('MockPgwPayServiceFacade');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwPayMode': MockPgwPayMode,
                'PgwPayServiceFacade': MockPgwPayServiceFacade
            };
            createController = function() {
                $injector.get('$controller')("PgwPayModePgwDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwPayModeUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
