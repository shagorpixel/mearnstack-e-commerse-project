import { createContext, useEffect, useState } from "react";
import { damyProducts } from "../assets/util";

export const MainContext = createContext();

const MainContextProvider = ({children})=>{
    const [products,setProducts] = useState([]);
    const [filterProducts,setFilterProducts] = useState([]);
    const [category,setCategory] = useState("All");
    const [search,setSeacrh] = useState("");
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
    clearFilters
    }
    return <MainContext.Provider value={value} >
        {children}
    </MainContext.Provider>
}
export default MainContextProvider;