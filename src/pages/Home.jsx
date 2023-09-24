import { Navigate } from "react-router-dom";
import { useUser } from "../context/UseContext";
import Header from "../components/Header";
import Post from "../pages/Posts";

function Home() {
  const [user] = useUser();

  /* if (!user) return <Navigate to="/" />; */

  return (
    <div>
      <Header />
      <h1>Bienvenido!</h1>
      <Post />
    </div>
  );
}
export default Home;
