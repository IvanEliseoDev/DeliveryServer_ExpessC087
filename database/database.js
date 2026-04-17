import mongoose  from "mongoose";
import { config } from "../config/Config"
 mongoose.connect(config.db.DB_URI)
const connection = mongoose.connection
connection.once("open", () => {
    console.log("DB IS CONNECTED")
})
connection.on("disconnected", () => {
    console.log("DB is disconnected")
})
connection.on("error", (error) => {
    console.log("ERROR found: ", error)
})