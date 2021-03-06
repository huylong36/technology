const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    fullname:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,  
    },
    address:{
        type:String,
    }
    
})
module.exports = mongoose.model('User' , UserSchema) //users : tên của table trong database