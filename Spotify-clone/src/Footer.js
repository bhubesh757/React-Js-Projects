import React , {useEffect} from 'react'

import './Footer.css'


// icons 

import {useStateValue} from '/home/bhubesh/react-projects/src/Provider.js'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid  , Slider} from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

// import SpotifyWebApi from 'spotify-web-api-js'

function Footer({spotify}) {

    const [{token , item , playing } , dispatch ] = useStateValue();
    
    // using the useEffect 

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {

            dispatch({
                type : 'SET_PLAYING',
                playing : r.playing
            });

            dispatch({
                type : 'SET_ITEM',
                item : r.item
            });
        })
    }, [spotify])

    // onclick events
    // handle play pause events
    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();

            dispatch({
                type : 'SET_PLAYING',
                playing : false,
            });
        }
        else {
            spotify.play();

            dispatch ({
                type : 'SET_PLAYING',
                playing : 'true'
            })
        }
    }

    // skipnext

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch ( {
                type : 'SET_ITEM',
                item : r.item
            });
            dispatch ( {
                type : 'SET_PLAYING',
                playing : true
            });
        })
    }


    // skipPrevious,

    const skipPrevious = () => {
        spotify.skipToPrevious();
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
      };

    return (
        <div className = 'footer'>
            
            {/* footerleft */}

            <div className="footer__left">
               <img className = 'footer__logo' src = {item?.album.images[0].url} alt = ''>
               </img>
               {
                   item ? (
                    <div className="footer__songinfo">
                    <h4> {item.name} </h4>
                    <p> {item.artists.map((artist) => artist.name).join(',')} </p>
                </div>
                   ) : (
                    <div className="footer__songinfo">
                    <h4> No Song is Playing </h4>
                    <p> No singer! </p>
                </div>
                   )
               }
            </div>
            {/* player controls */}
            <div className="footer__center">
                <ShuffleIcon className = 'footer__green'></ShuffleIcon>
                <SkipPreviousIcon onClick = {skipNext} className = 'footer__icon'></SkipPreviousIcon>
                {
                        playing ? (
                            <PauseCircleOutlineIcon 
                            className = 'footer_icon'
                            fontSize="large"
                            onClick = {handlePlayPause}
                            ></PauseCircleOutlineIcon>
                        ):(
                             <PlayCircleOutlineIcon 
                             onClick = {handlePlayPause} 
                             fontSize = 'large' 
                             className = 'footer__large'
                             ></PlayCircleOutlineIcon>
                        )
                }
                <SkipNextIcon onClick = {skipPrevious} className = 'footer__icon'></SkipNextIcon>
                <RepeatIcon  className = 'footer__green'></RepeatIcon>
            </div>

            <div className="footer__right">

                <Grid container spacing = {2}>
                    <Grid item >
                        <PlaylistPlayIcon></PlaylistPlayIcon>
                    </Grid>
                    <Grid item>
                        <ImportantDevicesIcon></ImportantDevicesIcon>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon></VolumeDownIcon>
                    </Grid>
                       
                    <Grid item xs >
                    <Slider></Slider>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer




