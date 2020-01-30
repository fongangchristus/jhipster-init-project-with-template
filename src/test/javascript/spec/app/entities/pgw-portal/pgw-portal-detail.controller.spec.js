'use strict';

describe('Controller Tests', function() {

    describe('PgwPortal Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockPgwPortal, MockPgwPackage, MockPgwPortailInfo;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockPgwPortal = jasmine.createSpy('MockPgwPortal');
            MockPgwPackage = jasmine.createSpy('MockPgwPackage');
            MockPgwPortailInfo = jasmine.createSpy('MockPgwPortailInfo');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'PgwPortal': MockPgwPortal,
                'PgwPackage': MockPgwPackage,
                'PgwPortailInfo': MockPgwPortailInfo
            };
            createController = function() {
                $injector.get('$controller')("PgwPortalDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'pgwitgApp:pgwPortalUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
