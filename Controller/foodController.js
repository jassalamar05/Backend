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


const  getFood=async(req,res)=>{
    try{
        const getting=await Food.find()
        res.status(200).json({
        success:true,
        message:"Food list here",
        data:getting
        })
    }catch(err){
        res.status(400).json({
            success:false,
            message:"food not getting"
        })
    }
}

const updateFood=async(req,res)=>{
    try{
        const {name,price,category}=req.body;
        console.log(req.body)

    const update=await Food.findByIdAndUpdate(
      req.params.id,                 // ✔ correct param
      { name, price, category },      // ✔ correct update object`  
      { new: true,
     runValidators: true })


        if(!update){
            return res.status(404).json({
                success:false,
                message:"food update donot exists"
            })
        }

        res.status(200).json({
            success:true,
            messgae:"food is updateed",
            data:update
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"food declined"
        })
    }
}

module.exports={addFood,getFood,updateFood}