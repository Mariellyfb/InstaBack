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
      <Box sx={{ mt: "80px" }}>
        <Posts />
      </Box>
    </div>
  );
}
export default Home;
