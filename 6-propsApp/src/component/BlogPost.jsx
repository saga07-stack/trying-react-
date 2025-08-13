import React from 'react'

const BlogPost = (props) => {
  const {title, author, date} = props.post;
  
  return (
    <div>
      <h1> {title} </h1>
      <h2> {author} </h2>
      <h2> {date} </h2>
    </div>
  );
};

export default BlogPost;
