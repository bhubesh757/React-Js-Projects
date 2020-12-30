import React , {useEffect}from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Linkedin-clone/Header'
import Sidebar from './Linkedin-clone/Sidebar'
import Feed from './Linkedin-clone/Feed'
import {useSelector} from 'react-redux'
import Login from './Linkedin-clone/Login'
import {login , logout, selectUser} from './features/userSlice'
import { auth } from './Linkedin-clone/firebase';

import {useDispatch} from 'react-redux'

import Widgets from './Linkedin-clone/Widgets'

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
          // logeed in 
        dispatch(login(
          {
          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName ,
          photoUrl : userAuth.photoUrl,
          }
        ))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      {/* <h1> Lets Build LinkedIn!!</h1> */}

      {/* Header */}

      <Header></Header>


      {!user ? (
        <Login></Login>
      ):(

      <div className="app_body">
        <Sidebar></Sidebar>
        <Feed></Feed>
      <Widgets> </Widgets>

      </div>

      )}
      </div>
  );
}

export default App;
