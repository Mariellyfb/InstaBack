import React, { useState, useEffect } from "react";
import usePosts from "../hooks/usePosts";
import { getToken } from "../utils/token";
import { Box } from "@mui/material";
import { usePostsContext } from "../context/UseContext";

function Like({ post, like }) {
  const [isLiked, setIsLiked] = useState(false);
  const { getAllPosts } = usePostsContext();

  console.log(post);

  useEffect(() => {
    if (post.likedByMe) {
      setIsLiked(true);
    }
  }, []);

  let token = getToken();

  const handleLikeClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:4000/posts/${post.id}/likes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      setIsLiked(!isLiked);

      getAllPosts();
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
      onClick={
        token ? handleLikeClick : () => alert("Tienes que iniciar sesion")
      }
    >
      {isLiked ? "❤️" : "🤍"} {post.numLikes}
    </Box>
  );
}

export default Like;
