import React from 'react'
import './HeaderOption.css'
import { Icon } from '@material-ui/icons'
import {Avatar } from '@material-ui/core'

import {useSelector } from 'react-redux'
import {selectUser} from '/home/bhubesh/react-clone-redux/src/features/userSlice.js'

function HeaderOption({avatar , Icon , title  }) {

    const user = useSelector(selectUser)

    return (
        <div className = 'headerOption'>
            {Icon && <Icon className = 'headerOption__icon'></Icon>}
            {avatar && <Avatar className = 'headerOption__icon'  > {user?.email[0]} </Avatar>}
            <h3 className = 'headerOption__title'> {title} </h3>
            
        </div>
    )
}

export default HeaderOption
