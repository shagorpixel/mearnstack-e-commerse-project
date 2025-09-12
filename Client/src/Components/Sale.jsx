import { saleImgOne, saleImgThree, saleImgTwo } from "../assets/images";
import Button from "./Ui/Button";
import SaleRightCart from "./Ui/SaleRightCart";

const Sale = () => {
    return (
        <div className=" w-full h-auto md:h-[550px] py-10 flex flex-col md:flex-row items-center justify-between gap-10 customContainer">
            <div className=" w-full md:w-1/2 h-[250px] md:h-full border border-gray-300 rounded-md overflow-hidden relative group">
                <img className=" w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src={saleImgOne} alt="All Time Bazar" />
                
                <div className=" absolute top-0 left-0 bg-black/40 h-full w-full text-white/80 flex items-center justify-center">
                    <div className=" flex flex-col items-center gap-2">
                        <p className=" text-sm md:text-lg font-medium text-white">10% sales ongoing on phone</p>
                        <p className=" text-sm md:text-xl font-semibold">Offers on limited time.</p>
                        <Button type="secoundary" />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col justify-between gap-10 md:gap-0">
                <SaleRightCart 
                title="10% sales ongoing on phone"
                subtitle="10% sales ongoing on phone"
                image={saleImgTwo}
                />
                 <SaleRightCart 
                title="10% sales ongoing on phone"
                subtitle="10% sales ongoing on phone"
                image={saleImgThree}
                />
               
            </div>
        </div>
    );
};

export default Sale;