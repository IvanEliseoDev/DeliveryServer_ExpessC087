import { customerModel } from "../../model/customers/CustomerModel.js"

export const customerController = []
customerController.findCustomers = async(req, res) => {
    try{
        const Customers = await customerModel.find(); 
        return res.status(200).json({message: "Customer find success", data: Customers})
    }catch(error){
        console.log("Server Error: ", error)
        return res.status(500).json({message: "Internal Server Error - Check Server Logs"})
    }
}
customerController.updateCustomer = async(req, res) => {
    try{
        const {name, lastName, phone, adress} = req.body
        if(name.trim().length < 5 ) return res.status(400).json({message: "Name is Invalid, name is not Null and min 5 characters"})
        if(lastName.trim().length<5)return res.status(400).json({message: "LastName is Invalid - LastName is not null and min 5 characters"})
        if(phone.trim().length<5)return res.status(400).json({message: "phone is Invalid - phone is not null and min 5 characters"})
        const updatedCustomer = await customerModel.findByIdAndUpdate(req.params.id, {
          name,
          lastName,
          phone,
          adress
        }, 
        {new: true})
        if (!updatedCustomer) return res.status(404).json({ message: "Customer Not Found" });
        return res.status(201).json({message: "Customer Updated Success", updatedCustomer})
    }catch(error){
         console.log("Server Error: ", error)
        return res.status(500).json({message: "Internal Server Error - Check Server Logs"})
    }
}
customerController.deleteCustomer = async(req, res) =>{
    try{
        const isDelete = await customerModel.findByIdAndDelete(req.params.id)
        if(!isDelete) return res.status(404).json({message: "Customer not Found"})
        return res.status(201).json({message:"Customer has delete success"})
    }catch(error){
        console.log("Server Error: ", error)
        return res.status(500).json({message: "Internal Server Error - Check Server Logs"})
    }
}
