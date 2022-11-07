import React from "react";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LoginImage from "../assets/Login_Image.png";

const Register = () => {
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
      }}
    >
      <Grid
        item
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${LoginImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
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

          <Box sx={{ mt: 1 }}>
            <Box display="flex">
              <Box width="50%">
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Box>
              <Box width="50%" paddingLeft={2}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Box>
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography>{"Don't have an account? Sign Up"}</Typography>
                <Typography>
                  <Link to="/Login">Login</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
