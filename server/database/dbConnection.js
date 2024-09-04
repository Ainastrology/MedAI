import mongoose from "mongoose";

export const dbConnection = () => {
    const connection = mongoose.connect(process.env.MONGO_URI, {
        dbName: "MedicAid"
    }).then(()=>{
            console.log(`Database Connection Succesful with port: ${process.env.PORT}`);
    }).catch((err)=>{
            console.log(`Some Error occurred while connecting to Database: ${err}`);
    })
}