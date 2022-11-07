import React, { useState } from "react";

import {
  Divider,
  Avatar,
  Grid,
  Paper,
  Typography,
  Card,
  TextField,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from "@mui/material";

function Comment() {
  const [value, setValue] = useState("");

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "50vh" }}
    >
      <Grid></Grid>
      <Card
        color="primary"
        sx={{
          display: "flex",
          width: "95%",
          height: "50%",
          padding: "40px 20px",
          backgroundColor: "common.black",
        }}
      >
        <Grid item width="50px">
          <Card
            width="300px"
            sx={{
              paddingY: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar width="auto" alt="Test">
              Test
            </Avatar>
          </Card>
        </Grid>
        <Grid item paddingLeft="30px" height="30px">
          <Card>
            <TextField
              id="new-comment"
              label="Comment"
              multiline
              minRows={3}
              maxRows={5}
              focused
              autoFocus
            />
          </Card>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Comment;

{
  /* <Paper style={{ padding: "40px 20px" }}>
<Typography variant="h4" sx={{}}>
  Comments
</Typography>
<Divider variant="fullWidth" style={{ margin: "10px" }} />
<Grid container wrap="nowrap" spacing={2}>
  <Grid item>
    <Avatar alt="Remy Sharp" src={imgLink} />
  </Grid>
  <Grid justifyContent="left" item xs zeroMinWidth>
    <Typography variant="h5" sx={{ margin: 0, textAlign: "left" }}>
      Michel Michel
    </Typography>
    <Typography paragraph sx={{ textAlign: "left" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
      luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet.
      Suspendisse congue vulputate lobortis. Pellentesque at interdum
      tortor. Quisque arcu quam, malesuada vel mauris et, posuere
      sagBoxittis ipsum. Aliquam ultricies a ligula nec faucibus. In
      elit metus, efficitur lobortis nisi quis, molestie porttitor
      metus. Pellentesque et neque risus. Aliquam vulputate, mauris
      vitae tinciduTypographynt interdum, mauris mi vehicula urna, nec
      feugiat quam lectus vitae ex.{" "}
    </Typography>
  </Grid>
</Grid>
<Divider variant="fullWidth" style={{ margin: "30px 0" }} />
</Paper> */
}
