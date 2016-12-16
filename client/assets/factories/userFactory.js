app.factory('userFactory', ['$http', function($http){
  var users = [],
  user = {};

  function UserFactory(){
    this.index = function(callback){
      $http.get('/users').then(function(returned_data){
        if(typeof(callback)=='function'){
          users = returned_data.data;
          callback(users);
        }
      });
    };
    this.show = function(id, callback){
      $http.get('/users/'+id).then(function(returned_data){
        if(typeof(callback)=='function'){
          user = returned_data.data;
          callback(user);
        }
      })
    };
    this.create = function(newUser, callback){
      $http.post('/users',newUser).then(function(returned_data){
        if(typeof(callback)=='function'){
            user = returned_data.data;
            callback(user);
        }
      });
    };
  }
  return new UserFactory();
}])
