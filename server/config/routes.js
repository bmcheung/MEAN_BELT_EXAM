// var mongoose = require('mongoose'),
var path = require('path');
var users = require(path.join(__dirname, './../controllers/users.js')),
todos = require(path.join(__dirname, './../controllers/todos.js'));

module.exports = function(app){
  // show all users
  app.get('/users', users.index);
  //show specific user
  app.get('/users/:id', users.show);
  // create user
  app.post('/users', users.create);


  // show all do dos
  app.get('/todos',todos.index);
  // create new to do
  app.post('/todos',todos.create);
  // update status on to do
  app.put('/todos/:id', todos.update)


}
