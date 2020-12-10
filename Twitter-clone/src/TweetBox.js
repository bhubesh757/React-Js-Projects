import React , {useState } from 'react'
import './TweetBox.css'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import {Button} from '@material-ui/core'
import db from './firebase'
// import { useEffect } from 'react'

function TweetBox() {

    const [tweetMessage, settweetMessage] = useState('')
    const [tweetImage, settweetImage] = useState('')

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName : "Bhubesh SR",
            userName : 'bhubesh_sr',
            verified : true,
            text : tweetMessage,
            image : tweetImage,
            avatar : 'https://i.pinimg.com/originals/b2/3e/a3/b23ea34c18999b1bddb2f49199cfd871.jpg'

        }) 


    settweetMessage("");
    settweetImage("");


    }

    return (
        <div className = 'tweetbox'>
            <form>
                <div className="tweeetbox-input">
                    <AccountCircleSharpIcon fontSize = 'large' className = 'tweetbox-image'></AccountCircleSharpIcon>
                    <input onChange = { (e) => settweetMessage(e.target.value)} value = {tweetMessage} type = 'text' placeholder =' Whats on Your Mind?'></input>
                </div>
                <input value = {tweetImage}  onChange = {(e) => settweetImage(e.target.value) } type = 'text' placeholder =' Add an image'className = 'tweetbox-addimage' ></input>
                <Button  onClick = {sendTweet} type = 'submit' className = 'tweetbox-button'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
