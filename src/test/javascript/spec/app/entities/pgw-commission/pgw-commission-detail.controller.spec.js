'use strict';

describe('Controller Tests', function() {

    describe('PgwCommission Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwCommission, MockPgwPayMode, MockPgwTxBloc, MockPgwPortal, MockPgwCommissionConfig;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwCommission = jasmine.createSpy('MockPgwCommission');
            MockPgwPayMode = jasmine.createSpy('MockPgwPayMode');
            MockPgwTxBloc = jasmine.createSpy('MockPgwTxBloc');
            MockPgwPortal = jasmine.createSpy('MockPgwPortal');
            MockPgwCommissionConfig = jasmine.createSpy('MockPgwCommissionConfig');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwCommission': MockPgwCommission,
                'PgwPayMode': MockPgwPayMode,
                'PgwTxBloc': MockPgwTxBloc,
                'PgwPortal': MockPgwPortal,
                'PgwCommissionConfig': MockPgwCommissionConfig
            };
            createController = function() {
                $injector.get('$controller')("PgwCommissionDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwCommissionUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
