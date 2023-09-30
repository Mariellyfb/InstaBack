import { Box, ThemeProvider, createTheme } from "@mui/material";

function Footer() {
  const theme = createTheme();

  // Define el tamaño de letra responsivo para pantallas pequeñas y medianas
  theme.typography.h6 = {
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
    fontSize: "30px",
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          fontFamily: "Dancing Script, cursive",
          pt: "10px",
          pb: "10px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#ae05ae",
        }}
      >
        <footer>© 2023 InstaHack. All rights reserved</footer>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
