import usePosts from "../hooks/usePosts";
import { useState, useEffect } from "react";
import { containerPosts } from "./Posts.module.css";
import Like from "../components/Like";
import { usePostsContext } from "../context/UseContext";

export function Posts() {
  const { like } = usePosts();
  const { posts } = usePostsContext();
  const url = `${import.meta.env.VITE_API_URL}`;

  return (
    <div className={containerPosts}>
      {posts ? (
        posts.map((post) => (
          <div key={post.id}>
            {post.username}

            {/*{post.createdAt}*/}
            <img
              style={{ width: "100%", height: "100%" }}
              src={`${url}${post.photo}`}
              alt={post.description}
            />
            <span> {post.description}</span>

            <Like post={post} like={like} />
          </div>
        ))
      ) : (
        <p>No hay posts aún.</p>
      )}
    </div>
  );
}

export default Posts;
