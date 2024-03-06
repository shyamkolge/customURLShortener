import dotenv from 'dotenv'
import { app } from './app.js'
import {connectWithMogoDB} from './db/index.js'

dotenv.config({
    path: "./env"
})


const PORT = process.env.PORT;


connectWithMogoDB()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server Started..! : " ,PORT );
    })  
})
.catch((error)=>{
     console.log("Connection Failed with DB :: ", error);
})