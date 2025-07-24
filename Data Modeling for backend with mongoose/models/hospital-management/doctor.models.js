import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    qualification : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum : ["Male","Female","Others"],
        required : true
    },
    worksInHospital : {
        type : String,
        required : true
    },
    expreieneceInYears : {
        type : Number,
        default : 0
    }
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)