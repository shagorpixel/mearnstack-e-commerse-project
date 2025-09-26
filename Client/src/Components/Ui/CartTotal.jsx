import React, { useContext } from "react";
import { MainContext } from "../../Context/MainContext";

const CartTotal = () => {
  const { delivaryFee, currency, getTotalAmount } = useContext(MainContext);
  return (
    <div className=" w-full">
      <h2 className=" text-2xl">Cart Totals</h2>
      <div className=" flex flex-col gap-2 mt-2 text-sm">
        <div className=" flex justify-between ">
          <p>Sub Total</p>
          <p>
            {currency} {getTotalAmount()}
          </p>
        </div>
        <hr className=" border border-gray-200" />
        <div className=" flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {getTotalAmount() === 0 ? 0 :delivaryFee}
          </p>
        </div>
         <hr className=" border border-gray-200" />
        <div className=" flex justify-between ">
          <b>Total</b>
          <b>
            {currency} {getTotalAmount() === 0 ?0 : getTotalAmount() + delivaryFee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
