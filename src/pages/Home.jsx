import { Navigate } from "react-router-dom";
import { useUser } from "../context/UseContext";
import { Posts } from "../pages/Posts";
import NavPrincipal from "../components/nav/NavPrincipal";
import { Box } from "@mui/material";

function Home() {
  const [user] = useUser();

  return (
    <div>
      <NavPrincipal />
<<<<<<< HEAD
      <Box sx={{ mt: "80px" }}>
=======
<<<<<<< HEAD
      <Box sx={{ mt: "80px" }}>
=======
      <Box sx={{ mt: "70px" }}>
        <h1>Bienvenido!</h1>
>>>>>>> 1b295d280e5ee6a4d1f2d3918573389aaa1e1f86
>>>>>>> 6752957d69ff5018f7d2d722d0d50054df3fc99e
        <Posts />
      </Box>
    </div>
  );
}
export default Home;
