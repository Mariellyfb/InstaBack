import { useEffect, useState } from "react";

const url = import.meta.env.VITE_API_URL;
function usePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${url}/posts/home`)
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  }, []);
  const like = async (postId, token) => {
    const res = await fetch(`${url}/posts/${postId}/likes`, {
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
    const newPosts = await fetch(`${url}/posts/home`)
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  };
  return { posts, setPosts, like };
}

export default usePosts;
