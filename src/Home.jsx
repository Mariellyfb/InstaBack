import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";
import { Logout, Button } from "./Logout";

function Home() {
  const [user] = useUser();

  if (!user) return <Navigate to="/login" />;

  return (
    <div>
      <h1>Bienvenido!</h1>
      <Logout />
    </div>
  );
}
export default Home;
