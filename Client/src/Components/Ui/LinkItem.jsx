import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkItem = ({title,url}) => {
    return (
        <NavLink className={`uppercase relative group`} to={url}>
            {title}
            <span className='w-0 absolute h-px bg-primary bottom-0 left-0 inline-block group-hover:w-full hoverEfect'></span>
        </NavLink>
    );
};

export default LinkItem;