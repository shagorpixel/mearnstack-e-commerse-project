import { createContext, useEffect, useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const MainContext = createContext();

const MainContextProvider = ({children})=>{
    
  const navigate = useNavigate();
    const [products,setProducts] = useState([]);
    const [filterProducts,setFilterProducts] = useState([]);
    const [category,setCategory] = useState("All");
    const [search,setSeacrh] = useState("");
    const currency = "$";
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [cartItems,setCartItems] = useState({});
    const delivaryFee = 50;
    const [token,setToken] = useState('');

    const addToCart = (itemId,size)=>{
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
            return err
          }
        }
      }
      return totalAmount;
    }
    
    const updataeQuantity = (itemId,size,quantity)=>{
      let cartData =  structuredClone(cartItems);
      cartData[itemId][size] = quantity;
      setCartItems(cartData);
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
        setToken(localStorage.getItem('token'))
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