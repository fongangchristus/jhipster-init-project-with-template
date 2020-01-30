'use strict';

describe('Controller Tests', function() {

    describe('PgwTxItem Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwTxItem, MockPgwPayMode, MockPgwPortal, MockPgwProduct, MockPgwTxBloc;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwTxItem = jasmine.createSpy('MockPgwTxItem');
            MockPgwPayMode = jasmine.createSpy('MockPgwPayMode');
            MockPgwPortal = jasmine.createSpy('MockPgwPortal');
            MockPgwProduct = jasmine.createSpy('MockPgwProduct');
            MockPgwTxBloc = jasmine.createSpy('MockPgwTxBloc');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwTxItem': MockPgwTxItem,
                'PgwPayMode': MockPgwPayMode,
                'PgwPortal': MockPgwPortal,
                'PgwProduct': MockPgwProduct,
                'PgwTxBloc': MockPgwTxBloc
            };
            createController = function() {
                $injector.get('$controller')("PgwTxItemDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwTxItemUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
