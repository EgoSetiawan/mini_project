import React from "react";
import { Grid, Card } from "@mui/material";

import CarouselCards from "../components/carousel/CarouselCards";

function Landing() {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        pt: 15,
        px: 8,
        minHeight: "100vh",
        backgroundColor: "primary.light",
      }}
    >
      <Grid item xs={12}>
        <Card
          sx={{
            minHeight: "30vw",
            backgroundColor: "common.black",
            paddingBottom: "30px",
          }}
        >
          <CarouselCards />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            minHeight: "30vw",
            backgroundColor: "common.black",
            paddingBottom: "30px",
          }}
        >
          <CarouselCards />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            minHeight: "30vw",
            backgroundColor: "common.black",
            paddingBottom: "30px",
          }}
        >
          <CarouselCards />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Landing;
