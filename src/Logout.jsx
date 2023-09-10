import { useUser } from "./UserContext";
/* import { useEffect } from "react"; */
function Logout() {
  const [user, setUser] = useUser();

  const handleLogout = () => {
    // Elimina el token o la información de autenticación almacenada en tu aplicación
    // Esto depende de cómo manejes la autenticación en tu aplicación, podría ser una función `logout` en tu contexto de usuario.
    // Por ejemplo, si estás usando un token JWT, puedes eliminarlo del almacenamiento local:
    localStorage.removeItem("token");

    // Luego, actualiza el estado del usuario para que no esté autenticado.
    setUser(null);
  };

  return (
    <Button variant="outlined" color="primary" onClick={handleLogout}>
      Cerrar sesión
    </Button>
  );
}
export default Logout;
