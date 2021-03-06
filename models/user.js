const mongoose = require ('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, require: true, minlength:3},
  avatar: {type: String, required: false},
  posts: [{type: mongoose.Types.ObjectId, required: true, ref: 'Post'}]

});

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('user', userSchema)


