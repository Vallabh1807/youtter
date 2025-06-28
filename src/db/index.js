import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected on port ${process.env.PORT}!! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB conection error", error);
        process.exit(1)
    }
}
export default connectDB