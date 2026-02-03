const express=require("express")
const router=express.Router()


const{addFood,getFood, updateFood}=require("../Controller/foodController")
router.post("/add",addFood)
router.get("/get",getFood)
router.put("/update/:id",updateFood)

module.exports=router