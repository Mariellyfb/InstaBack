import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UseContext";
import { formContainer } from "./Login.module.css";
import { saveToken } from "../utils/token";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const url = import.meta.env.VITE_API_URL;
export const Login = () => {
  const [user, setUser] = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

  console.log(import.meta.env.VITE_API_URL);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${url}users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    console.log(res);
    const data = await res.json();

    if (!res.ok) {
      setError(data?.error || "Error al iniciar sesión");
    } else {
      console.log(data);
      setUser(data);
      saveToken(data.data.token);
      localStorage.setItem("user", data.data.username);
      window.location.href = "/";
    }
  };

  return (
    <div className={formContainer}>
      <h1>InstaHack</h1>
      <img src={logo} alt="" className="logo" width={"90px"} height={"90px"} />
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
        </label>
        <button>Iniciar sesión</button>
        <footer>
          ¿No tienes cuenta? <Link to="/signup">¡Registrate!</Link>
        </footer>
      </form>
    </div>
  );
};
