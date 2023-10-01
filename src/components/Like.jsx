import React, { useState, useEffect } from "react";
import usePosts from "../hooks/usePosts";
import { getToken } from "../utils/token";
import { Box } from "@mui/material";
import { usePostsContext } from "../context/UseContext";

function Like({ post, like }) {
  const [emoji, setEmoji] = useState("🤍");
  const [isLiked, setIsLiked] = useState(false);
  const { getAllPosts } = usePostsContext();

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

    try {
      like(post.id, token);
      if (data.ok) {
        setIsLiked(true);
        setEmoji("❤️");
      }

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
        p: "3px",
        borderRadius: "5px",
        margin: "3px",
        ":hover": {
          backgroundColor: "#ae05ae",
        },
      }}
      onClick={handleLikeClick}
    >
      {post.likedByMe ? "❤️" : "🤍"} {post.numLikes}
    </Box>
  );
}

export default Like;
