import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {useStateValue } from '/home/bhubesh/react-projects/src/Provider.js'
function Sidebar() {

    const [{user } , dispatch] = useStateValue();
    return (
        <div className = "sidebar">
            {/* <SidebarRow src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukwR7l2OkeLnuCZFbioIuXycZneRu8rxHaA&usqp=CAU' title = 'Bhubesh_SR'></SidebarRow> */}
            <SidebarRow src= {user.photoURL} title = {user.displayName}></SidebarRow>

            <SidebarRow Icon = {LocalHospitalIcon} title = 'COVID-19 Information Centre'></SidebarRow>
            <SidebarRow Icon = {EmojiFlagsIcon} title = 'Pages'></SidebarRow>
            <SidebarRow Icon = {PeopleIcon} title = 'Find Friends'></SidebarRow>
            <SidebarRow Icon = {ChatIcon} title = 'Messenger'></SidebarRow>
            <SidebarRow Icon = {StorefrontIcon} title = 'Marketplace'></SidebarRow>
            <SidebarRow Icon = {VideoLibraryIcon} title = 'Videos'></SidebarRow>
            <SidebarRow Icon = {ExpandMoreIcon} title = 'Marketplace'></SidebarRow>
        </div>
    )
}

export default Sidebar
