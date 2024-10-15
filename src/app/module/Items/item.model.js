import { model, Schema } from "mongoose";


const itemSchema =new Schema({

    name:{
        type:String,
        required :true
    },
    price:{
        type:Number,
        required :true
    },
    img:{
        type:String,
        required :true
    }


},{
    timestamps:true
})

const Item = model("item",itemSchema)

export default Item