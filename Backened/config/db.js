import mongoose from "mongoose";
export const connectDb=async()=>{
    await mongoose.connect('mongodb+srv://amanpanwar123op:9045145634@cluster0.ni6ue.mongodb.net/Zestyzilla').then(()=>{console.log("database is connnected")});
}