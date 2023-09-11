import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";
import Nav from "./Nav";
import Posts from "./Posts";

function Home() {
  const [user] = useUser();

  if (!user) return <Navigate to="/login" />;

  return (
    <div>
      <Nav />
      <h1>Bienvenido!</h1>
      <Posts />
    </div>
  );
}
export default Home;
