import React from 'react'
import InstagramEmbed from 'react-instagram-embed';
import './InstagramEmbed.css'

<script async="" defer="defer" src="//platform.instagram.com/en_US/embeds.js"></script>

function InstagrampostEmbed() {

    return (
        <div className = 'instagramembed'> 
            <InstagramEmbed
            clientAccessToken='<appId>|<clientToken>'
            url='https://www.instagram.com/p/CJbzy_IKBVe/?hl=en'
            maxWidth={375}
            hideCaption={false}
            containerTagName='div'
            injectScript
            protocol=''
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}

            >

            </InstagramEmbed>
        </div>
    )
}

export default InstagrampostEmbed
