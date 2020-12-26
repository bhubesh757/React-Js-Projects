import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import { Avatar , IconButton} from '@material-ui/core';

import {useStateValue } from '/home/bhubesh/react-projects/src/Provider.js'
import AddIcon from '@material-ui/icons/Add';
import  QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {

    const [{user } , dispatch] = useStateValue();

    return (
        <div className = 'header'>
            <div className="header__left">
                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png' alt =" ">
                </img>
                <div className="header__input">

                <SearchIcon></SearchIcon>
                <input type = 'text' placeholder = 'Search Facebook'></input>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize = 'large'></HomeIcon>
                </div>
                    <div className="header__option">
                    <FlagIcon fontSize = 'large'></FlagIcon>
                    </div>
                    <div className="header__option">
                    <StorefrontOutlinedIcon fontSize = "large"></StorefrontOutlinedIcon>
                    </div>
                    <div className = 'header__option'>
                    <SupervisedUserCircleOutlinedIcon fontSize = "large"></SupervisedUserCircleOutlinedIcon>
                    </div>
                    <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize = "large" ></SubscriptionsOutlinedIcon>
                    </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src ={user.photoURL}></Avatar>
                    <h4>
                        {user.displayName}
                    </h4>
                </div>
                <div className="header__info">
                    <IconButton>
                    <AddIcon></AddIcon>
                    </IconButton>
                    <IconButton>
                        <QuestionAnswerIcon></QuestionAnswerIcon>
                    </IconButton>
                    <IconButton>
                        <NotificationsNoneIcon></NotificationsNoneIcon>
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
