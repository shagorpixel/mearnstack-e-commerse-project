import { IoMdAddCircleOutline } from "react-icons/io";
import { MdChecklistRtl } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Sideber = () => {
    return (
        <div className=" w-[18%] min-h-screen border-r-2 border-gray-300">
            <div className=" flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
                <NavLink to={'/add'} className="flex items-center gap-3 border border-gray-300 border-r-0 px-3  py-2 rounded-1">
                    <IoMdAddCircleOutline className=" text-2xl md:text-4xl" />
                    <p className=" hidden md:block">Add Items</p>
                </NavLink>
                <NavLink to={'/list'} className="flex items-center gap-3 border border-gray-300 border-r-0 px-3  py-2 rounded-1">
                    <MdChecklistRtl className="  text-2xl md:text-4xl" />
                    <p className=" hidden md:block">Product List</p>
                </NavLink>
                <NavLink to={'/order'} className="flex items-center gap-3 border border-gray-300 border-r-0 px-3  py-2 rounded-1">
                    <BsCartCheckFill className=" text-2xl md:text-4xl" />
                    <p className=" hidden md:block">Orders</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Sideber;