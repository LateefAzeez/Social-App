
import React from 'react';
import './Styles/NavbarOption.css';
import { Avatar } from '@material-ui/core';

const NavbarOption = ({Icon, title, avatar}) => {
    return ( <div className="navbarOption">
        {Icon && <Icon className="navbarOption_icon" /> }
        {avatar && <Avatar className="navbarOption_icon" src={avatar} />}
        <h3 className="navbarOption_title">{title}</h3>
    </div> );
}
 
export default NavbarOption;