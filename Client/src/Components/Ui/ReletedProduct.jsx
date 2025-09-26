import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../Context/MainContext';
import ProductCart from './ProductCart';

const ReletedProduct = ({category}) => {
    const {products} = useContext(MainContext);
    const [reletedProducts,setReletedProducts] = useState([]);
    useEffect(()=>{
        let productCopy = products.slice();
        productCopy = products.filter(item=>item.category === category);
        setReletedProducts(productCopy);
    },[products])
   
    return (
        <div className=' my-16'>
                <h2 className=' text-2xl font-semibold text-center my-8'>Related Products</h2>
            <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    reletedProducts.map((item,index)=><ProductCart product={item} key={index} />)
                }
            </div>
        </div>
    );
};

export default ReletedProduct;