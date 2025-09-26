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
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 320, "average": 4.6 },
    "images": [
      "https://picsum.photos/seed/smartphone1/400/300",
      "https://picsum.photos/seed/smartphone2/400/300",
      "https://picsum.photos/seed/smartphone3/400/300",
      "https://picsum.photos/seed/smartphone4/400/300"
    ],
    "description": "High-performance smartphone with 6.5-inch display, 128GB storage and dual camera system."
  },
  {
    "id": 2,
    "name": "Wireless Headphones",
    "category": "Electronics",
    "price": 79.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 210, "average": 4.3 },
    "images": [
      "https://picsum.photos/seed/headphone1/400/300",
      "https://picsum.photos/seed/headphone2/400/300",
      "https://picsum.photos/seed/headphone3/400/300",
      "https://picsum.photos/seed/headphone4/400/300"
    ],
    "description": "Noise-cancelling wireless headphones with up to 20 hours of battery life."
  },
  {
    "id": 3,
    "name": "4K LED TV",
    "category": "Electronics",
    "price": 899.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 185, "average": 4.7 },
    "images": [
      "https://picsum.photos/seed/tv1/400/300",
      "https://picsum.photos/seed/tv2/400/300",
      "https://picsum.photos/seed/tv3/400/300",
      "https://picsum.photos/seed/tv4/400/300"
    ],
    "description": "Ultra HD 55-inch LED TV with smart features and HDR support."
  },
  {
    "id": 4,
    "name": "Gaming Laptop Pro",
    "category": "Electronics",
    "price": 1299.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 142, "average": 4.5 },
    "images": [
      "https://picsum.photos/seed/laptop1/400/300",
      "https://picsum.photos/seed/laptop2/400/300",
      "https://picsum.photos/seed/laptop3/400/300",
      "https://picsum.photos/seed/laptop4/400/300"
    ],
    "description": "Powerful gaming laptop with Intel i7 processor, 16GB RAM and RTX graphics card."
  },
  {
    "id": 5,
    "name": "Smartwatch Series 5",
    "category": "Electronics",
    "price": 199.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 268, "average": 4.4 },
    "images": [
      "https://picsum.photos/seed/smartwatch1/400/300",
      "https://picsum.photos/seed/smartwatch2/400/300",
      "https://picsum.photos/seed/smartwatch3/400/300",
      "https://picsum.photos/seed/smartwatch4/400/300"
    ],
    "description": "Stylish smartwatch with fitness tracking, heart rate monitoring and GPS."
  },
  {
    "id": 6,
    "name": "Men's Casual Shirt",
    "category": "Clothing",
    "price": 29.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 90, "average": 4.1 },
    "images": [
      "https://picsum.photos/seed/shirt1/400/300",
      "https://picsum.photos/seed/shirt2/400/300",
      "https://picsum.photos/seed/shirt3/400/300",
      "https://picsum.photos/seed/shirt4/400/300"
    ],
    "description": "Comfortable cotton shirt perfect for casual outings."
  },
  {
    "id": 7,
    "name": "Women's Denim Jacket",
    "category": "Clothing",
    "price": 49.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 120, "average": 4.2 },
    "images": [
      "https://picsum.photos/seed/jacket1/400/300",
      "https://picsum.photos/seed/jacket2/400/300",
      "https://picsum.photos/seed/jacket3/400/300",
      "https://picsum.photos/seed/jacket4/400/300"
    ],
    "description": "Trendy denim jacket designed for all-day wear."
  },
  {
    "id": 8,
    "name": "Running Shoes",
    "category": "Clothing",
    "price": 59.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 245, "average": 4.5 },
    "images": [
      "https://picsum.photos/seed/shoes1/400/300",
      "https://picsum.photos/seed/shoes2/400/300",
      "https://picsum.photos/seed/shoes3/400/300",
      "https://picsum.photos/seed/shoes4/400/300"
    ],
    "description": "Lightweight running shoes with breathable mesh and durable sole."
  },
  {
    "id": 9,
    "name": "Formal Suit",
    "category": "Clothing",
    "price": 149.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 132, "average": 4.6 },
    "images": [
      "https://picsum.photos/seed/suit1/400/300",
      "https://picsum.photos/seed/suit2/400/300",
      "https://picsum.photos/seed/suit3/400/300",
      "https://picsum.photos/seed/suit4/400/300"
    ],
    "description": "Elegant men's suit suitable for formal occasions."
  },
  {
    "id": 10,
    "name": "Kids T-Shirt",
    "category": "Clothing",
    "price": 15.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 78, "average": 4.0 },
    "images": [
      "https://picsum.photos/seed/kidstshirt1/400/300",
      "https://picsum.photos/seed/kidstshirt2/400/300",
      "https://picsum.photos/seed/kidstshirt3/400/300",
      "https://picsum.photos/seed/kidstshirt4/400/300"
    ],
    "description": "Colorful kids' T-shirt made with 100% cotton."
  },
  {
    "id": 11,
    "name": "Nonstick Cookware Set",
    "category": "Home & Kitchen",
    "price": 79.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 65, "average": 4.2 },
    "images": [
      "https://picsum.photos/seed/cookware1/400/300",
      "https://picsum.photos/seed/cookware2/400/300",
      "https://picsum.photos/seed/cookware3/400/300",
      "https://picsum.photos/seed/cookware4/400/300"
    ],
    "description": "Durable nonstick cookware set ideal for everyday cooking."
  },
  {
    "id": 12,
    "name": "Vacuum Cleaner 2000W",
    "category": "Home & Kitchen",
    "price": 129.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 84, "average": 4.3 },
    "images": [
      "https://picsum.photos/seed/vacuum1/400/300",
      "https://picsum.photos/seed/vacuum2/400/300",
      "https://picsum.photos/seed/vacuum3/400/300",
      "https://picsum.photos/seed/vacuum4/400/300"
    ],
    "description": "High-suction vacuum cleaner with multiple attachments."
  },
  {
    "id": 13,
    "name": "Microwave Oven",
    "category": "Home & Kitchen",
    "price": 229.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 70, "average": 4.1 },
    "images": [
      "https://picsum.photos/seed/microwave1/400/300",
      "https://picsum.photos/seed/microwave2/400/300",
      "https://picsum.photos/seed/microwave3/400/300",
      "https://picsum.photos/seed/microwave4/400/300"
    ],
    "description": "Compact microwave oven with grill and defrost functions."
  },
  {
    "id": 14,
    "name": "Queen Size Bedsheet",
    "category": "Home & Kitchen",
    "price": 39.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 110, "average": 4.4 },
    "images": [
      "https://picsum.photos/seed/bedsheet1/400/300",
      "https://picsum.photos/seed/bedsheet2/400/300",
      "https://picsum.photos/seed/bedsheet3/400/300",
      "https://picsum.photos/seed/bedsheet4/400/300"
    ],
    "description": "Soft cotton queen size bedsheet with elegant design."
  },
  {
    "id": 15,
    "name": "Table Lamp Modern",
    "category": "Home & Kitchen",
    "price": 25.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 95, "average": 4.2 },
    "images": [
      "https://picsum.photos/seed/lamp1/400/300",
      "https://picsum.photos/seed/lamp2/400/300",
      "https://picsum.photos/seed/lamp3/400/300",
      "https://picsum.photos/seed/lamp4/400/300"
    ],
    "description": "Modern table lamp with adjustable brightness settings."
  },
  {
    "id": 16,
    "name": "Football",
    "category": "Sports",
    "price": 19.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 260, "average": 4.6 },
    "images": [
      "https://picsum.photos/seed/football1/400/300",
      "https://picsum.photos/seed/football2/400/300",
      "https://picsum.photos/seed/football3/400/300",
      "https://picsum.photos/seed/football4/400/300"
    ],
    "description": "Durable leather football suitable for outdoor play."
  },
  {
    "id": 17,
    "name": "Cricket Bat Pro",
    "category": "Sports",
    "price": 89.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 145, "average": 4.5 },
    "images": [
      "https://picsum.photos/seed/cricket1/400/300",
      "https://picsum.photos/seed/cricket2/400/300",
      "https://picsum.photos/seed/cricket3/400/300",
      "https://picsum.photos/seed/cricket4/400/300"
    ],
    "description": "Professional grade cricket bat made from English willow."
  },
  {
    "id": 18,
    "name": "Tennis Racket",
    "category": "Sports",
    "price": 59.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 132, "average": 4.2 },
    "images": [
      "https://picsum.photos/seed/tennis1/400/300",
      "https://picsum.photos/seed/tennis2/400/300",
      "https://picsum.photos/seed/tennis3/400/300",
      "https://picsum.photos/seed/tennis4/400/300"
    ],
    "description": "Lightweight tennis racket with strong grip handle."
  },
  {
    "id": 19,
    "name": "Yoga Mat",
    "category": "Sports",
    "price": 24.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 155, "average": 4.3 },
    "images": [
      "https://picsum.photos/seed/yogamat1/400/300",
      "https://picsum.photos/seed/yogamat2/400/300",
      "https://picsum.photos/seed/yogamat3/400/300",
      "https://picsum.photos/seed/yogamat4/400/300"
    ],
    "description": "Non-slip yoga mat with extra cushioning for comfort."
  },
  {
    "id": 20,
    "name": "Basketball Jersey",
    "category": "Sports",
    "price": 34.99,
    "sizes": ["XS","S","M","L","XL"],
    "rating": { "totalReviews": 188, "average": 4.4 },
    "images": [
      "https://picsum.photos/seed/jersey1/400/300",
      "https://picsum.photos/seed/jersey2/400/300",
      "https://picsum.photos/seed/jersey3/400/300",
      "https://picsum.photos/seed/jersey4/400/300"
    ],
    "description": "Lightweight basketball jersey designed for performance."
  }
];

const categories = ["All","Electronics", "Clothing", "Home & Kitchen", "Sports", "Books"]

export {bannerData,services,socialIcons,damyProducts,categories}