import { createContext, useEffect, useState } from "react";
import { damyProducts } from "../assets/util";
  import { ToastContainer, toast } from 'react-toastify';
export const MainContext = createContext();

const MainContextProvider = ({children})=>{
    const [products,setProducts] = useState([]);
    const [filterProducts,setFilterProducts] = useState([]);
    const [category,setCategory] = useState("All");
    const [search,setSeacrh] = useState("");
    const currency = "$";
    const [cartItems,setCartItems] = useState({});
    const delivaryFee = 50;

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
        const productinfo = products.find(product=>product.id == items);
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
    console.log(getTotalAmount());
    const updataeQuantity = (itemId,size,quantity)=>{
      let cartData =  structuredClone(cartItems);
      cartData[itemId][size] = quantity;
      setCartItems(cartData);
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
setProducts(damyProducts)
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
    getTotalAmount
    }
    return <MainContext.Provider value={value} >
      <ToastContainer />
        {children}
    </MainContext.Provider>
}
export default MainContextProvider;