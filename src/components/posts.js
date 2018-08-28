import React from "react";
import presenter from "redux-presenter";
import PostsPresenter from "./postsPresenter";
import { getApiData } from "../redux/actions/posts";

const Posts = props => {
  if (props.posts.isFetching) {
    return <div>loading......</div>;
  }
  return (
    <div>
      <ul>
        {props.posts.posts.map(post => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default presenter(store => ({ posts: store.posts }), { getApiData })(
  PostsPresenter,
  Posts
);
