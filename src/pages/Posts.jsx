import usePosts from "../hooks/usePosts";
import { containerPosts } from "./Posts.module.css";
import Like from "../components/Like";

function Posts() {
  const posts = usePosts();
  const url = `${import.meta.env.VITE_API_URL}`;

  console.log(posts);
  console.log(url);

  return (
    <div className={containerPosts}>
      {posts ? (
        posts.map((post) => (
          <div key={post.id}>
            {post.username}
            {post.id}
            {/*{post.createdAt}*/}
            <img src={`${url}${post.photo}`} alt={post.description} />
            <span> {post.description}</span>
            {post.numLikes}
            <Like postId={post.id} />
          </div>
        ))
      ) : (
        <p>No hay posts aún.</p>
      )}
    </div>
  );
}

export default Posts;
