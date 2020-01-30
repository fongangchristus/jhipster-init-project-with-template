'use strict';

describe('Controller Tests', function() {

    describe('PgwDetailPackage Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwDetailPackage, MockPgwPayMode, MockPgwPackage;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwDetailPackage = jasmine.createSpy('MockPgwDetailPackage');
            MockPgwPayMode = jasmine.createSpy('MockPgwPayMode');
            MockPgwPackage = jasmine.createSpy('MockPgwPackage');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwDetailPackage': MockPgwDetailPackage,
                'PgwPayMode': MockPgwPayMode,
                'PgwPackage': MockPgwPackage
            };
            createController = function() {
                $injector.get('$controller')("PgwDetailPackageDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwDetailPackageUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
