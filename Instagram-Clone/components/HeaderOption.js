import React from 'react'
import './HeaderOption.css'

import {Icon} from '@material-ui/icons'
import {Avatar} from '@material-ui/core'

function HeaderOption({avatar , Icon }) {
    return (
        <div className = 'headerOption'>
                {Icon && <Icon className = 'headerOption_icon'></Icon>}
                {avatar && <Avatar className = 'headerOption__icon'></Avatar>}
        </div>
    )
}

export default HeaderOption 
