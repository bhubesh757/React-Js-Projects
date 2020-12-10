import React ,{forwardRef} from 'react'
import {Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './Post.css'
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef (({
    displayName,
    userName,
    verified,
    timestamp,
    avatar,
    text,
    image
}, ref) => {
    return (
        <div className = 'post' ref = {ref}> 
             <div className="post-avatar">
                 <Avatar src= {avatar} className = 'avatar-image'></Avatar>
             </div>
             <div className="post-body">
                 <div className="post-header">
                     <div className="post-headertext">
                         <h3>
                             {displayName} {""}
                            <span className = 'post-headerspecial'>
    {verified && <VerifiedUserIcon className = 'post-badge'></VerifiedUserIcon>} @{userName}
                            </span>
                         </h3>
                     </div>
                     
                     <div className = 'post-headerdescription'>
                         {/* <br></br> */}
                        <p> {text}</p>
                        {/* <br></br> */}
                     </div>
                     
                 </div>
                 <img src ={image}  alt =''/> 
                 <div className="post-footer">
                     <CommentIcon fontSize = 'small'></CommentIcon>
                     <RepeatIcon fontSize = 'small'></RepeatIcon>
                     <FavoriteBorderIcon fontSize = 'small'></FavoriteBorderIcon>
                     <PublishIcon fontSize = 'small'> </PublishIcon>
                 </div>
             </div>
        </div>
    )
});

export default Post
