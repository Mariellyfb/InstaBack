import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import { usePostsContext } from "../../context/UseContext";
import logo from "../../assets/logo.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "purple",
  backgroundColor: "purple",
  "&:hover": {
    backgroundColor: "purple",
    backgroundColor: "purple",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function NavPrincipal() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const { setSearchTerm } = usePostsContext();

  const logout = () => {
    localStorage.removeItem("token");
    return navigate("/login");
    return navigate("/login");
  };

  const settings = [{ text: `User : ${user}` }, { text: "Logout", to: logout }];
  const settings = [{ text: `User : ${user}` }, { text: "Logout", to: logout }];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#ae05ae" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={logo}
            alt=""
            style={{
              width: "60px",
              height: "60px",
              display: { xs: "none", md: "block" },
              marginRight: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              fontFamily: "Dancing Script, cursive",
              letterSpacing: ".3rem",
              color: "inherit",
              fontSize: "35px",
              display: { xs: "none", md: "block" },
            }}
          >
            InstaHack
            InstaHack
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "Dancing Script",
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            InstaHack
            InstaHack
          </Typography>


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onChange={(e) => {
                setSearchTerm(e.target.value.toLowerCase());
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {token && (
            <NavLink to="/posts">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ae05ae",
                  "&:hover": { backgroundColor: "purple" },
                }}
              >
                Subir post
              </Button>
            </NavLink>
          )}

          <Box sx={{ flexGrow: 0 }}>
            {token ? (
              <Tooltip title="Configuraciones">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user || "d"}
                    src="/static/images/avatar/2.jpg"
                    sx={{ backgroundColor: "#a9fce8" }}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Box display="flex" gap="10px">
                <NavLink to="/login">
                  <Button
                    sx={{ backgroundColor: "purple" }}
                    sx={{ backgroundColor: "purple" }}
                    variant="contained"
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/signup">
                  <Button
                    sx={{ backgroundColor: "purple" }}
                    variant="contained"
                  >
                  <Button
                    sx={{ backgroundColor: "purple" }}
                    variant="contained"
                  >
                    Register
                  </Button>
                </NavLink>
              </Box>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={setting.to}>
                    {setting.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavPrincipal;
