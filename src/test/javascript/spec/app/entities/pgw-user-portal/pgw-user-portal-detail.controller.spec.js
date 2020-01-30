'use strict';

describe('Controller Tests', function() {

    describe('PgwUserPortal Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwUserPortal, MockPgwPortal, MockUser, MockPgwTerminal;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwUserPortal = jasmine.createSpy('MockPgwUserPortal');
            MockPgwPortal = jasmine.createSpy('MockPgwPortal');
            MockUser = jasmine.createSpy('MockUser');
            MockPgwTerminal = jasmine.createSpy('MockPgwTerminal');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwUserPortal': MockPgwUserPortal,
                'PgwPortal': MockPgwPortal,
                'User': MockUser,
                'PgwTerminal': MockPgwTerminal
            };
            createController = function() {
                $injector.get('$controller')("PgwUserPortalDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwUserPortalUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
