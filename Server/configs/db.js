import mongoose from "mongoose";

const connectDB = async()=> { 
    mongoose.connect(
    process.env.MONGODB_URL
    , {dbName : "Vaani_DataBase"}
).then(()=>console.log("mongo is connected")).catch(()=>console.log("error in mongo connection"));
}

export default connectDB