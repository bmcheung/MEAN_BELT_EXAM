console.log('User Model');
var mongoose = require('mongoose')
var Schema = mongoose.Schema


UserSchema = new mongoose.Schema({
  name: {type:String, required:true},
  bucketlist: [{type: Schema.Types.ObjectId, ref: 'Todo'}]
},
{
  timestamps:true
}),
User = mongoose.model('User', UserSchema);
