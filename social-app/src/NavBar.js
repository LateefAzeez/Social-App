import React from 'react';
import './Styles/NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import mainLogo from './images/logo_1.png';
import NavbarOption from './NavbarOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import myPhoto from './images/user.png';


const NavBar = () => {
    return ( <div className="navbar">
        <div className="navbar_left">
            <img src={mainLogo} alt="app_logo"/>
            <div className="navbar_search">
               <SearchIcon />
                <input type="text"/>
            </div>
        </div>
        <div className="navbar_right">
            <NavbarOption Icon={HomeIcon} title="Home"/>
            <NavbarOption Icon={SupervisorAccountIcon} title="My Network"/>
            <NavbarOption Icon={BusinessCenterIcon} title="Jobs"/>
            <NavbarOption Icon={ChatIcon} title="Messaging"/>
            <NavbarOption Icon={NotificationsIcon} title="Notifications"/>
            <NavbarOption avatar={myPhoto} title="Me"/>
        </div>
    </div> );
}
 
export default NavBar;