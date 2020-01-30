'use strict';

describe('Controller Tests', function() {

    describe('PgwFactureItem Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwFactureItem, MockPgwFacture, MockPgwPortalArticle;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwFactureItem = jasmine.createSpy('MockPgwFactureItem');
            MockPgwFacture = jasmine.createSpy('MockPgwFacture');
            MockPgwPortalArticle = jasmine.createSpy('MockPgwPortalArticle');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwFactureItem': MockPgwFactureItem,
                'PgwFacture': MockPgwFacture,
                'PgwPortalArticle': MockPgwPortalArticle
            };
            createController = function() {
                $injector.get('$controller')("PgwFactureItemDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwFactureItemUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
