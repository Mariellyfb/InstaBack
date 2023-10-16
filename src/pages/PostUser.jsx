import { useParams } from "react-router-dom";
import { getToken } from "../utils/token";
import { useEffect, useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Like from "../components/Like";
import usePosts from "../hooks/usePosts";

export const PostUser = () => {
  const url = `${import.meta.env.VITE_API_URL}`;
  const { like } = usePosts();
  const { id } = useParams();
  console.log(id); //Aqui esta el id del usuario
  let token = getToken(); // Aqui tienes el token
  const [userPosts, setUserPosts] = useState([]);
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}/posts`)
      .then((res) => res.json())
      .then((data) => setUserPosts(data.data));
    fetch(`http://localhost:4000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInfoUser(data.data.user));
  }, []);

  console.log(infoUser);
  //(PAGINA DE CADA USER)
  return (
    <>
      <div>
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
            fontSize: "40px",
            bgcolor: "#ae05ae",
          }}
          alt={infoUser.username}
          src="/static/images/avatar/2.jpg" // Puedes proporcionar la URL del avatar si tienes una
        />
        <Typography fontSize="24px" sx={{ mt: "10px" }}>
          {infoUser.username}
        </Typography>
        <Typography fontSize="18px" sx={{ mt: "10px" }}>
          {infoUser.email}
        </Typography>
      </div>
      {userPosts?.map((post) => (
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
                bgcolor: "#ae05ae",
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
      ))}
    </>
  );
};
