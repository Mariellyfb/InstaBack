import { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  const handleLoad = async () => {
    console.log("Todo: cargar datos");

    try {
      const res = await fetch("http://localhost:4000/posts/home");

      if (!res.ok) {
        throw new Error("La solicitud no se completó correctamente");
      }

      const data = await res.json();
      setPosts(data.data); // Establece data.data en lugar de data
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const apiUrl = "http://localhost:4000/";

  return (
    <div>
      <button onClick={handleLoad}>Cargar Publicaciones</button>
      {posts.map((post) => (
        <div key={post.id}>
          {post.description}
          {post.numLikes}
          <img src={`${apiUrl}${post.photo}`} />
        </div>
      ))}
    </div>
  );
}

export default Posts;
