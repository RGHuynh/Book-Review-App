(function(){

  var config = {
    templateUrl: "/app/page/homepage/homepage.component.html",
    controller: homepageCtrl  
  };

  function homepageCtrl($scope){
    $scope.test = 'homepage works'
  };

  angular
    .module('bookApp')
    .component('homepage', config);
})();