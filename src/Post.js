import React, { useState } from 'react';
import postImage from './img/skrip.jpg';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [shares, setShares] = useState(post.shares);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    setComments(comments + 1);
  };

  const handleShare = () => {
    setShares(shares + 1);
  };

  return (
    <div className="post">
      <strong>{post.author.nickname}</strong>{post.text}<br />
      <img class="pfotoPost" src={postImage} alt="" /><br />
      {post.text}<br />
      <button onClick={handleLike}>Like {likes}</button>
      <button onClick={handleComment}>Comment {comments}</button>
      <button onClick={handleShare}>Share {shares}</button>
    </div>
  );
};

export default Post;
