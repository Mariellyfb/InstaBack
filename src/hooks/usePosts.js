import { useEffect, useState } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/posts/home")
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  }, []);
  return posts;
}

export default usePosts;
