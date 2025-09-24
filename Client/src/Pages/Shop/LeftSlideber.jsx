import { useContext } from "react";
import { categories } from "../../assets/util";
import { MainContext } from "../../Context/MainContext";

const LeftSlideber = () =>{
  const{setCategory,category,clearFilters} = useContext(MainContext)

  return (
    <div className="p-5 text-sm">
      <h2 className="text-lg font-semibold mb-3 border-b pb-1 text-gray-700">Category</h2>
      <ul className="mb-5 space-y-1 ">
        {categories.map((cat) => (
          <li onClick={()=>setCategory(cat)}
            key={cat}
            className={`cursor-pointer px-2 py-1 rounded hover:bg-blue-50 hover:text-blue-600 transition ${cat===category? "bg-blue-50 ":""}`}
          >
            {cat}
          </li>
        ))}
      </ul>
      <button onClick={()=>clearFilters()} className="bg-red-500 w-full text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer">
        Clear All Filters
      </button>
    </div>
  )}
  export default LeftSlideber;