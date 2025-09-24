import React, { useContext } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { MainContext } from '../Context/MainContext';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const{search,setSeacrh} = useContext(MainContext)
    const navigate = useNavigate();
    const changeHandle = (e)=>{
        setSeacrh(e.target.value);
        navigate('/')
    }
    return (
            <div className=' w-full relative'>
                <input
                onChange={changeHandle}
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