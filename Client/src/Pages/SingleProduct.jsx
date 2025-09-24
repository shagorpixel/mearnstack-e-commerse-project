import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../Context/MainContext";

const SingleProduct = () => {
    const {id} = useParams();
    const {products} = useContext(MainContext)
    const product = products.filter(product=>product.id == id)
    console.log(product)
    return (
        <div className=' min-h-screen'>
            <h2>Single Product</h2>
        </div>
    );
};

export default SingleProduct;