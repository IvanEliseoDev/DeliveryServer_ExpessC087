import mongoose from "mongoose"
mongoose.connect()
const connection = mongoose.connection
connection.once("open", () => {
    console.log("DB IS CONNECTED")
})
connection.on("disconnected", () => {
    console.log("DB is disconnecteds")
})
connection.on("error", (error) => {
    console.log("ERROR found: ", error)
})