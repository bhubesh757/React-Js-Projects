import React from 'react'
import {Avatar} from '@material-ui/core'
import './Story.css'
function Story({image , profilesrc , title}) {
    return (
        <div style = {{backgroundImage: `url(${image})`}} className = 'Story'>
            <Avatar className = 'story__avatar' src = {profilesrc}></Avatar> 
            <h4> {title}</h4>
        </div>
    )
}

export default Story
