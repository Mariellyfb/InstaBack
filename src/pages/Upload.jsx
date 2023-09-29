import { useState } from "react";
import ImageSelect from "../components/ImageSelect";
import usePosts from "../hooks/usePosts";
import { getToken } from "../utils/token";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <h1>Crear una Nueva Publicación</h1>
      <ImageSelect onChange={setPost} />
      <label>Descripción (obligatoria):</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      ;<button>Enviar</button>
    </form>
  );
}

export default Upload;
