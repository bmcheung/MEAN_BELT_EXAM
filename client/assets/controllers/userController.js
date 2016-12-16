app.controller('userController',['$scope', 'userFactory','todoFactory', '$location','$rootScope','$routeParams', function($scope,userFactory,todoFactory, $location, $rootScope, $routeParams){
console.log("userController");
  if(!$rootScope.user){
    $location.url('/')
  } else {
    $scope.logged = $rootScope.user
  }

  var index = function(){
    userFactory.show($routeParams.id, function(returnedData){
      $scope.user = returnedData;
      console.log($scope.user.bucketlist);
    });
  };
  index();

  $scope.create = function(){
    userFactory.create(this.newFriend,function(){
      $location.url('/dashboard')
    })
  }
  $scope.checkUser = function(index){
    if($scope.user.bucketlist[index]._createdBy._id == $scope.logged._id){
      return false;
    }
    return true;
  }
  $scope.updateStatus = function(index){
    var newStatus = ($scope.user.bucketlist[index]._status)
    todoFactory.update($scope.user.bucketlist[index]._id, function(returnedData){
      index();
    })
  }
}]);
