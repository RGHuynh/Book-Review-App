(function(){

  var config = {
    templateUrl: '/app/searchBar/searchBar.component.html',
    controller: searchBar
  };

  function searchBar($scope){
    $scope.test = "search bar works"
  };

  angular
    .module('bookApp')
    .component('searchBar', config);
})();