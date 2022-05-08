const mongoose= require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
  userName: ObjectId,
  email: String,
  phone: String,
  password: String
});


module.exports= User = mongoose.model('User', user);