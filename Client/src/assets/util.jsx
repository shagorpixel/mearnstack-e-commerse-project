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
const damyProducts = [
  {
    "id": 1,
    "name": "Smartphone X200",
    "category": "Electronics",
    "price": 499.99,
    "image": "https://picsum.photos/seed/p1/400/300",
    "description": "High-performance smartphone with 6.5-inch display, 128GB storage and dual camera system."
  },
  {
    "id": 2,
    "name": "Wireless Headphones",
    "category": "Electronics",
    "price": 79.99,
    "image": "https://picsum.photos/seed/p2/400/300",
    "description": "Noise-cancelling wireless headphones with up to 20 hours of battery life."
  },
  {
    "id": 3,
    "name": "4K LED TV",
    "category": "Electronics",
    "price": 899.99,
    "image": "https://picsum.photos/seed/p3/400/300",
    "description": "Ultra HD 55-inch LED TV with smart features and HDR support."
  },
  {
    "id": 4,
    "name": "Gaming Laptop Pro",
    "category": "Electronics",
    "price": 1299.99,
    "image": "https://picsum.photos/seed/p4/400/300",
    "description": "Powerful gaming laptop with Intel i7 processor, 16GB RAM and RTX graphics card."
  },
  {
    "id": 5,
    "name": "Smartwatch Series 5",
    "category": "Electronics",
    "price": 199.99,
    "image": "https://picsum.photos/seed/p5/400/300",
    "description": "Stylish smartwatch with fitness tracking, heart rate monitoring and GPS."
  },
  {
    "id": 6,
    "name": "Men's Casual Shirt",
    "category": "Clothing",
    "price": 29.99,
    "image": "https://picsum.photos/seed/p6/400/300",
    "description": "Comfortable cotton shirt perfect for casual outings."
  },
  {
    "id": 7,
    "name": "Women's Denim Jacket",
    "category": "Clothing",
    "price": 49.99,
    "image": "https://picsum.photos/seed/p7/400/300",
    "description": "Trendy denim jacket designed for all-day wear."
  },
  {
    "id": 8,
    "name": "Running Shoes",
    "category": "Clothing",
    "price": 59.99,
    "image": "https://picsum.photos/seed/p8/400/300",
    "description": "Lightweight running shoes with breathable mesh and durable sole."
  },
  {
    "id": 9,
    "name": "Formal Suit",
    "category": "Clothing",
    "price": 149.99,
    "image": "https://picsum.photos/seed/p9/400/300",
    "description": "Elegant men's suit suitable for formal occasions."
  },
  {
    "id": 10,
    "name": "Kids T-Shirt",
    "category": "Clothing",
    "price": 15.99,
    "image": "https://picsum.photos/seed/p10/400/300",
    "description": "Colorful kids' T-shirt made with 100% cotton."
  },
  {
    "id": 11,
    "name": "Nonstick Cookware Set",
    "category": "Home & Kitchen",
    "price": 79.99,
    "image": "https://picsum.photos/seed/p11/400/300",
    "description": "Durable nonstick cookware set ideal for everyday cooking."
  },
  {
    "id": 12,
    "name": "Vacuum Cleaner 2000W",
    "category": "Home & Kitchen",
    "price": 129.99,
    "image": "https://picsum.photos/seed/p12/400/300",
    "description": "High-suction vacuum cleaner with multiple attachments."
  },
  {
    "id": 13,
    "name": "Microwave Oven",
    "category": "Home & Kitchen",
    "price": 229.99,
    "image": "https://picsum.photos/seed/p13/400/300",
    "description": "Compact microwave oven with grill and defrost functions."
  },
  {
    "id": 14,
    "name": "Queen Size Bedsheet",
    "category": "Home & Kitchen",
    "price": 39.99,
    "image": "https://picsum.photos/seed/p14/400/300",
    "description": "Soft cotton queen size bedsheet with elegant design."
  },
  {
    "id": 15,
    "name": "Table Lamp Modern",
    "category": "Home & Kitchen",
    "price": 25.99,
    "image": "https://picsum.photos/seed/p15/400/300",
    "description": "Modern table lamp with adjustable brightness settings."
  },
  {
    "id": 16,
    "name": "Football",
    "category": "Sports",
    "price": 19.99,
    "image": "https://picsum.photos/seed/p16/400/300",
    "description": "Durable leather football suitable for outdoor play."
  },
  {
    "id": 17,
    "name": "Cricket Bat Pro",
    "category": "Sports",
    "price": 89.99,
    "image": "https://picsum.photos/seed/p17/400/300",
    "description": "Professional grade cricket bat made from English willow."
  },
  {
    "id": 18,
    "name": "Tennis Racket",
    "category": "Sports",
    "price": 59.99,
    "image": "https://picsum.photos/seed/p18/400/300",
    "description": "Lightweight tennis racket with strong grip handle."
  },
  {
    "id": 19,
    "name": "Yoga Mat",
    "category": "Sports",
    "price": 24.99,
    "image": "https://picsum.photos/seed/p19/400/300",
    "description": "Non-slip yoga mat with extra cushioning for comfort."
  },
  {
    "id": 20,
    "name": "Basketball Jersey",
    "category": "Sports",
    "price": 34.99,
    "image": "https://picsum.photos/seed/p20/400/300",
    "description": "Lightweight basketball jersey designed for performance."
  }
]
const categories = ["All","Electronics", "Clothing", "Home & Kitchen", "Sports", "Books"]







export {bannerData,services,socialIcons,damyProducts,categories}