import mongoose from "mongoose"

const categoryScheam = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
},{timestamps:true})

export const Category = mongoose.model("Category",categoryScheam)