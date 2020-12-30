import React , {useState , useEffect} from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';

import InputOptions from './InputOptions'

import PhotoIcon from '@material-ui/icons/Photo';
import DuoIcon from '@material-ui/icons/Duo';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import EventIcon from '@material-ui/icons/Event';
import Posts from './Posts'
import firebase from './firebase.js'
import ImageUploader from './ImageUploader'
// db

import {db} from './firebase'


import {useSelector } from 'react-redux'
import {selectUser} from '/home/bhubesh/react-clone-redux/src/features/userSlice.js'

import FlipMove from 'react-flip-move'

function Feed() {

    const user = useSelector(selectUser)


    
    const [posts, setposts] = useState([]);
    const [input, setinput] = useState('');

    useEffect(() => {
       db.collection('posts').orderBy('timestamp' , 'desc').
       onSnapshot(snapshot => (
           setposts(snapshot.docs.map(doc => (
               {
                   id : doc.id,
                   data : doc.data(),
               }
           )))
       ))
    }, []);


    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name : user.displayName,
            description : 'Learning React Js',
            message : input,
            photoUrl : user.photoUrl || '',
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        })

        setinput('')
    }

    return (
        <div className = 'feed'>

            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <CreateIcon></CreateIcon>
                    <form>
                        <input value = {input} onChange = {(e) => setinput(e.target.value)} type = 'text' placeholder = 'Start a Post'></input>
                        <button onClick = {sendPost} type = 'submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon = {PhotoIcon} title = 'Photo' color = '#70b5f9'>
                    </InputOptions>
                    <InputOptions Icon = {DuoIcon} title = 'Video' color = "e7a33e"></InputOptions>
                    <InputOptions Icon = {EventNoteIcon} title = 'Document' color = 'c79ef7'></InputOptions>
                    <InputOptions Icon = {EventIcon} title = 'Write Article' color = 'f5987e'></InputOptions>
                    
                </div>
            </div>

            {/* Posts */}

            <FlipMove>
            {posts.map (({id , data : { name , description , message , photoUrl}}) => (
                <Posts 
                
                key = {id}
                name = {name}
                description = {description}
                message = {message}
                photoUrl = {photoUrl}
                >
                </Posts>
            

    ))}

</FlipMove>

            {/* <Posts name = 'Bhubesh SR' 
            description = 'React js Developer'
            message = 'Not Yet Employed'
            photoUrl = ''
            ></Posts> */}

        </div>
    )
}

export default Feed
