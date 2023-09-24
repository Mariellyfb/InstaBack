import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useUser } from "../context/UseContext";
import { formContainer } from "./Login.module.css";

function Login() {
  const [user, setUser] = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  /* if (user) return <Navigate to="/" />; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    /* const token = data.data.token; */

    if (!res.ok) {
      setError(data?.error || "Error al iniciar sesión");
    } else {
      setUser(data);
      console.log(data);
      console.log(data.data.token);
      console.log(data.data.description);
    }
  };

  return (
    <div className={formContainer}>
      <h1>InstaHack</h1>
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
        {/*  <input
          placeholder="Repite la Contraseña"
          value={passwordV}
          onChange={(e) => setPasswordV(e.target.value)}
          required
          type="password"
        /> */}

        {/*    <p> {password === passwordV ? "coinciden" : "no coinciden"}</p> */}
        <footer>
          ¿No tienes cuenta? <Link to="/signup">¡Registrate!</Link>
        </footer>
      </form>
    </div>
  );
}

export default Login;
