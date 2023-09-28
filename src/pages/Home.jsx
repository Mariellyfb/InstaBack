import { Navigate } from "react-router-dom";
import { useUser } from "../context/UseContext";
import { Posts } from "../pages/Posts";
import NavPrincipal from "../components/nav/NavPrincipal";

function Home() {
  const [user] = useUser();

  /* if (!user) return <Navigate to="/" />; */

  return (
    <div>
      <NavPrincipal />
      <h1>Bienvenido!</h1>
      <Posts />
    </div>
  );
}
export default Home;
