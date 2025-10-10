import { Link } from 'react-router-dom';
import { logo, logoLight } from '../../assets/images';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';


const Logo = ({light,width}) => {
    const {setCategory} = useContext(MainContext)
    return (
        <Link>
            <img onClick={()=>setCategory("All")} className={width?`w-${width}`:"w-20"} src={!light?logo:logoLight} alt="All Time Bazar"  />
        </Link>
    );
};

export default Logo;