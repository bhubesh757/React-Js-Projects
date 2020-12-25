import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Header from './Facebook-clone/Header';
import './index.css'
import Sidebar from './Facebook-clone/Sidebar'
import Feed from './Facebook-clone/Feed'

function App() {
  return (
    <div className = 'app'>
      {/* <h1> Facebook Clone</h1> */}
      {/* Header */}
      <Header></Header>
      
      <div className="app__body">
        <Sidebar></Sidebar>
      {/* Feed */}
      <Feed></Feed>
      {/* Widgets */}
      </div>
    </div>

  );
  
}

export default App;
