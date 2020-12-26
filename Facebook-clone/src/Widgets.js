import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className = 'widgets'>
            <iframe src = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FIndiaToday%2Fposts%2F10160742813967119&width=500&show_text=true&height=573&appId"
            width = '450' 
            height = '100%'
            style = {{border : 'none' , overflow : 'hidden'}}
            scrolling = 'no'
            frameBorder = '0'
            allowTransparency = 'true'
            allow = 'encerypted-media'>
            className = 'widgets'
            </iframe>
        </div>
    )
}

export default Widgets
