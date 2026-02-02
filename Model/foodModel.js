const mongoose=require("mongoose")

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
        minLength:[2,"min lenght shuld be 2"]
    },
     price:{
        type:Number,
        required:[true,"age is required"],
        trim:true,
        minLength:[1,"min lenght shuld be 1"]
    },
     category:{
        type:String,
        required:[true,"address is required"],
        trim:true,
        minLength:[2,"min lenght shuld be 5"]
    },

}
,{
    timestamps:true
})
const Food= mongoose.model("food",foodSchema)
module.exports=Food

