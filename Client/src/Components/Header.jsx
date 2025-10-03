import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import SearchInput from "./SearchInput";
import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import LinkItem from "./Ui/LinkItem";
import Logo from "./Ui/Logo";
import SocialMedia from "./Ui/SocialMedia";
import { MainContext } from "../Context/MainContext";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Orders",
    url: "/orders",
  },
];

const Header = () => {
  const {getCartCount,token,setToken,navigate,setCartItems} = useContext(MainContext);
 const logOutHandle = ()=>{
  localStorage.removeItem('token');
  setToken("");
  navigate('/login')
  setCartItems({})
  
 }
  const[menuIsOpen,setMenuIsOpen] = useState(false);
  return (
    <header className=" py-7  md:px-4 border-b-[1px] border-stone-300 sticky top-0 left-0 z-50 bg-white">
      <div className="customContainer flex items-center gap-x-3 md:gap-x-7 justify-between">
        <Logo />
        <div className=" flex-1">
          <SearchInput></SearchInput>
        </div>
        <div className=" hidden md:inline-flex items-center gap-x-7  text-lightTExt duration-300">
          <div className=" flex items-center space-x-3">
            {navItems.map((item,index) => (
              <LinkItem key={index} url={item.url} title={item.title} />
            ))}
          </div>
          <Link to={'/cart'} className="text-xl hover:text-primary cursor-pointer hoverEfect relative group">
            <FaShoppingCart />
            <span className=" size-4 flex items-center justify-center rounded-full bg-lightTExt text-white text-xs absolute -right-3 -top-3 group-hover:bg-primary hoverEfect">
              {getCartCount()}
            </span>
          </Link>
          {token ?
          <div className="text-xl hover:text-primary cursor-pointer hoverEfect group relative ">
  
              <FaUser />
            <div className=" hidden group-hover:flex flex-col gap-2 absolute top-[105%] right-0 p-4 min-w-[200px] bg-white shadow-md divide-y divide-gray-100 rounded">
              <Link className=" hover:bg-gray-200 text-center" to='/orders'>Orders</Link>
              <button onClick={logOutHandle} className=" hover:bg-gray-200">Logout</button>
            </div>
          </div>
          :<Link to='/login'>Sign In</Link>}
        </div>
        <button onClick={()=>setMenuIsOpen(true)} className=" text-2xl text-lightTExt hover:text-primary md:hidden cursor-pointer hoverEfect">
          <FaBars />
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`absolute top-0 left-0 md:hidden h-screen overflow-hidden ${menuIsOpen?"w-full":"w-0" } bg-black text-white flex items-center justify-center `}>

        <div  className=" w-4/5 mx-auto max-w-lg p-4 border border-lightTExt rounded-2xl space-y-3">
          <div className=" flex items-center justify-between ">
            <h2 className=" text-2xl font-medium capitalize">
              Navigation Menu
            </h2>
            <button onClick={()=>setMenuIsOpen(false)}>
              <IoClose className=" text-2xl hover:text-red-600 hoverEfect cursor-pointer" />
            </button>
          </div>
          <ul className=" flex flex-col gap-y-3">
            {navItems.map((item, index) => (
                <LinkItem clickHandle={setMenuIsOpen} key={index} url={item.url} title={item.title} />
            ))}
            <LinkItem key="signin" clickHandle={setMenuIsOpen} url="/signin" title="Sign In" />
            <LinkItem key="cart" clickHandle={setMenuIsOpen} url="/cart" title="cart" />
          </ul>
          <SocialMedia />
        </div>
      </div>
      {/* Mobile Menu */}
    </header>
  );
};

export default Header;
