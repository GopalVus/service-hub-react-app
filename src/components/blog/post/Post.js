import React from "react";
import Button from "../../utils/button/Button";
import "./Post.scss";

const Post = (props) => {
  const { title, description } = props;

  return (
    <div className="post-container">
      <b>{title}</b>
      <p>{description}</p>
      <Button type="text" text="View" onClick={() => {}} />
    </div>
  );
};

export default Post;
