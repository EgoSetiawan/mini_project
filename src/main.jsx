import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/apollo-client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </ApolloProvider>
);
