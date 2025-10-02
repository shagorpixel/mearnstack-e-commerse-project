import express from 'express';
import { addProduct, listProducts, removeProduct, singleProducts } from '../controllers/productController.js';
import upload from '../Middleware/multer.js';
import adminAuth from '../Middleware/adminAuth.js';
const productRoute = express.Router();

productRoute.post('/add',adminAuth,upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]),addProduct);
productRoute.delete('/remove/:id',adminAuth,removeProduct);
productRoute.get('/single/:id',singleProducts);
productRoute.get('/list',listProducts);

export default productRoute;