const Button = ({type}) => {
    return (
        <button className={`py-2 px-9  inline rounded-md text-xs md:text-sm uppercase  hoverEfect cursor-pointer font-semibold ${type==="primary" || !type?"bg-black/80 text-white hover:bg-black":"bg-white/70 text-black hover:bg-white/90"}`}>Shop Now</button>
    );
};

export default Button;