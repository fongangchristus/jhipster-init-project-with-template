'use strict';

describe('Controller Tests', function() {

    describe('PgwProduct Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwProduct, MockPgwProductCategory, MockPgwProvServiceFacade;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwProduct = jasmine.createSpy('MockPgwProduct');
            MockPgwProductCategory = jasmine.createSpy('MockPgwProductCategory');
            MockPgwProvServiceFacade = jasmine.createSpy('MockPgwProvServiceFacade');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwProduct': MockPgwProduct,
                'PgwProductCategory': MockPgwProductCategory,
                'PgwProvServiceFacade': MockPgwProvServiceFacade
            };
            createController = function() {
                $injector.get('$controller')("PgwProductPgwDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwProductUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
