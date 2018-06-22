(function(){
  angular
    .module('bookApp')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<homepage />'
        });
    }]);
})();