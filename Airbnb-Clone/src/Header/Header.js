import React from 'react'
import './Header.css'
import PageviewIcon from '@material-ui/icons/Pageview';
import PublicIcon from '@material-ui/icons/Public';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Header() {
    return (
        <div className = 'header'>
            <img className ='header-icon' src = "https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt = ''>
            </img>
            <div className = 'header-center'>
                <input type = 'text' ></input>
                <PageviewIcon></PageviewIcon>
            </div>
            <div className = 'header-right'>
                <p> Become a partner</p>
                <PublicIcon></PublicIcon>
                <AccountBoxIcon></AccountBoxIcon>
                <ExpandMoreIcon></ExpandMoreIcon>
            </div>
        </div>
    )
}

export default Header
