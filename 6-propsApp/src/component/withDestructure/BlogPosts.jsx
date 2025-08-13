import React from 'react'

const BlogPosts = ({post}) => 
{
    const {title, author, date} = post;
  return (
    <div>
      <h1> {title} </h1>
      <h2> {author} </h2>
      <h2> {date} </h2>
    </div>
  );
};

export default BlogPosts
