console.log("Todo Controller");

var mongoose = require('mongoose'),
Todo = mongoose.model('Todo');
User = mongoose.model('User')

function TodoController(){
  this.index = function(req,res){
    Todo.find({}).populate('_createdBy').exec(function(err,results){
      if(err){
        console.log("issue populating todo list with users");
        res.json(false)
      } else {
        console.log("successfully populated todos");
        res.json(results)
      }
    })
  };

  this.create = function(req,res){
    console.log(req.body);
    var todo = new Todo({title:req.body.title,description: req.body.description, _createdBy: req.body.createdBy._id})
    todo.save(function(err1){
      if(err1){
        console.log("couldnt create new to do");
        res.json(false)
      } else {
        var userA = req.body.createdBy;
        User.findOne({_id: userA._id}, function(errA, first){
          if (errA) {
            console.log("issue at error A");
          } else {
          first.bucketlist.push(todo);
          first.save(function(err2){
            if(err2){
              console.log("couldnt add to creators bucket list");
              res.json(false)
            } else {
              if(req.body.tag){
                var userB = req.body.tag;
                User.findOne({_id:userB._id}, function(errB, second){
                  if(errB){
                    console.log("issue with error B");
                  } else {
                    second.bucketlist.push(todo);
                    second.save(function(err3){
                      if(err3){
                        console.log("couldnt add to tagged user's bucket list");
                        res.json(false)
                      } else {
                        console.log("completed associations");
                        res.json(todo)
                      }
                    })
                  }
                })
              }
              res.json(todo)
          }
        })
      }
    })
      }
    })
  };
  this.update = function(req,res){

    Todo.findOne({_id:req.params.id}, function(err1, result){
      if(err1){
        console.log("error finding todo");
      } else {
        result._status = !(result._status)
        result.save(function(err){
          if(err){

            console.log("couldnt save");
          } else {
            console.log("saved todo status");
            res.json(result)
          }
        })
      }
    })
  };
  this.delete = function(req,res){
    //dont need to delete
  };
  this.show = function(req,res){
    //dont need
  };
}

module.exports = new TodoController();
