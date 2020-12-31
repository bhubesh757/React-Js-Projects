import React from 'react'
import './PostOption.css'

import {Icon} from '@material-ui/icons'

function PostOption({Icon}) {
    return (
        <div className = 'postOption'>
            {Icon && <Icon className = 'postOption_icon'></Icon>}
        </div>
    )
}

export default PostOption
