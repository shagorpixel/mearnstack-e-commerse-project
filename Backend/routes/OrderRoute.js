import express from 'express';
import { allOrders, placeOrder, updateOrderStatus, userOrders } from '../controllers/orderController.js';
import adminAuth from '../Middleware/adminAuth.js';
import authUser from '../Middleware/authUser.js';
const orderRouter = express.Router();
// Admin  Features
orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateOrderStatus);

// payment Features
orderRouter.post('/place',authUser,placeOrder);

// user features
orderRouter.post('/userorders',authUser,userOrders);
export default orderRouter;