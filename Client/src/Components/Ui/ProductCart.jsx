import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const ProductCart = ({product}) => {
    return (
        <Link to={`/product/${product._id}`}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  <p className=' text-xs text-gray'>{product.description.substring(0,65)}...</p>
                  <p className="text-gray-600 mb-2 font-medium">${product.price}</p>
                  <Rating rating={product.rating} />
                  
                </div>
              </Link>
    );
};

export default ProductCart;