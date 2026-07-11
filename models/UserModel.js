import mongoose from "mongoose"


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false,
        default:'Jl. Merdeka 123'
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    dateOfBirth:{
        type:String,
        required:false,
        default:'01-01-1999'
    }
})

const User = mongoose.model('User', UserSchema)
export default User