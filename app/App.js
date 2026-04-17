
import express from "express"
import { routerCustomer } from "../src/routes/customers/CustomerRoute.js"

export const app =  express()
app.use(express.json())
app.use("/api/v1/Customer", routerCustomer)
