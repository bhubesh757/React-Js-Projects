import { Avatar } from '@material-ui/core'
import React , {forwardRef} from 'react'
import './Posts.css'
import InputOptions from './InputOptions'

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';


import {useSelector } from 'react-redux'
import {selectUser} from '/home/bhubesh/react-clone-redux/src/features/userSlice.js'

const  Posts = forwardRef(({name, 
    description, 
    message, 
    photoUrl} ,ref ) => {

        const user = useSelector(selectUser)

    return (
        <div ref = {ref} className ='posts'>
            <div className="post__header">
                <Avatar src = {user.photoUrl}> {name[0]}</Avatar>
                <div className="post__info">
    <h2>{name}</h2>
                    <p> {description} </p> 
                </div>
            </div>

            <div className="post__body">
                <p> {message}</p>
            </div>
            {/* buttons */}
            <div className="post__buttons">
                <InputOptions Icon = {ThumbUpAltOutlinedIcon} title = 'Like' color = ''></InputOptions>
                <InputOptions Icon = {QuestionAnswerOutlinedIcon} title = 'Comment' color = ''></InputOptions>
                <InputOptions Icon = {ShareOutlinedIcon} title = 'Share' color = ''></InputOptions>
                <InputOptions Icon = {SendOutlinedIcon} title = 'Send' color = ''></InputOptions>
            </div>
        </div>
    )
})

export default Posts
