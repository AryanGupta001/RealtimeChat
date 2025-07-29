import mongoose from "mongoose";

export const connectDB =async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        if(conn){
            console.log("done");
        }
    }
    catch(e){
        console.log(e);
    }
}