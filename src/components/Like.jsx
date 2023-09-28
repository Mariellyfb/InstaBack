import React, { useState, useEffect } from "react";
import usePosts from "../hooks/usePosts";
import { getToken } from "../utils/token";

function Like({ post, like }) {
  const posts = usePosts();
  const [emoji, setEmoji] = useState("🤍");
  const [isLiked, setIsLiked] = useState(false);
  /* 
  useEffect(() => {
    const post = posts.find((post) => post.id === postId);

    if (post && post.isLiked) {
      setIsLiked(false);
      setEmoji("❤️");
    }
  }, [posts, postId]); */
  let token = getToken();

  const handleLikeClick = async (e) => {
    /*  e.preventDefault();
    const res = await fetch(`http://localhost:4000/posts/likes/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      }, 
    }

    const data = await res.json();
    const numLikes = data.data;

    console.log(numLikes);
    console.log(token);*/

    try {
      like(post.id, token);
      if (data.ok) {
        setIsLiked(true);
        setEmoji("❤️");
      }
      /*     console.log(isLiked); */

      if (isLiked) {
        return;
      }
      if (!res.ok) {
        throw new Error("Error en la solicitud");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleLikeClick}>
        {post.likedByMe ? "❤️" : "🤍"} {post.numLikes}
      </button>
    </div>
  );
}

export default Like;
