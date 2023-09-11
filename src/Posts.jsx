import usePosts from "./hooks/usePosts";
import { containerPosts } from "./Posts.module.css";
import Like from "./Like";

function Posts() {
  const apiUrl = "http://localhost:4000/";
  const posts = usePosts();
  return (
    <div className={containerPosts}>
      {posts.map((post) => (
        <div key={post.id}>
          {post.userame}
          {post.createdAt}
          <img src={`${apiUrl}${post.photo}`} />
          {post.description}
          {post.numLikes}
          <Like />
        </div>
      ))}
    </div>
  );
}

export default Posts;
