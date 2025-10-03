import React from 'react';
import { Link } from 'react-router-dom';

const Navber = ({setToken}) => {
    return (
        <nav className=' flex items-center justify-between py-2 px-[4%]'>
            <Link className=' w-[max(10%,80px)]'>
            AllTime Bazar
            </Link>
            <button onClick={()=>setToken("")} className=' bg-gray-600 text-white py-2 sm:px-7 px-2 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>Log Out</button>
        </nav>
    );
};

export default Navber;