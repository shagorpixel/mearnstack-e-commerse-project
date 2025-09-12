import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const SearchInput = () => {
    const[search,setSeacrh] = useState("");
    return (
            <div className=' w-full relative'>
                <input
                onChange={(e)=>setSeacrh(e.target.value)}
                value={search}
                placeholder='Search Your Product Here....'
                 className='w-full pl-4 pr-10 rounded-full border border-lightTExt outline-0 py-1 focus:border-blue-600' type="text" />
                 {
                    search?
                    <IoIosClose onClick={()=>setSeacrh("")} className='absolute text-xl top-2 right-4 cursor-pointer hover:text-red-600 hoverEfect' />:
                    <CiSearch className='absolute text-xl top-2 right-4 ' />
                    
                 }
                 
            </div>
    );
};

export default SearchInput;