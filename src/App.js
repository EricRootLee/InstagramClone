import React from 'react';
import './App.css';
import Post from './post';

function App() {
  return (
    <div className="app">
   

      <div className="app__header">
        <img
          className="app__headerImage"
          src=""
          alt="Logo"
        />
      </div>
      <h1>Hello devs !</h1>
      <Post/>
    </div>
  );
}

export default App;
