import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing Order For COD
const placeOrder = async (req, res) => {

    try {
        const { userId, address, items, amount } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} });
        res.json({
            success: true,
            message: "Order Placed"
        })
    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })
    }
}
// All Orders For Admin Panel
const allOrders = async (req, res) => {
    try{
        const orders = await orderModel.find({});
        res.json({
            success:true,
            orders
        });
    }catch(error){
        console.log(error.message);
        res.json({
            success:false,
            message:error.message
        })
    }
}
//User order data For Frontend
const userOrders = async (req, res) => {
    try {
        const {userId} = req.body;
        const orders = await orderModel.find({ userId });
        res.json({success: true,orders})
    }catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}
// update Order status
const updateOrderStatus = async(req, res) => {
    console.log(req.body)
    try{
       const {orderId,status} = req.body;
      await orderModel.findByIdAndUpdate(orderId,{status});
       res.json({
        success:true,
        message:"Order Updated"
       })
    }catch(error){
        console.log(error.message);
        res.json({
            success:false,
            message:error.message
        })
    }
}
export { placeOrder, allOrders, userOrders, updateOrderStatus };