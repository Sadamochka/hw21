import React, { useState } from 'react';

const PostForm = ({ authors, onAddPost }) => {
  const [author, setAuthor] = useState(authors[0].nickname);
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedAuthor = authors.find((a) => a.nickname === author);

    if (selectedAuthor) {
      const newPost = {
        author: selectedAuthor,
        image,
        text,
        likes: 0,
        comments: 0,
        shares: 0,
      };

      onAddPost(newPost);
      setImage('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="author">Author:</label>
      <select
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        {authors.map((author, index) => (
          <option key={index} value={author.nickname}>
            {author.nickname}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="image">Image URL:</label>
      <input
        type="url"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <br />
      <label htmlFor="text">Post Text:</label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default PostForm;