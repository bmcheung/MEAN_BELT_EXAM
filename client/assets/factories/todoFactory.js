app.factory('todoFactory', ['$http', function($http){
  var todos = [],
  todo = {};

  function TodoFactory(){
    this.index = function(callback){
      $http.get('/todos').then(function(returned_data){
        if(typeof(callback)=='function'){
          todos = returned_data.data;
          callback(todos);
        }
      });
    };
    this.create = function(newTodo, callback){
      $http.post('/todos',newTodo).then(function(returned_data){
        if(typeof(callback)=='function'){
            todo = returned_data.data;
            callback(todo);
        }
      });
    };
    this.update = function(id, callback){
      $http.put('/todos/'+id).then(function(returned_data){
        if(typeof(callback)=='function'){
            todo = returned_data.data;
            callback(todo);
        }
      });
    };
  }
  return new TodoFactory();
}])
