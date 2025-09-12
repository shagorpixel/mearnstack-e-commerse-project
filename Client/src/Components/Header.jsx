import React from "react";
import { logo } from "../assets/images";
import SearchInput from "./SearchInput";
import { FaBars,FaShoppingCart,FaUser  } from "react-icons/fa";
import LinkItem from "./Ui/LinkItem";
import Logo from "./Ui/Logo";

const navItems = [
    {
        title:'Home',
        url:'/'
    },
    {
        title:'Shop',
        url:'/shop'
    },
    {
        title:'About',
        url:'/about'
    },
    {
        title:'Contact',
        url:'/contact'
    },
    {
        title:'Orders',
        url:'/orders'
    },
]

const Header = () => {
  return (
    <header className=" py-7  md:px-4 border-b-[1px] border-stone-300 sticky top-0 left-0 z-50 bg-white">
      <div className="customContainer flex items-center gap-x-3 md:gap-x-7 justify-between">
        <Logo />
        <div className=" flex-1">
          <SearchInput></SearchInput>
        </div>
        <div className=" hidden md:inline-flex items-center gap-x-7  text-lightTExt duration-300">
          <div className=" flex items-center space-x-3">
            {
                navItems.map(item=>(
                    <LinkItem url={item.url} title={item.title} />
                ))
            }
          </div>
          <button className="text-xl hover:text-primary cursor-pointer hoverEfect relative group">
            <FaShoppingCart />
            <span className=" size-4 flex items-center justify-center rounded-full bg-lightTExt text-white text-xs absolute -right-3 -top-3 group-hover:bg-primary hoverEfect">0</span>
          </button>
          <button className="text-xl hover:text-primary cursor-pointer hoverEfect">
            <FaUser />
          </button>
        </div>
        <button className=" text-2xl text-lightTExt hover:text-primary md:hidden cursor-pointer hoverEfect"><FaBars /></button>
      </div>
    </header>
  );
};

export default Header;
