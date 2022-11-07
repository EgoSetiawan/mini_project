import React from "react";
import Cards from "../components/card/Card";
import { Grid, Card, Typography, IconButton } from "@mui/material";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

import RemoveIcon from "@mui/icons-material/Remove";

function ReviewList() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        px: 8,
        minHeight: "100vh",
        backgroundColor: "primary.light",
      }}
    >
      <Card sx={{ width: "95%", backgroundColor: "common.black" }}>
        <Grid container pt={2}>
          <Typography
            variant="h4"
            color="common.white"
            sx={{
              mt: 2,
              pb: 2,
              ml: 10,
              width: "150px",
            }}
          >
            Review
          </Typography>
          <IconButton color="white" aria-label="add an review" size="medium">
            <ControlPointOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid pb={3}>
          <Cards />
        </Grid>
      </Card>
    </Grid>
  );
}

export default ReviewList;
