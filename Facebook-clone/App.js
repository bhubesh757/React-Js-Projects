import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Header from './Facebook-clone/Header';
import './index.css'
import Sidebar from './Facebook-clone/Sidebar'
import Feed from './Facebook-clone/Feed'
import Widgets from './Facebook-clone/Widgets'
import Login from './Facebook-clone/Login'

// context Api
import {useStateValue } from './Provider'

function App() {
  const [{user } , dispatch] = useStateValue();
    // const user = null;

  return (
    <div className = 'app'>

      {!user ? (
        <Login></Login>
      ):(
        <>
      <Header></Header>
      
      <div className="app__body">
        <Sidebar></Sidebar>
      {/* Feed */}
      <Feed></Feed>
      {/* Widgets */}
      <Widgets></Widgets>
      </div>
      </>
      )
    }
      {/* <h1> Facebook Clone</h1> */}
      {/* Header */}
    </div>

  );
  
}

export default App;
