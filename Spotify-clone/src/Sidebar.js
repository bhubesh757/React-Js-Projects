import React from 'react'


import './Sidebar.css'
import SidebarOption from './SidebarOption'
import {useStateValue} from '/home/bhubesh/react-projects/src/Provider.js'
// Icons 

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
function Sidebar() {

   const [{playlists} , dispatch] =  useStateValue()
    return (
        <div className = 'sidebar'>
           <img className = 'sidebar__logo' src = 'https://iaudioguide.com/wp-content/uploads/2014/12/spotify-logo-primary-horizontal-dark-background-rgbizi.jpg' alt = '' >
               
           </img>
           <SidebarOption title = 'Home' Icon = {HomeIcon}></SidebarOption>
           <SidebarOption title = 'Search' Icon = {SearchIcon}></SidebarOption>
           <SidebarOption title = 'Your Library' Icon = {LibraryMusicIcon} ></SidebarOption>
           <br></br>
            <strong className = 'sidebar__title'>PLAYLISTS</strong>
           <hr></hr>

            {playlists?.items?.map((playlist) => (
                <SidebarOption title = {playlist.name}>
                </SidebarOption>
    )) 
            
            }
            
           {/* <SidebarOption title = 'Rock'></SidebarOption>
           <SidebarOption title = 'Pop'></SidebarOption>
           <SidebarOption title = 'Hip Hop'></SidebarOption>
           <SidebarOption title = 'Folk'></SidebarOption> */}
        </div>
        
    )
}

export default Sidebar
