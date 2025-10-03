import React, { useState } from "react";
import { assets } from "./../assets/admin_assets/assets";
import { backendUrl } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const sizeList = ["S", "M", "L", "XL", "XXL"];

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCaategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestSeller, setBestSeller] = useState("");
  const [sizes, setSizes] = useState([]);
  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);
      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setName("");
        setDescription();
        setPrice("");
        setSizes([]);
        setBestSeller(false)
        toast.success("Successfully Product Added");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={submitHandle}
      className=" flex flex-col w-full items-start gap-3 mt-4"
    >
      <div>
        <p className=" mb-2 font-semibold">Upload Image</p>
        <div className=" flex gap-2">
          <div className=" flex gap-2">
            <label htmlFor="image1">
              <img
                className="cursor-pointer w-20"
                src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
                alt=""
              />
              <input
                onChange={(e) => setImage1(e.target.files[0])}
                className=" hidden"
                id="image1"
                name="image1"
                type="file"
              />
            </label>
          </div>
          <div className=" flex gap-2">
            <label htmlFor="image2">
              <img
                className="cursor-pointer w-20"
                src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
                alt=""
              />
              <input
                onChange={(e) => setImage2(e.target.files[0])}
                className=" hidden"
                id="image2"
                name="image2"
                type="file"
              />
            </label>
          </div>
          <div className=" flex gap-2">
            <label htmlFor="image3">
              <img
                className="cursor-pointer w-20"
                src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
                alt=""
              />
              <input
                onChange={(e) => setImage3(e.target.files[0])}
                className=" hidden"
                id="image3"
                name="image3"
                type="file"
              />
            </label>
          </div>
          <div className=" flex gap-2">
            <label htmlFor="image4">
              <img
                className="cursor-pointer w-20"
                src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
                alt=""
              />
              <input
                onChange={(e) => setImage4(e.target.files[0])}
                className=" hidden"
                id="image4"
                name="image4"
                type="file"
              />
            </label>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <p className=" mb-2">Product Name</p>
        <input value={name}
          className=" w-full max-w-[550px] px-3 py-2"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Type Here.."
        />
      </div>
      <div className=" w-full">
        <p className=" mb-2">Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className=" w-full max-w-[550px] px-3 py-2"
          type="text"
          value={description}
          placeholder="Type Here.."
        />
      </div>
      <div className=" flex flex-col sm:flex-row gap-2 w-full sm:gap-8 max-w-[600px]">
        <div className=" w-full ">
          <p className=" mb-2">Product Category</p>
          <select
            className=" w-full px-3 py-2 "
            onChange={(e) => setCaategory(e.target.value)}
          >
            <option value="Electronics">Electronics</option>
            <option value="Clooth">Clooth</option>
            <option value="Books">Books</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className=" w-full ">
          <p className=" mb-2">Product Sub Category</p>
          <select
            className=" w-full px-3 py-2"
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Electronics">Electronics</option>
            <option value="Clooth">Clooth</option>
            <option value="Books">Books</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className=" w-full ">
          <p className=" mb-2">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            className=" w-full px-3 py-1 sm:w-[120px]"
            value={price}
            type="number"
          />
        </div>
      </div>
      <div className=" w-full">
        <p className=" mb-2">Sizes</p>
        <div className=" flex gap-2">
          {sizeList.map((item, index) => (
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(item)
                    ? prev.filter((size) => size !== item)
                    : [...prev, item]
                )
              }
              key={item + index}
              className={` py-1 px-3 cursor-pointer rounded ${
                sizes.includes(item) ? "bg-blue-300" : "bg-stone-200"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex gap-2 mt-2">
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestSeller}
          type="checkbox"
          id="bestseller"
        />
        <label htmlFor="bestseller"> Add To Best Seller</label>
      </div>
      <button className=" py-2 px-7 bg-black text-white rounded cursor-pointer ">
        Add
      </button>
    </form>
  );
};

export default Add;
