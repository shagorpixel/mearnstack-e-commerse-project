import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
import Rating from "../Components/Ui/Rating";
import ReletedProduct from "../Components/Ui/ReletedProduct";

const SingleProduct = () => {
  const { productId } = useParams();
  const { products, currency,addToCart} = useContext(MainContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [size,setSize] = useState("")

  const fetchProduct = async () => {
    const foundProduct = await products.find((p) => p._id == productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setImage(foundProduct.images[0]);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);


  return product ? (
    <div className="border-t-2 border-gray-50 pt-10 transition-opacity ease-in duration-500 opacity-100 customContainer min-h-screen">
      {/* product Data  */}
      <div className="flex gap-12 flex-col sm:flex-row ">
        {/* product images */}
        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {product.images.map((img, index) => (
              <img
                key={index}
                onClick={() => setImage(img)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={img}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* Product Information */}
        <div className=" flex-1">
          <h2 className=" font-medium text-2xl mt-2 ">{product.name}</h2>
          <Rating />
          <p className=" mt-5 text-3xl font-medium">
            {currency}
            {product.price}
          </p>
          <p>
            {product.description}
          </p>
          <div className=" flex flex-col gap-4 my-8">
            <p>Select Size</p>
                <div className=" flex gap-2">
                    {
                        product.sizes.map((item,index)=>(
                            <button key={index} onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 cursor-pointer border-gray-200 ${
                    item === size ? "border-orange-500" : ""
                  }`}> {item}</button>
                        ))
                    }
                </div>
          </div>
           <button onClick={()=>addToCart(product._id,size)} className=" bg-black text-white px-8 py-3 rounded cursor-pointer active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className=" mt-8 sm:w-4/5 border border-gray-100" />
          <div className=" text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivary is avilable on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* description and Review Section */}
       <div className=" mt-20">
        <div className=" flex ">
          <b className=" border px-5 py-3 text-sm">Description</b>
          <p className=" border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className=" flex flex-col gap-4 border border-gray-100 px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            magni, corrupti nulla nemo modi harum rerum deserunt exercitationem
            quis quia, eligendi consequuntur fugit a asperiores, necessitatibus
            tempore voluptatibus expedita. Assumenda error omnis inventore velit
            exercitationem labore, iure repellendus alias totam, culpa dicta,
            eum nulla temporibus rerum. Quas fugiat officiis doloribus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo esse
            earum pariatur praesentium tempora quibusdam eum similique
            blanditiis. Amet aliquam vel quisquam corporis sed mollitia quo
            quaerat repellendus voluptate suscipit?
          </p>
        </div>
      </div>
      {/* Related Products  */}
      <ReletedProduct category={product.category} />
    </div>
  ) : (
    <div>Hello World</div>
  );
};

export default SingleProduct;
