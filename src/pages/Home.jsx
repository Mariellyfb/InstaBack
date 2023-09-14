import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Header from "../components/Header";
import Posts from "../pages/Posts";

function Home() {
  const [user] = useUser();

  /*   if (!user) return <Navigate to="/" />; */

  return (
    <div>
      <Header />
      <h1>Bienvenido!</h1>
      <Posts />
    </div>
  );
}
export default Home;
