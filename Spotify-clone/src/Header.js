import React from 'react'

import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core'

// useStateValue 
import {useStateValue} from '/home/bhubesh/react-projects/src/Provider.js'

function Header() {

    const [{user} , dispatch] =  useStateValue()

    return (
        <div className = 'header'>
            <div className="header__left">
                <SearchIcon></SearchIcon>
                <input placeholder = 'Search for Artists,Songs, or Podcasts '>
                </input>
            </div>

            <div className="header__right">
                <Avatar src = {user?.images[0]?.url} alt = ''></Avatar>
                <h4> {user?.display_name} </h4>
            </div>
        </div>
    )
}

export default Header
