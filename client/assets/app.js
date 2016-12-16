var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider){
  $routeProvider
    .when('/login',{
      templateUrl: '/partials/login.html',
      controller: 'loginController'
      })
    .when('/dashboard',{
      templateUrl: '/partials/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/user/:id',{
      templateUrl: '/partials/user.html',
      controller: 'userController'
    })
    .otherwise({
      redirectTo: '/login'
    });
});
