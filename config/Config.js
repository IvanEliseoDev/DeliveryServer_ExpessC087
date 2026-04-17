import dotenv from "dotenv"

dotenv.config()
export const config = {
    db:{
        URI:process.DB_URI
    }
}