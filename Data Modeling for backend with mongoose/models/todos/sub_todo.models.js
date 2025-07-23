import mongoose from "mongoose"

const subTodosSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    complete : {
        type : Boolean,
        default : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps:true})

export const subTodos = mongoose.model("subTodos",subTodosSchema)