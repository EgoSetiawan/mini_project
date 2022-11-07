import React from "react";
import MediaCard from "./MediaCards";
import { Box, Grid, Typography } from "@mui/material";

const mediaCards = [
  {
    image: "src/assets/Game_2_Image.png",
    title: "PUBG",
    description: "Lorem Ipsum",
  },
  {
    image: "src/assets/Game_5_Image.png",
    title: "PUBG",
    description: "Lorem Ipsum",
  },
  {
    image: "src/assets/Game_5_Image.png",
    title: "PUBG",
    description: "Lorem Ipsum",
  },
];

function Card() {
  return (
    <Grid container spacing={5} justifyContent="center" alignItems="stretch">
      {mediaCards.map((mediaCards, i) => {
        return (
          <Grid key={i} item>
            <MediaCard {...mediaCards} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Card;
