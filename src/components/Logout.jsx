import { Navigate } from "react-router-dom";
import { deleteToken } from "../utils/token";
import { useUser } from "../context/UseContext";
import { getToken } from "../utils/token";

export function Logout() {
  const [user, setUser] = useUser();
  const handleLogout = () => {
    /*     let token = getToken(); */
    deleteToken();
    setUser(null);

    /*  if (token) {
      delete;
    } */

    <Navigate to="/login"></Navigate>;
    console.log(getToken());
  };
  return <button onClick={handleLogout}>Logout</button>;
}
