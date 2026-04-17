import { app } from "./app/App.js"

const main = async() => {
   try {
        app.listen(4000, () => {
            console.log("Server running on port 4000");
        });
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

main()