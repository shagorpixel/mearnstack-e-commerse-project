import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { bannerData } from "../assets/util";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Ui/Button";



const BannerSlider = () => {
    const [dotActive,setDotActive] = useState(0);
    const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    beforeChange:(prev,next)=>{
        setDotActive(next)
    },
    appendDots:(dots)=>(
        <div
        style={{
            position:"absolute",
            bottom:"30px",
            left:"50%",
            transform:"translateX(-50%)"
        }}
        >
            <ul
            style={{
                margin:"0px",
                display:"flex",
                alignItems:"center",
                gap:"10px"
            }}
            >
               {" "}{dots}{" "}
            </ul>
        </div>
    ),
    customPaging:(i)=>(
        <div 
        style={ i=== dotActive ?
            {
                width:"50px",
                height:"15px",
                backgroundColor:"#262626",
                cursor:"pointer",
                borderRadius:"20px"
            }:
            {
                width:"15px",
                height:"15px",
                backgroundColor:"#ffffff",
                cursor:"pointer",
                borderRadius:"50%"
            }
        } />
    )
  };
  return (
    <div className=" w-full max-h-[600px] ">
      <Slider {...settings}>
            {
                bannerData.map((item,index)=>(
                    <div key={index} className=" relative">
                        <img className=" h-full lg:h-[500px]  w-full object-cover" src={item.image} alt="" />
                        <div className=" absolute top-0 left-0 h-full w-full bg-black/20 flex flex-col justify-center items-start">
                            <div className=" customContainer space-y-2 md:space-y-3">
                                <p className=" w-24 text-white text-center bg-red-600 uppercase text-xs font-medium py-1 rounded-md tracking-wide">{item.sale}</p>
                                <h2 className=" text-xl md:text-5xl max-w-sm md:max-w-xl font-bold md:leading-[55px] capitalize">{item.title}</h2>
                                <p className=" text-xs md:text-base uppercase font-medium">{item.discount}</p>
                                <p className=" font-medium text-sm md:text-base">From <span className=" text-blue-700 md:ml-2 font-bold md:text-xl
                                ">${item.from}</span></p>
                                <span onClick={()=>navigate('/shop')}>
                                    <Button type="primary" />
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            }
      </Slider>
    </div>
  );
};

export default BannerSlider;
