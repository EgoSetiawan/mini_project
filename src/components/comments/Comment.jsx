import React, { useState } from "react";

import {
  Divider,
  Box,
  Avatar,
  Grid,
  Typography,
  Card,
  TextField,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from "@mui/material";

function Comment() {
  const stringToColor = (string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };
  const [value, setValue] = useState("");

  return (
    <Box
      sx={{
        pt: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          width: "95%",
          height: "50%",
          padding: "40px 20px",
          backgroundColor: "common.black",
        }}
      >
        <Box sx={{ paddingTop: "20px" }}>
          <Box marginLeft="10px" sx={{ display: "flex" }}>
            <Card sx={{ padding: "5px" }}>
              <Avatar {...stringAvatar("Kent Dodds")} />
            </Card>
            <Box width="1100px">
              <Card sx={{ marginLeft: "15px", width: "auto" }}>
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  multiline
                  value={value}
                  onChange={value}
                  maxRows={4}
                />
              </Card>
            </Box>
          </Box>
          <Box marginLeft="10px" sx={{ display: "flex", paddingTop: "20px" }}>
            <Card sx={{ padding: "5px" }}>
              <Avatar {...stringAvatar("Kent Dodds")} />
            </Card>
            <Box width="1100px">
              <Card sx={{ marginLeft: "15px", width: "auto" }}>
                <Typography padding="5px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean luctus ut est sed faucibus. Duis bibendum ac ex
                  vehicula laoreet. Suspendisse congue vulputate lobortis.
                  Pellentesque at interdum tortor. Quisque arcu quam, malesuada
                </Typography>
              </Card>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default Comment;
