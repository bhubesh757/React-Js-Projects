import React from 'react'
import './Sidebar.css'
import {Avatar} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import {useSelector} from 'react-redux'
import {selectUser} from '/home/bhubesh/react-clone-redux/src/features/userSlice.js'
function Sidebar() {

    const user = useSelector(selectUser)

    return (
        <div className = 'sidebar'>
           <div className="sidebar__top">
               <img src = 'https://ois.net/wp-content/uploads/2019/10/linkedin-background.jpg' alt = ''></img>
               <Avatar src = {user.photoUrl} className = 'sidebar__avatar'> {user.email[0]} </Avatar>
               <h3> {user.displayName} </h3>
               <CheckCircleIcon ></CheckCircleIcon>
               <h4>SA @ LetsUpgrade || AI ML || React Js || Future Data Analyst || Python Developer || Data Engg Intern @ MedTourEasy</h4>
           </div>

           <div className="sidebar__stats">
               <div className="sidebar__stat">
                   <p>Who Viewed your profile</p>
                   <p className = 'sidebar__statNumber'>478</p>
                   <p>Views of your post</p>
                   <p className = 'sidebar__statNumber'>4512</p>
               </div>
           </div>

           <div className="sidebar__bottom">
               {/* <Recent></Recent> */}
               <p> Recent</p>
               <div className = 'sidebar__recentItem'>
                   <span className = 'sidebar__hash'>#</span>
                   <p>React js</p>
               </div>
               <div className = 'sidebar__recentItem'>
                   <span className = 'sidebar__hash'>#</span>
                   <p>Mongodb</p>
               </div>
               <div className = 'sidebar__recentItem'>
                   <span className = 'sidebar__hash'>#</span>
                   <p>Vue js</p>
               </div>
               <div className = 'sidebar__recentItem'>
                   <span className = 'sidebar__hash'>#</span>
                   <p>Machine Learning</p>
               </div>
           </div>
           
        </div>
    )
}

export default Sidebar
