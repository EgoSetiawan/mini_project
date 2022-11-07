import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Rating,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

function CarouselItmes({ image_url, title, genre }) {
  return (
    <Box sx={{ paddingLeft: "50px" }}>
      <Card
        sx={{
          maxWidth: 250,
          position: "relative",
          backgroundColor: "primary.light",
        }}
      >
        <CardActionArea component={RouterLink} to="/DetailGame">
          <CardContent>
            <CardInfo>
              <Typography
                level="h2"
                fontSize="md"
                sx={{ mb: 0.5 }}
                gutterBottom
                variant="h5"
                textAlign="center"
                color="common.white"
              >
                {title}
              </Typography>
              <Box sx={{ position: "relative" }}>
                <CardMedia component="img" image={image_url} alt={image_url} />
              </Box>
              <Typography
                variant="subtitle1"
                paddingTop="10px"
                color="text.secondary"
                gutterBottom
                component="div"
              >
                {genre}
              </Typography>
            </CardInfo>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default CarouselItmes;
