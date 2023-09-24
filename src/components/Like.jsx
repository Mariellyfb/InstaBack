import React, { useState, useEffect } from "react";
import usePosts from "../hooks/usePosts";

function Like({ postId, numLikes }) {
  const posts = usePosts();
  const [emoji, setEmoji] = useState("🤍");
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const post = posts.find((post) => post.id === postId);

    if (post && post.isLiked) {
      setIsLiked(false);
      setEmoji("❤️");
    }
  }, [posts, postId]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk1MjUzMjk1LCJleHAiOjE2OTU4NTgwOTV9.l0w4qJVLOdwFVjzbmdf0ae5DFsrUN2pAXwIMddGR-3I"; //

  const handleLikeClick = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:4000/posts/likes/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();
    const numLikes = data.data;

    console.log(numLikes);

    try {
      if (data.ok) {
        setIsLiked(true);
        setEmoji("❤️");
      }
      /*     console.log(isLiked); */

      if (isLiked) {
        return;
      }
      if (res.ok) {
        throw new Error("Error en la solicitud");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 onClick={handleLikeClick}>
        {emoji} {numLikes}
      </h1>
    </div>
  );
}

export default Like;
