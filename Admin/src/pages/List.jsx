import axios from "axios";
import { MdOutlineDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const List = ({token}) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const result = await axios.get(`${backendUrl}/api/product/list`);
      if (result.data.success) {
        setList(result.data.products);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast(error.message);
    }
  };
  const deleteProduct = async (id)=>{
    try{
        const response = await axios.delete(`${backendUrl}/api/product/remove/${id}`,{headers:{token}});
        if(response.data.success){
            toast.success("Product Delte Successfully");
            fetchList();
        }else{
            toast.error(response.data.message)
        }
    }catch(error){
        toast.error(error.message)
    }
  }
  
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className=" md:w-5/6 mx-auto">
      <p className=" mb-2">Product List</p>
      <div className=" flex flex-col gap-2">
        <div className=" grid md:grid bg-gray-200 grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-100 text-sm gap-2">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {/* Product Map */}
        {list.map((item) => (
          <div key={item._id} className=" grid md:grid  grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-100 text-sm gap-2 bg-gray-200 text-gray-600">
            <b>
                <img className=" max-w-16 rounded" src={item.images[0]} alt="" />
            </b>
            <b>{item.name}</b>
            <b>{item.category}</b>
            <b>{item.price}</b>
            <b><MdOutlineDelete onClick={()=>deleteProduct(item._id)} className=" text-2xl cursor-pointer" /></b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
