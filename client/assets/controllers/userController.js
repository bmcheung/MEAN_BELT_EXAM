app.controller('userController',['$scope', 'userFactory','todoFactory', '$location','$rootScope','$routeParams', function($scope,userFactory,todoFactory, $location, $rootScope, $routeParams){
console.log("userController");
  if(!$rootScope.user){
    $location.url('/')
  } else {
    $scope.logged = $rootScope.user
  }

  var reload = function(){
    userFactory.show($routeParams.id, function(returnedData){
      $scope.user = returnedData;
      console.log($scope.user.bucketlist);
    });
  };
  reload();

  $scope.create = function(){
    userFactory.create(this.newFriend,function(){
      $location.url('/dashboard')
    })
  }
  $scope.checkUser = function(id){
    // reload();
    if(id == $scope.logged._id){
      return false;
    }
    return true;
  }
  $scope.updateStatus = function(id){
    todoFactory.update(id, function(returnedData){
      reload();
    })
  }
  $scope.logout = function(){
    delete $rootScope.user
    $location.url('/')
  }
}]);
