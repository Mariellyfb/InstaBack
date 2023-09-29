import usePosts from "../hooks/usePosts";
import { useState, useEffect } from "react";
import { containerPosts } from "./Posts.module.css";
import Like from "../components/Like";
import { usePostsContext } from "../context/UseContext";
import { Avatar, Box, Typography } from "@mui/material";

export function Posts() {
  const { like } = usePosts();
  const { posts } = usePostsContext();
  const url = `${import.meta.env.VITE_API_URL}`;

  console.log(posts);

  return (
    <div className={containerPosts}>
      {posts ? (
        posts.map((post) => (
          <div key={post.id}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="start"
              sx={{ m: "5px" }}
            >
              <Avatar
                sx={{
                  width: "25px",
                  height: "25px",
                  fontSize: "15px",
<<<<<<< HEAD
                  bgcolor: "#ae05ae",
=======
                  bgcolor: "green",
>>>>>>> 1b295d280e5ee6a4d1f2d3918573389aaa1e1f86
                }}
                alt={post.username}
                src="/static/images/avatar/2.jpg"
              />
              <Typography fontSize="18px" sx={{ ml: "-20px" }}>
                {post.username}
              </Typography>
            </Box>

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
