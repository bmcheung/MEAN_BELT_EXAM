app.controller('loginController',['$scope', 'userFactory', '$location','$rootScope', function($scope, userFactory, $location, $rootScope){
console.log("loginController");

  $scope.submit = function(){
    // console.log(this.newUser);
    userFactory.create(this.newUser,function(user){
      $rootScope.user = user;
      $location.url('/dashboard');
    })
  }
}]);
