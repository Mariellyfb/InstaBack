import { useEffect, useState } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/posts/home")
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  }, []);
  const like = async (postId, token) => {
    const res = await fetch(`http://localhost:4000/posts/likes/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error("Error en la solicitud");
    }
    const newPosts = await fetch("http://localhost:4000/posts/home")
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  };
  return { posts, setPosts, like };
}

export default usePosts;
