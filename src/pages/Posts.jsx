import usePosts from "../hooks/usePosts";
import { containerPosts } from "./Posts.module.css";
import Like from "../components/Like";

function Posts() {
  const url = import.meta.env.VITE_API_URL;
  const posts = usePosts();
  return (
    <div className={containerPosts}>
      {posts.map((post) => (
        <div key={post.id}>
          {post.userame}
          {post.createdAt}
          <img src={`${url}${post.photo}`} />
          {post.description}
          {post.numLikes}
          <Like />
        </div>
      ))}
    </div>
  );
}

export default Posts;
