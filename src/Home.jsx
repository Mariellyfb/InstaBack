import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

function Home() {
  const [user] = useUser();

  if (!user) return <Navigate to="/login" />;

  return (
    <div>
      <h1>Bienvenido!</h1>
    </div>
  );
}
export default Home;
