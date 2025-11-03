import { createContext, useEffect, useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

import { useLocation, useNavigate } from "react-router-dom";
export const MainContext = createContext();

const MainContextProvider = ({children})=>{
  
  const navigate = useNavigate();
    const [products,setProducts] = useState([]);
    const [filterProducts,setFilterProducts] = useState([]);
    const [category,setCategory] = useState("All");
    const [search,setSeacrh] = useState("");
    const currency = "$";
    const backendUrl = "https://mearnstack-e-commerse-server.vercel.app";
    const [cartItems,setCartItems] = useState({});
    const delivaryFee = 50;
    const [token,setToken] = useState('');

    const addToCart = async(itemId,size)=>{
      const cartData = structuredClone(cartItems);
      
      if(!size){
        toast.error("Please Select Product Size");
        return;
      }
      if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId][size]+=1;
        }else{
          cartData[itemId][size] = 1
        }
      }else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1
      }
      setCartItems(cartData);
     if(token){
      try{
         await axios.post(backendUrl+'/api/cart/add',{itemId,size},{headers:{token}})
        
      }catch(error){
        console.log(error.message);
        toast.error(error.message)
      }
     }
     
    }
    const getCartCount =  ()=>{
      let totalCount = 0;
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item]>0)
          totalCount += cartItems[items][item]
        }
      }
      return totalCount;
    }

    const getTotalAmount = ()=>{
      let totalAmount = 0;
      for(const items in cartItems){
        const productinfo = products.find(product=>product._id == items);
        for(const item in cartItems[items]){
          try{
            if(cartItems[items][item]>0){
              totalAmount += cartItems[items][item] * productinfo.price
            }

          }catch(err){
            console.log(err.message);
            return 0;
          }
        }
      }
      return totalAmount;
    }
    const getUserCart = async(token)=>{
      try{
        const response = await axios.post(backendUrl+'/api/cart/get',{},{headers:{token}});
        if(response.data.success){
          setCartItems(response.data.cartData);
        }
      }catch(error){
          console.log(error.message);
          toast(error.message);
        }
    }
    const updataeQuantity = async(itemId,size,quantity)=>{
      let cartData =  structuredClone(cartItems);
      cartData[itemId][size] = quantity;
      setCartItems(cartData);
      if(token){
        try{
          await axios.post(backendUrl+'/api/cart/update',{itemId,size,quentity:quantity},{headers:{token}});
        }catch(error){
          toast.error(error.message);
          console.log(error.message);
        }
      }
    }
    const fetchProduct = async()=>{
      try{
        const response = await axios.get(backendUrl+'/api/product/list');
        if(response.data.success){
          setProducts(response.data.products)
        }else{
          toast.error(response.data.message)
        }
      }catch(error){
        toast.error(error.message)
      }
    }
    
    const finterItems = ()=>{
         const filterCategory = category === "All" ? products : products.filter(product => product.category === category);
  const filterSearch = !search 
    ? filterCategory 
    : filterCategory.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) || 
        product.description.toLowerCase().includes(search.toLowerCase())
      );

  setFilterProducts(filterSearch);
    }
    const clearFilters = ()=>{
      setSeacrh("");
      setCategory("All")
    }
    useEffect(()=>{
      if(!token && localStorage.getItem('token')){
        setToken(localStorage.getItem('token'));
        getUserCart(localStorage.getItem('token'))
      }
    },[])
    useEffect(()=>{
fetchProduct();
    },[])

    const value = {
    products,
    setProducts,
    filterProducts,
    setFilterProducts,
    category,
    setCategory,
    search,
    setSeacrh,
    finterItems,
    clearFilters,
    currency,
    addToCart,
    getCartCount,
    cartItems,
    setCartItems,
    updataeQuantity,
    delivaryFee,
    getTotalAmount,
    backendUrl,
    token,setToken,navigate
    }
    return <MainContext.Provider value={value} >
      <ToastContainer />
        {children}
    </MainContext.Provider>
}
export default MainContextProvider;