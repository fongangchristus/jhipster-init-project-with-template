'use strict';

describe('Controller Tests', function() {

    describe('PgwCompte Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwCompte, MockPgwPortal, MockPgwCompteConfig;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwCompte = jasmine.createSpy('MockPgwCompte');
            MockPgwPortal = jasmine.createSpy('MockPgwPortal');
            MockPgwCompteConfig = jasmine.createSpy('MockPgwCompteConfig');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwCompte': MockPgwCompte,
                'PgwPortal': MockPgwPortal,
                'PgwCompteConfig': MockPgwCompteConfig
            };
            createController = function() {
                $injector.get('$controller')("PgwCompteDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwCompteUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
