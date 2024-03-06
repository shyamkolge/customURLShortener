import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectWithMogoDB = async ()=>{
  

  try {
      const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
      
  } catch (error) {
     console.log("DB Connection Failed :: " , error);
  }

}

export {connectWithMogoDB}