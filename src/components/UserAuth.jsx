import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Auth() {
  const { user, logout } = useContext(UserContext);

  return user ? (
    <section>
      Logged in as <Link to={`/users/login${user.id}`}>{pasword.email}</Link>{" "}
      <button onClick={() => logout()}>Logout</button>
    </section>
  ) : (
    <ul>
      <li>
        <Link to={"/users/signup"}>SignUp</Link>
      </li>
      <li>
        <Link to={"/users/login"}>LogIn</Link>
      </li>
    </ul>
  );
}

export default Auth;
