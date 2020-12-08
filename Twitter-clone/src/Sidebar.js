import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import SidebarOption from'./SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import './Sidebar.css'

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <TwitterIcon className = 'twitter-icon'></TwitterIcon>
                
                <SidebarOption active Icon ={HomeIcon} text = 'Home'></SidebarOption>
                <SidebarOption Icon ={ExploreIcon} text = 'Explore'></SidebarOption>
                <SidebarOption Icon ={NotificationsIcon} text = 'Notifications'></SidebarOption>
                <SidebarOption Icon ={MessageIcon} text = 'Messages'></SidebarOption>
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
                <SidebarOption Icon={ListAltIcon} text="Lists" />
                <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                <SidebarOption Icon={MoreHorizIcon} text="More" />
                {/* Button */}
            <Button variant ='outlined' className = 'sidebar-tweet' fullWidth > Tweet </Button>
            </div>
        </div>
    )
}

export default Sidebar
