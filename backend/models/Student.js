const mongoose=require('mongoose');

var studentschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    class:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },



})
module.exports=mongoose.model('Student',studentschema);