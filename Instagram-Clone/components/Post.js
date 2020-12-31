import { Avatar  } from '@material-ui/core'
import React , {useState , useEffect} from 'react'
import './Post.css'
import PostOption from './PostOption'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { db  } from '/home/bhubesh/react-clone/src/firebase.js';

import firebase from '/home/bhubesh/react-clone/src/firebase.js'
function Post({ postId ,username , caption , imageUrl , avatar , Icon ,user }) {

    const [comments, setcomments] = useState([])
    const [comment, setcomment] = useState([])
    

    useEffect(() => {
        let unsubscribe ;

        if (postId) {
            unsubscribe = db.collection('posts')
            .doc(postId)
            .collection('comments')
            .orderBy('timestamp' , 'desc')
            .onSnapshot((snapshot) => {
                setcomments(snapshot.docs.map((doc) => doc.data()))
            })
        }

        return () => {
            unsubscribe ();
        };
    
    }, [postId])

    const postcomment = (e) => {
        e.preventDefault()

        db.collection('posts').doc(postId).collection('comments').add({
            text : comment,
            username : user.displayName,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })

        setcomment('')
    }


    return (
        <div className = ' post'> 
        <div className="post__header">

        <Avatar src = {avatar}
         alt = {username[0]} className = 'post__avatar'> 

        </Avatar>
        <h4 className = 'post__username'> {username} </h4>
        </div>
        

        {/* header => avatar => usename */}

        <img  className = 'post__image' src = {imageUrl} ></img>

        {/* image */}

        
        

        <div className="post__icon">
            <PostOption Icon = {FavoriteBorderIcon} >   </PostOption>
            <PostOption Icon = {ChatBubbleOutlineIcon} ></PostOption>
            <PostOption Icon = {TelegramIcon} >         </PostOption>
            <PostOption Icon = {BookmarkBorderIcon} >   </PostOption>
        </div>

        <h4 className = 'post__text' > <strong> {username} </strong> {caption} </h4>


                <div className="post__comments">
                    {comments.map((comment) => (
                        <p>
                            <strong> {comment.username}  </strong>
                            {comment.text}
                        </p>
                    ))}
                </div>

                {user && (

        <form className = 'post__commentbox'>
            <input
            className = 'post__input'
            type = 'text'
            placeholder = 'Add a comment'
            value = {comment}
            onChange = {(e) => setcomment(e.target.value) } 
            ></input>

            <button className = 'post__button '
            disabled = {!comment}
            type = 'submit'
            onClick = {postcomment}
            >
                Post
            </button>
        </form>
                ) }





        {/* username & caption */}
        </div>
    )
}

export default Post














// .then((userAuth) => {
//     dispatch(login({
//         email : userAuth.user.email,
//         uid : userAuth.user.uid,
//         displayName : userAuth.user.displayName ,
//         // photoUrl : userAuth.photoUrl,
//     }))
// })