'use strict';

describe('Controller Tests', function() {

    describe('PgwTxBloc Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwTxBloc, MockPgwPortal, MockPgwPayMode;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwTxBloc = jasmine.createSpy('MockPgwTxBloc');
            MockPgwPortal = jasmine.createSpy('MockPgwPortal');
            MockPgwPayMode = jasmine.createSpy('MockPgwPayMode');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwTxBloc': MockPgwTxBloc,
                'PgwPortal': MockPgwPortal,
                'PgwPayMode': MockPgwPayMode
            };
            createController = function() {
                $injector.get('$controller')("PgwTxBlocPgwDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwTxBlocUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
