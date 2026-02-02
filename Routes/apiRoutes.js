const express=require("express")
const router=express.Router()


const{addFood}=require("../Controller/foodController")
router.post("/add",addFood)

module.exports=router