import express from "express"
import { customerController } from "../../controllers/customers/CustomerController.js";
export const routerCustomer = express.Router();
routerCustomer.route("/").get(customerController.findCustomers)
routerCustomer.route("/:id").put(customerController.updateCustomer).delete(customerController.deleteCustomer)