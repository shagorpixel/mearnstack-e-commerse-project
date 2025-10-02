import cloudinary from 'cloudinary';
import productModel from '../models/productModel.js';
const addProduct = async(req,res)=>{
    try{
        const {name,description,price,category,subCategory,sizes,bestSeller} = req.body;
        const requirFields = {name,description,price,category,subCategory};
        const objectKeys = Object.keys(requirFields);
        for(let i = 0;i<objectKeys.length;i++){
            if(!requirFields[objectKeys[i]]){
               return res.json({
                    success:false,
                    message:`${objectKeys[i]} is required`
                })
            }
        }

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]
       const images = [image1,image2,image3,image4].filter(item=>item !==undefined);
       
       const imagesUrl = await Promise.all(images.map(async item=>{
        let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"});
        return result.secure_url
       }))
       const product = {
        name,
        description,
        price:Number(price),
        images:imagesUrl,
        category,
        subCategory,
        sizes:JSON.parse(sizes),
        date:Date.now(),
        bestSeller: bestSeller==="true"?true:false
       }
       const newProduct = new productModel(product);
       await newProduct.save();
       res.json({
        success:true,
        message:"Product Added"
       })
    }catch(err){
        
        res.json({success:false,message:err.message})
    }
   
}
const removeProduct = async(req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Product Deleted Successfully"
        })
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}
const listProducts = async(req,res)=>{
    try{
        const products = await productModel.find({});
        res.json({
            success:true,
            products:products
        });
    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}
const singleProducts = async(req,res)=>{
    try{
        const product = await productModel.findById(req.params.id);
        res.json({
            success:true,
            product:product
        })
    }catch(err){
        res.json({
            success:true,
            error:err.message
        })
    }
}
export {addProduct,removeProduct,listProducts,singleProducts}