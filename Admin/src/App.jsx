import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navber from "./components/Navber";
import Sideber from "./components/Sideber";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import List from "./pages/List";
export const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://mearnstack-e-commerse-server.vercel.app';
export const currency = import.meta.env.VITE_CURRENCY || "$"

import Add from './pages/Add';
import Order from './pages/Order';

const App = () => {
 
  const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');
  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token]);
  return ( 
    <div className=" bg-gray-100 min-h-screen">
      
      <ToastContainer />
      {token?
      <>
        <Navber setToken={setToken} />
        <hr className=" border border-gray-300" />
        <div className=" flex gap-10 max-w-full">
          <Sideber />
            <Routes>
            <Route path="/list" element={<List token={token} />} />
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/order" element={<Order token={token} />} />
          </Routes>
  
        </div>  
      </>
      :
      <Login setToken={setToken} />
      }
    </div>
  );
};

export default App;
