const Food=require("../Model/foodModel")

//adding food

const addFood=async(req,res)=>{
    //destructurring

    try{
    const{name,price,category}=req.body;
    const adding=await Food.create({
            name,price,category
        })
    res.status(200).json({
        success:true,
        message:"Food added",
        data:adding
    })

    }catch(err){
        res.status(400).json({
            success:false,
            message:"food declined"
        })
    }    
}


module.exports={addFood}