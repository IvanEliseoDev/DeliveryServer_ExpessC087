import { model, Schema } from "mongoose";


const customerSchema =  new Schema({
    name: {
        type: String
    },
    lastName: {
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phone:{
        type:String
    },
    addres:{
        type:String
    },
    phone:{
        type: String
    },
    isVerified:{
        type: Boolean
    },
    loginAttemps:{
        type:Number
    },
    tomeOut:{
        type:String
    }
})

export const customerModel = model("Customer", customerSchema)
