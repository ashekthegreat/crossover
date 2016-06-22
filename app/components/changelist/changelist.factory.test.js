
describe('changelistFactory', function () {

    beforeEach(module('myApp'));

    // get a reference to the $httpBackend mock and to the service to test, and create a mock for DomainService
    var $httpBackend, changelistFactory, DomainService;
    beforeEach(inject(function (_$httpBackend_, _changelistFactory_) {
        $httpBackend = _$httpBackend_;
        changelistFactory = _changelistFactory_;
        DomainService = function () {
            return {
                host: 'http://localhost:8000/'
            };
        };
    }));

    // after each test, this ensure that every expected http calls have been realized and only them
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('calls http backend to get data', function () {
        var data = {};

        // write $http expectation and specify a mocked server response for the request
        // see https://docs.angularjs.org/api/ngMock/service/$httpBackend
        $httpBackend.expectGET('api/changelist.json').respond(201, {bar: 'foo'});

        var returnedData;
        changelistFactory.load(data, DomainService).then(function (result) {
            // check that returned result contains
            returnedData = result;
            expect(returnedData).toEqual({bar: 'foo'});
        });

        // simulate server response
        $httpBackend.flush();

        // check that success handler has been called
        expect(returnedData).toBeDefined();

    });
});