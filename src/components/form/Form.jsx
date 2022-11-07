import React, { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firebase";
import InsertReviewGame from "../../apollo/QueryApollo/hooks/mutationInsertGame";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";

function Form() {
  const genres = ["FPS", "Moba", "Horor"];
  // const [imgUrl, setImgUrl] = useState(null);

  const datas = {
    titleGame: "",
    genre: "",
    imgGame: "",
    reviewGame: "",
    ratings: "",
  };

  const UserId = localStorage.getItem("idUser");

  const [data, setData] = useState(datas);

  // console.log(data);

  const { insertGameReview, loadingGameReview, errorGameReview } =
    InsertReviewGame();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[6]);

    const file = e.target[6]?.files[0];
    console.log(file);
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed", () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        insertGameReview({
          variables: {
            objects: {
              title: data.titleGame,
              genre: data.genre,
              image_url: downloadURL,
              GameRev: {
                data: {
                  id_user: UserId,
                  review_game: data.reviewGame,
                  ratings: data.ratings,
                },
              },
            },
          },
        });
      });
    });
  };

  return (
    <Grid item xs={12} sm={8} md={5} elevation={6} square>
      <Box
        sx={{
          margin: 30,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          sx={{
            mb: 3,
          }}
        >
          SIGN IN
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          width="50%"
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            value={data.titleGame}
            onChange={handleChange}
            on
            required
            fullWidth
            id="title"
            label="Title Game"
            name="titleGame"
            autoFocus
          />

          <Box paddingBottom="20px">
            <InputLabel id="demo-simple-select-autowidth-label">
              Genre
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              name="genre"
              value={data.genre}
              onChange={handleChange}
              autoWidth
              label="Genre"
              sx={{ width: 200 }}
              input={<OutlinedInput label="Name" />}
            >
              {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box paddingBottom="20px">
            <InputLabel id="demo-simple-select-autowidth-label">
              Ratings
            </InputLabel>
            <Select
              name="ratings"
              value={data.ratings}
              onChange={handleChange}
              autoWidth
              label="Ratings"
              sx={{ width: 200 }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
            </Select>
          </Box>
          <Box paddingBottom={2}>
            <Button variant="contained" component="label">
              Upload File
              <input
                hidden
                accept="image/*"
                name="imgGame"
                onChange={handleChange}
                value={data.imgGame}
                type="file"
              />
            </Button>
          </Box>
          <TextField
            value={data.reviewGame}
            onChange={handleChange}
            width="100%"
            placeholder="Your Review ..."
            multiline
            variant="standard"
            name="reviewGame"
            maxRows={4}
            sx={{
              width: "100%",
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default Form;
