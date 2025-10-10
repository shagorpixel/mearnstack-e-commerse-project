import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  const statusHandeler = async(event,orderId)=>{
     
      try{
       const response =  await axios.post(backendUrl+'/api/order/status',{orderId,status:event.target.value},{headers:{token}});
        if(response.data.success){
          fetchAllOrders();
        }else{
          console.log(response.message);
          toast.error(response.message)
        }
        
      }catch(error){
        console.log(error.message);
        toast.error(error.message)
      }
  }
  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order) => (
          <div className=" grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-8 text-xs sm:text-sm text-gray-700" key={order._id}>
            <img className=" w-12" src={assets.parcel_icon} alt="" />
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className=" py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className=" py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>,
                      </p>
                    );
                  }
                })}
              </div>
              <p className=" mt-3 mb-2 font-semibold ">{order.address.firstName + " " + order.address.lastName}</p>

              <p>
                {order.address.address +
                  ", " +
                  order.address.city +
                  ", " +
                  order.address.state +
                  ", " +
                  order.address.country +
                  ", " +
                  order.address.zipCode}
              </p>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p  className=" text-sm sm:text-base" >Items:{order.items.length}</p>
              <p className=" mt-3">Method:{order.paymentMethod}</p>
              <p>Payment:{order.payment?"Done":"Pending"}</p>
              <p>Date:{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className=" text-sm sm:text-base" >{currency}{order.amount}</p>
            <select onChange={(event)=>statusHandeler(event,order._id)} value={order.status} className=" p-2 font-semibold">
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out For Delivary">Out For Delivary</option>
                  <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
