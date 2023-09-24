import { useState } from "react";
import ImageSelect from "../components/ImageSelect";
import usePosts from "../hooks/usePosts";

function Upload() {
  const [post, setPost] = useState(null); // Cambia la inicialización a null
  const [description, setDescription] = useState("");
  const posts = usePosts();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("TODO: Subir ...", post);
    const fd = new FormData();
    fd.append("photo", post); // Usa "photo" en lugar de "fotoName"
    fd.append("description", description);

    const res = await fetch("http://localhost:4000/posts", {
      method: "POST",
      body: fd,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk1MjA1MDE1LCJleHAiOjE2OTU4MDk4MTV9.R1SJ-KVAvctLS6ZIgBZyq8jIrUIXREDbdniSlJdHrJg",
      },
    });
    const data = await res.json();
    /*  console.log("Got", data);
    console.log(description); */
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
