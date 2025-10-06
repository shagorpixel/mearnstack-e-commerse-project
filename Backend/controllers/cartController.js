import userModel from "../models/userModel.js";

const addToCart = async(req,res)=>{
    try{
        
        const {userId,itemId,size} = req.body;
        const userData = await userModel.findById(userId);
        
        const cartData = userData.cartData;
        
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        await userModel.findByIdAndUpdate(userId,{cartData});
        console.log("SuccessFully Added");
        res.json({
            success:true,
            message:"Add Added To Cart"
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }

};

const updateCart = async(req,res)=>{
    console.log(req.body);
    try{
        const {userId,itemId,size,quentity} = req.body;
        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;
        cartData[itemId][size] = quentity
        await userModel.findByIdAndUpdate(userId,{cartData});
        res.json({
            success:true,
            message:"Add Added To Cart"
        })

    }catch(error){

    }
}
const getUserCart = async(req,res)=>{
    try{
        const {userId} = req.body;
        const userData = await userModel.findById(userId);
        const cartData = await userData.cartData;
        res.json({
            success:true,
            cartData
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}
export {addToCart,updateCart,getUserCart};