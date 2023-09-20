import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useUser } from "../context/UseContext";
import { formContainer, signup } from "./Signup.module.css";
import imagenSignup from "../assets/signup.png";

function Signup() {
  const [user, setUser] = useUser();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*   const [passwordV, setPasswordV] = useState(""); */
  const [error, setError] = useState();

  if (user) return <Navigate to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data);
      setError(data?.error || "Error de registro");
    } else {
      setUser(data);
    }
  };

  return (
    <div className={signup}>
      <img src={imagenSignup} alt="" />
      <div className={formContainer}>
        <h1>InstaHack</h1>
        <form onSubmit={handleSubmit}>
          <p>Regístrate para ver fotos y videos de tus amigos</p>
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
          {/*  <input
          placeholder="Repite la Contraseña"
          value={passwordV}
          onChange={(e) => setPasswordV(e.target.value)}
          required
          type="password"
        /> */}

          {/*    <p> {password === passwordV ? "coinciden" : "no coinciden"}</p> */}
          <footer>
            ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
          </footer>
        </form>
      </div>
    </div>
  );
}
export default Signup;
