console.log("User Controller");

var mongoose = require('mongoose'),
User = mongoose.model('User');
Todo = mongoose.model('Todo')


function UserController(){
  this.index = function(req,res){
    User.find({}).populate('bucketlist').exec(function(err, results){
      if(err){
        console.log("error populating bucket list");
      } else {
        console.log("found all users and populated list");
        res.json(results)
      }
    })
  };
  this.create = function(req,res){
    console.log(req.body.name);

    User.findOne({ name:req.body.name }, function(err1, exists){
      if(err1){
        console.log("went wrong while looking for existing user");
      } else {
        if(exists == null){
          console.log(req.body.name);
          var user = new User({name: req.body.name})
          user.save(function(err2){
            if(err2){
              console.log("didn't create a new user");
              res.json(false)
            } else {
              console.log("new user saved");
              res.json(user)
            }
          })
        } else {
            console.log("user exists");
            res.json(exists)
        }
      }
    })
  };
  this.update = function(req,res){
    //need to append but should append in todo controller
  };
  this.delete = function(req,res){
    // dont need to delete
  };
  this.show = function(req,res){
    User.findOne({_id:req.params.id}).populate('bucketlist').exec(function(err, results){
      if(err){
        console.log("couldnt populate user bucketlist");
      } else {
        console.log("populated list");
        Todo.populate(results, {path: 'bucketlist._createdBy', model: User}, function(err2, data){
          if(err2){
            console.log("issue populating bucketlist creator");
          } else {
            console.log("populated and connected");
            res.json(data)
          }
        })
      }
    });
  };
}

module.exports = new UserController();
