import mongoose from "mongoose";

const userScema = new mongoose.Schema(
    {
        _id : {type: String , required : true},
        email : {type: String , required : true},
        full_name : {type: String , required : true},
        username : {type: String , unique : true},
        bio : {type: String , default : 'Hey there! I am using Vaani'},
        profile_picture : {type: String , default : ''},
        cover_picture : {type: String , default : ''},
        location : {type: String , default : ''},
        followers : [{type: String , ref : 'UserModel'}],
        following : [{type: String , ref : 'UserModel'}],
        connections : [{type: String , ref : 'UserModel'}],
    }   , {timestamps : true , minimize : false}   //this will autoatically create a dat time on which data is created 
)

const User = mongoose.model("user" , userScema)

export default User