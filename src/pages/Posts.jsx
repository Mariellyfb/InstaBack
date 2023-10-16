import usePosts from "../hooks/usePosts";
import { containerPosts } from "./Posts.module.css";
import Like from "../components/Like";
import { usePostsContext } from "../context/UseContext";
import { Avatar, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

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
            <NavLink to={`posts/${post.userId}`}>
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
                    bgcolor: "#ae05ae",
                  }}
                  alt={post.username}
                  src="/static/images/avatar/2.jpg"
                />
                <Typography fontSize="18px" sx={{ ml: "-20px" }}>
                  {post.username}
                </Typography>
              </Box>
            </NavLink>

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
