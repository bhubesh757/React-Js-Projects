import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption'

// Icons 
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import TelegramIcon from '@material-ui/icons/Telegram';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Header() {
    return (
        <div className = 'header'> 
            <div className="header__logo">
                <img src = 'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'></img>
            </div>
        <div className="header__search">
        <SearchIcon></SearchIcon>
         <input type = 'text' placeholder = 'Search'>
         </input>
        </div>


        <div className="header__right">
            <HeaderOption Icon = {HomeIcon} ></HeaderOption>
            <HeaderOption Icon = {ExploreIcon} ></HeaderOption>
            <HeaderOption Icon = {TelegramIcon} ></HeaderOption>
            <HeaderOption Icon = {FavoriteBorderIcon} ></HeaderOption>
            <HeaderOption avatar = 'https://i.pinimg.com/originals/b2/3e/a3/b23ea34c18999b1bddb2f49199cfd871.jpg' ></HeaderOption>
        </div>

        </div>
    )
}

export default Header
