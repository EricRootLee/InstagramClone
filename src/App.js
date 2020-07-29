import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: 'Muli',
      caption: 'WUlan',
      imgUrl: 'f'
    }
    ,

    {
      username: 'Muli',
      caption: 'WUlan',
      imgUrl: 'f'
    }
  ])

useEffect(()=>{

},[])
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

      {posts.map(element => <Post username={element.username} caption={element.caption} imgUrl={element.imgUrl} />)}

    </div>
  );
}

export default App;
