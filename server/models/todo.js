console.log('Todo Model');
var mongoose = require('mongoose')
var Schema = mongoose.Schema


TodoSchema = new mongoose.Schema({
  title: {type:String, required:true},
  description: {type:String, required:true},
  _createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
  _status: {type: Boolean, default: false}
},
{
  timestamps:true
}),
Todo = mongoose.model('Todo', TodoSchema);
