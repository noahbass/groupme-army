angular.module('app', ['ngRoute']);


angular.module('app').controller('bots', ['$scope', 'Bot',  function($scope) {
    $scope.foo = "bar";
}]);


angular.module('app').service('Bot', function($scope, $http) {
    this.bots = function() {
        return $http.get('/api/bot').then(function(data) {
            return data;
        });
    };
});
