import { model, Schema } from "mongoose";

const userSchema = new Schema({


    name : {
        type:String,
        required:true
    },

    phoneNumber : {
        type:Number,
        required:true
    },

    email : {
        type:String,
        required:true,
        unique :true
    },

    password : {
        type:String,
        required:true
    },
     role:{
        type:String,
        enum : ["Admin", "Customer"],
        default:"Customer"
     }

},
{
timestamps:true
})


const User = model("user",userSchema)


export default User