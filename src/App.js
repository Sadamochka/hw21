import React, { useState } from 'react';
import './App.css';
import authorsData from './authorsData'; 
import Post from './Post';
import PostForm from './PostForm';

function App() {
  const [posts, setPosts] = useState([
    {
      author: authorsData[0],
      image: 'https://via.placeholder.com/150',
      text: 'Lorem ipsum dolor sit amet.',
      likes: 0,
      comments: 0,
      shares: 0,
    },
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <h1>Instagram Post Store</h1>
      <PostForm authors={authorsData} onAddPost={addPost} />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default App;

