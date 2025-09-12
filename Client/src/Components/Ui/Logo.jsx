import { Link } from 'react-router-dom';
import { logo, logoLight } from '../../assets/images';


const Logo = ({light,width}) => {
    return (
        <Link>
            <img className={width?`w-${width}`:"w-20"} src={!light?logo:logoLight} alt="All Time Bazar"  />
        </Link>
    );
};

export default Logo;