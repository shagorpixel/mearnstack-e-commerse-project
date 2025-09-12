import { bannerImgOne, bannerImgThree, bannerImgTwo } from "./images";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFacebook,FaGoogle,FaTwitter,FaGithub } from "react-icons/fa6";
const services = [
    {
        title:"Free Delivary",
        subTitle:"Free Shipping on all order",
        icon:<TbTruckDelivery />
    },
    {
        title:"Returns",
        subTitle:"Back Gurantee under 7 days",
        icon:<HiOutlineCurrencyDollar />
    },
    {
        title:"Support",
        subTitle:"Support online 24 hours a day",
        icon: <BiSupport />
    },
    {
        title:"Payments",
        subTitle:"100% payments security",
        icon:<MdOutlinePayment />
    }
]

const bannerData = [
    {
        title: "Top Selling Smartphone and Accessories",
        discount: "Discount of up to 40%",
        from: 599.99,
        sale: "Flash Sale",
        image:bannerImgOne
    },
    {
        title: "Latest Laptops and Gadgets",
        discount: "Discount of up to 25%",
        from: 999.99,
        sale: "Mega Deal",
        image: bannerImgTwo
    },
    {
        title: "Fashion and Lifestyle Products",
        discount: "Discount of up to 60%",
        from: 19.99,
        sale: "Season Sale",
        image: bannerImgThree
    }
];
const socialIcons = [
    {
        name:"Facebook",
        url:'https://www.facebook.com/',
        icon:<FaFacebook />
    },
    {
        name:"Google",
        url:'https://www.google.com/',
        icon:<FaGoogle />
    },
    {
        name:"Twiteer",
        url:'https://x.com/',
        icon:<FaTwitter />
    },
    {
        name:"Github",
        url:'https://github.com/',
        icon:<FaGithub />
    }
]




export {bannerData,services,socialIcons}