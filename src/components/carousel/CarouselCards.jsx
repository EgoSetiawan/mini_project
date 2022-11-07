import React, { useState, useRef } from "react";
import MediaCard from "./CarouselItems";
import { Box, Grid, Typography } from "@mui/material";

import Slider from "react-slick";
import "../styles/slick.css";
import "../styles/slick-theme.css";

import useGetGame from "../../apollo/QueryApollo/hooks/getGame";

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
  {
    image: "src/assets/Game_5_Image.png",
    title: "PUBG",
    description: "Lorem Ipsum",
  },
];

function Card() {
  const { gameData, gameLoading, gameError } = useGetGame();

  const slider = useRef();
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ paddingX: 20 }}>
      <Typography
        level="h2"
        variant="h4"
        color="common.white"
        sx={{
          mt: 2,
          pb: 2,
        }}
      >
        PopularGames
      </Typography>
      <Slider ref={slider} {...settings}>
        {gameData?.mini_project_game_rev?.map((gameData) => {
          return (
            <Grid key={gameData.id} item>
              <MediaCard {...gameData} />
            </Grid>
          );
        })}
      </Slider>
    </Box>
  );
}

export default Card;
