import React , {useState} from 'react'

import Button from '@material-ui/core/Button'
import {db , storage } from '/home/bhubesh/react-clone/src/firebase.js'

import firebase from '/home/bhubesh/react-clone/src/firebase.js'
import './ImageUpload.css'

function ImageUplaod({username}) {

    const [caption, setcaption] = useState('')
    const [progress, setprogress] = useState(0)
    const [image, setimage] = useState(null)
    const [url, seturl] = useState('')
    const [avatar, setavatar] = useState(null)
    

    const handleChange = (e) => {
        if (e.target.files[0]){
            setimage(e.target.files[0])
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name }`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function...

                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )

                setprogress(progress);
            },

            (error) => {
                console.log(error);
                alert(error.message)
            },

            () => {
                // complete function
                storage 
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    // post image to db

                    db.collection('posts').add({
                        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                        caption : caption,
                        imageUrl : url,
                        username : username,
                        avatar : avatar
                    });
                    
                    setprogress(0);
                    setcaption('');
                    setimage(null);
                    setavatar(null);
                })
            }

        )
    }


    return (
        <div className = 'imageupload'>

            <progress className = 'imageupload__progress' value = {progress} max = '100' ></progress>
            <input value = {caption} type = 'text ' placeholder = 'Enter a caption' onChange = {event => setcaption(event.target.value) }></input>
            <input type = 'file' onChange = {handleChange} ></input>
            <Button  onClick = {handleUpload}> Upload </Button>
        </div>
    )
}

export default ImageUplaod
