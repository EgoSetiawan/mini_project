import React from "react";
import Navbar from "../components/navbar/Navbar";
import Detail from "../components/detail/DetailGame";
import Tswt from "../components/comments/Comment";
import { Grid } from "@mui/material";

function DetailGame() {
  return (
    <Grid
      container
      sx={{
        pt: 15,
        pb: 2,
        minHeight: "100vh",
        backgroundColor: "primary.light",
      }}
    >
      <Grid>
        <Detail />
        <Tswt />
      </Grid>
    </Grid>
  );
}

export default DetailGame;
