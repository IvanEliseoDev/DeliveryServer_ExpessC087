import { app } from "./app/App.js"

const main = async() => {
    app.listen(4000)
    console.log("Server Run in Port: 4000")
}

main()