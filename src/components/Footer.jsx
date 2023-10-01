import { Box, ThemeProvider, createTheme } from "@mui/material";

function Footer() {
  const theme = createTheme();

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
          fontSize: "1.5rem",
          justifyContent: "center",
          backgroundColor: "#ae05ae",
          position: "fixed",
          bottom: -10,
          width: "100%",
        }}
      >
        <footer>© 2023 InstaHack. All rights reserved</footer>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
