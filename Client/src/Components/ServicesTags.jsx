import { services } from "../assets/util";



const ServicesTags = () => {
    return (
        <div className=" bg-[#f4f4f4] py-12">
            <div className="customContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center md:place-items-start">
            {
                services.map((service)=>(
                    <div key={service.title} className=" flex items-center gap-3 min-w-[300px] md:min-w-[0]">
                        <span className=" text-7xl text-blue-600">{service.icon}</span>
                        <div>
                            <h2 className=" text-base uppercase font-bold">{service.title}</h2>
                            <p className=" text-sm font-medium max-w-[160px]tracking-wide">{service.subTitle}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
        
    );
};

export default ServicesTags;