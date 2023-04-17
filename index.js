import mongoose from "mongoose"
import app from "./app.js"

(async ()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/gitsetup")
        console.log("DB CONNECTED");
        const onListening = () => {
            console.log("App is listening on port 5000.");
        }
        app.listen(5000, onListening)
    } catch (error) {
        console.log("ERROR while connecting to DB.");
        throw error;
    }
})()