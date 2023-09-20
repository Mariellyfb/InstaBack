import usePosts from "../hooks/usePosts";
import { containerPosts } from "./Posts.module.css";
import Like from "../components/Like";

function Posts() {
  const url = `${import.meta.env.VITE_API_URL}`;
  const posts = usePosts();

  console.log(posts);
  console.log(url);
  return (
    <div className={containerPosts}>
      {posts ? (
        posts.map((post) => (
          <div key={post.id}>
            {post.userame}
            {post.createdAt}
            <img src={`${url}${post.photo}`} alt={post.description} />
            {post.description}
            {post.numLikes}

            <Like />
          </div>
        ))
      ) : (
        <p>No hay posts aún.</p>
      )}
    </div>
  );
}

export default Posts;
