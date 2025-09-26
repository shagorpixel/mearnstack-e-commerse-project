import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../Context/MainContext";
import { MdDeleteOutline } from "react-icons/md";
import CartTotal from "../Components/Ui/CartTotal";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { products, cartItems, currency,updataeQuantity} = useContext(MainContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  console.log(cartData);
  return (
    <div className=" border-t border-gray-100 customContainer">
      <h2 className="text-2xl mb-3">Your Cart</h2>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product.id == item.id);

          return (
            <div key={index} className=" py-4 border-t border-gray-100 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img
                  className=" w-16 sm:w-20"
                  src={productData.images[0]}
                  alt=""
                />
                <div>
                  <p className=" text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className=" flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className=" px-2 sm:px-3 sm:py-1 border border-gray-100 saturate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input onChange={(e)=>e.target.value==0 || e.target.value==''?null:updataeQuantity(item.id,item.size,Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className=" border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 border-gray-100 rounded" />
              <button className=" text-2xl font-semibold ">
                <MdDeleteOutline onClick={()=>updataeQuantity(item.id,item.size,0)} className="cursor-pointer" />
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <div className=' flex justify-end my-20'>
                <div className=' w-full sm:w-[450px]'>
                    <CartTotal />
                    <div className=' w-full text-end'>
                        <button onClick={()=>navigate('/place-order')} className="bg-black text-white text-sm my-8 px-8 py-3 rounded cursor-pointers cursor-pointer">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Cart;
