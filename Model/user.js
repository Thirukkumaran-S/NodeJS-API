const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    userName:String,
    age:Number
});

module.exports=mongoose.model('MyUser',userSchema);