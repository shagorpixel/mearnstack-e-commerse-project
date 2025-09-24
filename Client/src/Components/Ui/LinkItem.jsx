
import { NavLink } from 'react-router-dom';

const LinkItem = ({title,url,clickHandle}) => {
    return (
        <NavLink  onClick={clickHandle?()=>clickHandle(false):null} className={`uppercase relative group`} to={url}>
            {title}
            <span className='w-0 absolute h-px bg-primary bottom-0 left-0 inline-block group-hover:w-full hoverEfect'></span>
        </NavLink>
    );
};

export default LinkItem;