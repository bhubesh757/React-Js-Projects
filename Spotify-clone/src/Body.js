import React from 'react'
import './Body.css'
import Header from './Header'

import {useStateValue} from '/home/bhubesh/react-projects/src/Provider.js'

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import GetAppIcon from '@material-ui/icons/GetApp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
function Body({spotify}) {

    const [{discover_weekly} , dispatch] = useStateValue();

    const playPlaylist = (id) => {
        spotify.play({
            context_uri : `spotify : playlist : 37i9dQZEVXcLJK7Nx7dTTY`,
        })
        .then((res) => {
           spotify.getMyCurrentPlayingTrack().then((r) => {
               dispatch({
                   type : 'SET_ITEM',
                   item : r.item,
               });
               dispatch({
                   type : 'SET_PLAYING',
                   playing : true,
               });

           })
               
        });

    }


    const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track: ${id} `],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });

              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };



    return (
        <div className = 'body'>
           <Header spotify = {spotify}></Header>

           <div className="body__info">
               <img src = {discover_weekly?.images[0].url} alt = ''>
               </img>
              

               <div className="body__infoText">
                    <strong>
                        PLAYLIST
                    </strong>
                    <h2>
                        Discover Weekly
                    </h2>
                    <p>
                        {discover_weekly?.description}
                    </p>
               </div>
           </div>

           <div className="body__songs">
            <div className="body_icons">
             <PlayCircleFilledIcon  onClick = {playPlaylist} className = 'body_shuffle'></PlayCircleFilledIcon>
                <FavoriteBorderIcon fontSize = 'large' className = 'large'></FavoriteBorderIcon>
                        <GetAppIcon className = 'download'></GetAppIcon>
                     <MoreHorizIcon className = 'body_more'></MoreHorizIcon>
            </div>
               {/* list of songs */}

               {discover_weekly?.tracks.items.map(item => (
                   <SongRow playSong = {playSong} track = {item.track}></SongRow>
               ))}
           </div>
        </div>
        
    )
    
}


export default Body
