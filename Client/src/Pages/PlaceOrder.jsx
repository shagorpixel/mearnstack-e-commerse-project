import { useContext, useState } from "react"
import CartTotal from "../Components/Ui/CartTotal";
import { MainContext } from "../Context/MainContext";
import { toast } from "react-toastify";
import axios from "axios";


const PlaceOrder = () => {
    const [method,setMethod] = useState('COD');
    const {navigate,backendUrl,token,cartItems,setCartItems,getTotalAmount,delivaryFee,products} = useContext(MainContext);

    const [formData,setFormData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      address:"",
      city:"",
      state:"",
      zipCode:"",
      country:"",
      phone:"",
    });
    const changeHandle = (e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setFormData(prev=>({...prev,[name]:value}))
    }
    const onsubmitHandeler = async(e)=>{
      if(!token){
        toast.error('Not Authorized Login Please')
      }
      e.preventDefault();
      try{
        let orderItems = [];
        for(const items in cartItems){
          for(const item in cartItems[items]){
            if(cartItems[items][item]>0){
              const itemInfo = structuredClone(products.find(product=>product._id == items));
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
        let orderData = {
          address:formData,
          items:orderItems,
          amount:getTotalAmount() + delivaryFee,
        }
        switch(method){
          case "COD":
            const response = await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}});
            if(response.data.success){
              setCartItems({});
              navigate('/orders')
            }else{
              console.log(response.message);
              toast.error(response.message);
            }
            break;
          default:
            break
        }
      }catch(error){
        console.log(error.message);
        toast.error(error.message)
      }
    }
  return (
    <form onSubmit={onsubmitHandeler} className=" flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t customContainer">
      {/* --------------- left side ------------------ */}
      <div className=" flex flex-col gap-4 w-full sm:max-w-[450px]">
        <h2 className=" text-xl sm:text-2xl my-3">
          Delivary Informations
        </h2>
        <div className=" flex gap-3 ">
          <input
            name="firstName" onChange={changeHandle} value={formData.firstName} required  className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
           name="lastName" onChange={changeHandle} value={formData.lastName}  required className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
         name="email" onChange={changeHandle} value={formData.email} required className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
         name="address" onChange={changeHandle} value={formData.address} required  className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Address"
        />

        <div className=" flex gap-3 ">
          <input
           name="city" onChange={changeHandle} value={formData.city} required className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
           name="state" onChange={changeHandle} value={formData.state} required className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className=" flex gap-3 ">
          <input
           name="zipCode" onChange={changeHandle} value={formData.zipCode} required className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zip Code"
          />
          <input
           name="country" onChange={changeHandle} value={formData.country} required className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
         name="phone" onChange={changeHandle} value={formData.phone} required className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* --------------- Right Siderber ---------------------- */}
      <div className=" mt-8 ">
        <div className=" mt-8 min-w-80">
           <CartTotal />
        </div>
        <div className=" mt-12">
          <h2 className=" text-lg font-semi">Payment Method</h2>
          {/* payment mehtod selection */}
          <div className=" flex gap-3 flex-col lg:flex-row">
            <div className=" flex items-center gap-3 border border-gray-200  p-2 px-3 cursor-pointer">
              <div onClick={()=>setMethod('stripe')} className=" flex items-center gap-3 border border-gray-200  p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method ==="stripe" && 'bg-green-500'} `}></p>
                <img className=" h-5 mx-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" alt="" />
              </div>
              <div onClick={()=>setMethod('razorpay')} className=" flex items-center gap-3 border-gray-200 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method ==="razorpay" && 'bg-green-500'} `}></p>
                <img className=" h-5 mx-4" src='https://cdn.iconscout.com/icon/free/png-256/free-razorpay-logo-icon-svg-download-png-1399875.png?f=webp' alt="" />
              </div>
              <div onClick={()=>setMethod('COD')} className=" flex items-center gap-3 border-gray-200 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method ==="COD" && 'bg-green-500'}`}></p>
                <p className=" text-gray-500 text-sm font-medium mx-4">Cash On Delivary</p>
              </div>
            </div>
          </div>
          <div className=" w-full text-end mt-8">
                <button type="submit" className=" bg-black text-white px-16 py-3 text-sm rounded">PLACE ORDER</button>
            </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;