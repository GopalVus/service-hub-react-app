import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.scss";
import Post from "./post/Post";
import Snackbar from "../utils/snackbar/Snackbar";
import Loader from "../utils/loader/Loader";
import SectionTitle from "../utils/section-title/SectionTitle";

const Posts = () => {
  const postsApi = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [hasError, setError] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const [hasLoader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(postsApi)
      .then((response) => {
        console.log("resp", response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("errr", error);
        setErrorMsg(error.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 5000);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  let postsJsx;
  postsJsx = posts.map((post) => (
    <Post title={post.title} description={post.body} />
  ));

  return (
    <div className="posts-page">
      <div className="posts-hero-section-title">
        <SectionTitle sectionTitle="Posts" />
      </div>
      <div className="posts-container">
        {postsJsx}
        {errorMsg && <Snackbar content={errorMsg} />}
        {hasLoader && <Loader />}
      </div>
    </div>
  );
};

export default Posts;
