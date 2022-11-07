import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#2E2E2E",
  secondary: "#616161",
  red: "FF0000",
  card: "#e0e0e0",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    black: {
      main: colors.black,
    },
    red: {
      main: colors.red,
    },
    white: {
      main: colors.white,
    },
    cards: {
      main: colors.card,
    },
  },
  components: {
    Card: {
      borderRadius: 0,
      boxShadow: "none",
    },
  },
});

export default theme;
