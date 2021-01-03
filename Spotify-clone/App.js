import React , {useEffect , useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Login from './Spotify-clone/Login';
import {getTokenFromUrl  } from './Spotify-clone/spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Spotify-clone/Player'
import {useStateValue} from './Provider'

const spotify = new SpotifyWebApi();


function App() {

  // const [token, settoken] = useState(null)
  const [{user , token } , dispatch] = useStateValue();
  

  // const user = null;
 
  useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token) {

          dispatch ({
            type : 'SET_TOKEN',
            token :_token
          })
          // settoken(_token);

          spotify.setAccessToken(_token)

          spotify.getMe().then(user => {
            

            dispatch ({
              type : 'SET_USER',
              user : user,
            })
          })

         spotify.getUserPlaylists().then(playlists => {
           dispatch ( {
             type :'SET_PLAYLISTS',
             playlists : playlists,
           })
         }) 
         spotify.getPlaylist('37i9dQZEVXcLJK7Nx7dTTY').then(response => {

          dispatch ( {
            type :'SET_DISCOVER_WEEKLY',
            discover_weekly : response,
          })
         })

         spotify.getUserPlaylists().then((playlists) => {
           dispatch({
             type : 'SET_PLAYLISTS',
             playlists,
           })
         })

         spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
        }
        // console.log(token , 'Its a Token');
  }, [token , dispatch])

  console.log('😉' , user);
  console.log('👽' , token);
  // console.log('' , playlists);

  return (

    <div className = 'app'>
      {/* <h2> Bhubesh is  !! Creating spotify clone 😍 ✌️ ! Boom!</h2> */}

      {/* login */}
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
      {/* <Player></Player> */}
    </div>

  );
  
}

export default App;
