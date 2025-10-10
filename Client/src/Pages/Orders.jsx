import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../Context/MainContext";
import { toast } from "react-toastify";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(MainContext);
  const [orderData, setOrderData] = useState([]);
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrderData(response.data.orders);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className=" border-t border-gray-200 pt-16 customContainer">
      <h2 className=" text-2xl font-semibold mb-8">My Orders</h2>
      <div className=" flex flex-col gap-8">
        {orderData.map((orderItem) => (
          <div className=" bg-gray-50 p-4 sm:p-9 rounded-2xl flex gap-4 flex-col md:flex-row shadow">
            <div className="  md:flex-row justify-between ">
              <p className=" text-gray-500 text-xl font-bold">{orderItem.status} </p>
              <h2 className=" font-semibold text-gray-500">#{orderItem._id}</h2>
              <p className=" text-gray-500" ><span className=" font-semibold ">Payment Method:</span>{orderItem.paymentMethod} </p>
              <p className="text-gray-500"><span className=" font-semibold ">Payment Status:</span>{orderItem.payment ? "Paid" : "Due"} </p>
              <p className=" text-gray-600 font-semibold">
                Amount: {currency}
                {orderItem.amount}
              </p>
              <p className=" text-gray-500"> {new Date(orderItem.date).toDateString()}</p>
            </div>
            <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2"> 
              {orderItem.items.map((item) => (
                <div
                  key={item._id}
                  className=" py-4 border-t border-gray-200 bg-white shadow p-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded "
                >
                  <div className="flex items-start gap-6 text-sm">
                    <img
                      className=" w-16 sm:w-20"
                      src={item.images[0]}
                      alt=""
                    />
                    <div>
                      <p className=" text-base font-medium">{item.name}</p>
                      <div className=" flex items-center gap-3 mt-2 text-base text-gray-700">
                        <p className=" text-lg">
                          {currency}
                          {item.price}
                        </p>
                        <p className=" text-lg">Quantity: {item.quantity}</p>
                        <p className=" text-lg">{item.size}</p>
                      </div>
                      <p className=" mt-2">
                        Date:{" "}
                        <span className=" text-gray-400 ">25, Jul, 2025</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
