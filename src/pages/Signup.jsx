import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../context/UseContext";
import { formContainer, signup, imagen1, imagen2 } from "./Signup.module.css";
import imagenSignup from "../assets/signup.png";
import logo from "../assets/logo.png";
import { Alert } from "@mui/material";

const url = import.meta.env.VITE_API_URL;
function Signup() {
  const [user, setUser] = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [sucessRegister, setSucessRegister] = useState({
    state: false,
    text: "Se registro correctamente",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${url}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data?.message || "Error de registro");
    } else {
      setUser(data);
      setError("");
      setSucessRegister({
        state: true,
        text: "Se registro correctamente",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div className={signup}>
      <img src={imagenSignup} alt="" className={imagen1} />
      <div className={formContainer}>
        <h1>InstaHack</h1>
        <img src={logo} alt="" className={imagen2} />
        <form onSubmit={handleSubmit}>
          <p>Regístrate para ver fotos y videos de tus amigos</p>
          {error && (
            <Alert severity="error" sx={{ fontSize: "small" }}>
              {error}
            </Alert>
          )}
          {sucessRegister.state && (
            <Alert severity="success" sx={{ fontSize: "small" }}>
              {sucessRegister.text}
            </Alert>
          )}
          <label>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
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
          <button>Enviar</button>

          <footer>
            ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
          </footer>
        </form>
      </div>
    </div>
  );
}
export default Signup;
