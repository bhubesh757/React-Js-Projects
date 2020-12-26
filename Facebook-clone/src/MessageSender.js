import React ,{useState} from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import {useStateValue } from '/home/bhubesh/react-projects/src/Provider.js'
import firebase from 'firebase'
import db from '/home/bhubesh/react-projects/src/firebase.js'

function MessageSender() {

    const [{user } , dispatch] = useStateValue();
    
    const [input, setInput] = useState('');
    const [imageurl, setImageurl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 

        // some datbases

        db.collection('posts').add({
            message : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            username : user.displayName, 
            image : imageurl
        })

        setInput(" ");
        setImageurl('');
    }

    return (
        <div className = 'messagesender'>
            <div className="messagesender__top">
                <Avatar src = {user.photoURL}></Avatar>
                <form>
                <input value = {input} onChange = {(e) => setInput(e.target.value)} type = 'text' placeholder = {`Whats on your mind ,${user.displayName}`} className = 'messagesender__input' ></input>
                <input value = {imageurl} onChange = {(e) => setImageurl(e.target.value)} placeholder = 'Image URL' className = 'messagesender__input'></input>

                <button onClick = {handleSubmit} type = 'submit'> Hidden Submit</button>
                </form>
            </div>
            <div className="messagesender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style = {{color : 'red'}}></VideocamIcon>
                    <h3> Live Video</h3>
                </div >
                <div className="messageSender__option">
                    <PhotoLibraryIcon style = {{color : 'green'}}></PhotoLibraryIcon>
                    <h3> Photo/Video </h3>
                </div>
                <div className="messageSender__option">
                    <EmojiEmotionsIcon style = {{color : 'orange'}}></EmojiEmotionsIcon>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            </div>
    )
}

export default MessageSender
