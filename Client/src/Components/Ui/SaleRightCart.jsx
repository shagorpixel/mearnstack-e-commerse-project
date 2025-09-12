
import Button from './Button';

const SaleRightCart = ({title,subtitle,image}) => {
    return (
        <div className=" w-full h-[250px] md:h-[46%] border border-gray-300 rounded-md overflow-hidden relative group">
                    <img className=" w-full h-full object-cover group-hover:scale-110 duration-500 ease-in-out" src={image} alt="" />

                    <div className=" absolute top-0 left-0 bg-black/40 h-full w-full text-white/80 flex items-center">
                    <div className=" flex flex-col items-start gap-2 p-10">
                        <p className=" text-sm md:text-lg font-medium text-white">{title}</p>
                        <p className=" text-sm md:text-xl font-semibold">{subtitle}</p>
                        <Button type="secoundary" />
                    </div>
                </div>
                </div>
    );
};

export default SaleRightCart;