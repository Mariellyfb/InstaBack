import React, { useState, useEffect } from "react";
import usePosts from "../hooks/usePosts";
import { getToken } from "../utils/token";
import { Box } from "@mui/material";
import { usePostsContext } from "../context/UseContext";

function Like({ post, like }) {
  const [emoji, setEmoji] = useState("🤍");
  const [isLiked, setIsLiked] = useState(false);
  const { getAllPosts } = usePostsContext();
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
    e.preventDefault();

    const res = await fetch(`http://localhost:4000/posts/${post.id}/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    getAllPosts();
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
    <Box
      width="45px"
      sx={{
        cursor: "pointer",
        backgroundColor: "#a9fce8",
        backgroundColor: "#a9fce8",
        backgroundColor: "#ededed",
        p: "3px",
        borderRadius: "5px",
        margin: "3px",
        ":hover": {
          backgroundColor: "#ae05ae",
          backgroundColor: "#c7c7c7",
        },
      }}
      onClick={handleLikeClick}
    >
      {post.likedByMe ? "❤️" : "🤍"} {post.numLikes}
    </Box>
  );
}

export default Like;
