import React from 'react'
import './Posts.css'
import {Avatar } from '@material-ui/core'

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
function Posts({ProfilePic , 
     image ,
     timestamp , 
     username , 
     message}) {
    return (
        <div className = 'posts'>
            <div className="posts__top">
                <Avatar src = {ProfilePic} className = 'post__avatar'></Avatar>        
                <div className="post__topinfo">
                    <h3> {username} </h3>
                <p> {new Date (timestamp?.toDate()) .toUTCString()} </p>
                </div>
            </div>
{/* ------------------------------- */}
            <div className="post_bottom">
                <p>{message}</p>
            </div>
{/* -------------------------- */}
            <div className="post__image">
                <img src = {image} alt ='' width = '1000' height = '628'></img>
            </div>
{/* ------------------------------ */}
            <div className = 'post__options'>
                <div className="post__option">
                <ThumbUpAltOutlinedIcon></ThumbUpAltOutlinedIcon>
                <p> Like </p>
                </div>
                <div className="post__option">
                <ModeCommentIcon></ModeCommentIcon>
                <p> Comment </p>
                </div>
                <div className="post__option">
                <NearMeOutlinedIcon></NearMeOutlinedIcon>
                <p> Share </p>
                </div>
                <div className="post__option">
                <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                <ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon>
                <p>  </p>
                </div>
            </div>
            
        </div>
    )
}

export default Posts
