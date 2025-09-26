import React, { useContext } from 'react';
import { MainContext } from '../Context/MainContext';

const Orders = () => {
    const {products,currency} = useContext(MainContext);
    return (
        <div className=' border-t border-gray-200 pt-16 customContainer'>
            <h2 className=' text-2xl font-semibold'>
               My Orders
            </h2>
            <div>
                {
                    products.slice(0,3).map((item,index)=>(
                        <div key={index} className=' py-4 border-t border-gray-200 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <div className='flex items-start gap-6 text-sm'>
                                <img className=' w-16 sm:w-20' src={item.images[0]} alt="" />
                                <div>
                                    <p className=' text-base font-medium'>{item.name}</p>
                                    <div className=' flex items-center gap-3 mt-2 text-base text-gray-700'>
                                        <p className=' text-lg'>{currency}{item.price}</p>
                                        <p className=' text-lg'>Quantity: 1</p>
                                        <p className=' text-lg'>Size: M</p>
                                    </div>
                                    <p className=' mt-2'>Date: <span className=' text-gray-400 '>25, Jul, 2025</span></p>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex justify-between'>
                                <div className=' flex items-center gap-2'>
                                    <p className=' min-w-2 h-2 rounded-full bg-green-500 '></p>
                                    <p className=' text-sm md:text-base'>Ready To Ship</p>
                                </div>
                                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Orders;