import React, { useState } from "react";
import {
  Rating,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";

function MediaCard({ image, title, description }) {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FF0000",
    },
  });

  const [value, setValue] = useState(2);

  return (
    <Card sx={{ width: 200, backgroundColor: "primary.light" }}>
      <CardContent>
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
        <CardMedia component="img" image={image} alt={image} />
        <Typography variant="body2" paddingTop="10px" color="text.secondary">
          {description}
        </Typography>
        <StyledRating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </CardContent>
    </Card>
  );
}

export default MediaCard;
