import { useState } from "react";
import ImageSelect from "../components/ImageSelect";
import usePosts from "../hooks/usePosts";
import { getToken } from "../utils/token";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

function Upload() {
  const [post, setPost] = useState(null);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const posts = usePosts();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("TODO: Subir ...", post);
    const fd = new FormData();
    fd.append("photo", post);
    fd.append("description", description);
    let token = getToken();

    //Aqui el console.log???????

    try {
      const res = await fetch("http://localhost:4000/posts", {
        method: "POST",
        body: fd,
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status}`);
      }

      const data = await res.json();
      window.location.href = "/";
      console.log("Respuesta del servidor:", data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            fontFamily: "Dancing Script, cursive",
            fontSize: "30px",
            backgroundColor: "#ae05ae",
            pl: "10px",
            pr: "10px",
            borderRadius: "20px",
          }}
        >
          <h1>Crea una nueva publicación</h1>
        </Box>
        <ImageSelect onChange={setPost} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label>Descripción (obligatoria)</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button>Enviar</button>
        </Box>
      </form>
    </Box>
  );
}

export default Upload;
