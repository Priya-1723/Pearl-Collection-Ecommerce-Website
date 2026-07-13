import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C9898F", //dusty rose
    },
    secondary: {
      main: "#F6E7E3", //soft peach
    },
    background: {
      default: "#FCFAF8",
      paper: "#FFFFFF",
      pink: "#eed6d5",
      poster1: "#ded0c3",
      poster2: "#f3dfd7",
    },
    heading: {
      main: "#7B5754", //Deep Brown
      peach: "#c57e7f",
    },
    text: {
      primary: "#444444", //Dark Gray
      secondary: "#8D8D8D", //Gray
    },
    border: {
      main: "#E8DDD8", //Light Beige
    },
    btnHover: {
      main: "#B66E76", //Dark Rose
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
    },

    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
    },

    button: {
      fontFamily: "'Poppins', sans-serif",
    },
  },
});

export default theme;
