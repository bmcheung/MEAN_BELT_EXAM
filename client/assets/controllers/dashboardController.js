app.controller('dashboardController',['$scope', 'todoFactory','userFactory','$location', '$rootScope', function($scope, todoFactory, userFactory, $location, $rootScope){
console.log("dashboardController");
  if(!$rootScope.user){
    $location.url('/')
  } else {
    $scope.logged = $rootScope.user
  }

  function index(){
    todoFactory.index(function(returnedData){
      // console.log(returnedData);
      $scope.todos = returnedData;
    });
    userFactory.index(function(returnedData){
      $scope.users = returnedData;
    });
  };

  index();

  $scope.submit = function(){
      this.newTodo.createdBy = $rootScope.user;
      // console.log(this.newTodo);
      todoFactory.create(this.newTodo, function(returnedData){
        $scope.newTodo = {}
        index();
      })
  }
  $scope.logout = function(){
    delete $rootScope.user
    $location.url('/')
  }
  $scope.checkUser = function(id){
    if(id == $scope.logged._id){
      return false;
    }
    return true;
  }
  $scope.updateStatus = function(id){
    todoFactory.update(id, function(returnedData){
      index();
    })
  }
}]);
